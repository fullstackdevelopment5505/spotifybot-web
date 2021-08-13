import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {
  AccountModel, ProxyListModel, ProxyModel, InputAccountsModel, AccountTypeResponse,
  AccountTypeModel, CountryModel, EditAccountModel } from '../spotify.model';
import { SpotifyService } from '../spotify.service';
import { ToastService} from '../shared/services/toast-service';

@Component({
  selector: 'app-editaccountpage',
  templateUrl: './editaccountpage.component.html',
  styleUrls: ['./editaccountpage.component.scss']
})
export class EditaccountpageComponent implements OnInit {

  // New Account
  email: string;
  proxyId: number;
  acountry: string;
  accountType: number;
  password: string;
  accountId: number;
  proxyIpAddress: string;
  proxyPort: number;
  proxyUsername:string;
  proxyUserPwd: string;
  proxyCountry: string;

  public accounts: AccountModel[];
  public accountInfo: AccountModel;
  public proxies: ProxyModel[];
  isLoadingResults = false;
  accountTypes: AccountTypeModel[];
  countrys: CountryModel[];
  angForm: FormGroup;
  submitted = false;
  onEdit = new EventEmitter();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditaccountpageComponent>,
    private spotify: SpotifyService,
    private _toastr: ToastService
  ) {
    this.accountId = data.accountId;
  }

  ngOnInit() {
    this.createForm();
    this.getAccountInfo(this.accountId);
    this.getProxies();
    this.getAccountTypes();
    this.getCountrys();
  }

  close() {
      this.dialogRef.close();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      username : ['', [ Validators.required ]],
      pass: ['', Validators.compose([ Validators.required, Validators.minLength(8) ])],
      proxyIp: ['', [ Validators.required ]],
      proxyPort: ['', [ Validators.required ]],
      proxyUsername: ['', [Validators.required]],
      proxyUserPwd: ['', Validators.compose([ Validators.required, Validators.minLength(8) ])]
    });
  }

  public getAccountInfo(accountId: number) {
    this.isLoadingResults = true;
    this.spotify.getAccountInfo(accountId).subscribe((res: AccountModel) => {
      this.isLoadingResults = false;
      this.accountInfo = res;
      this.accountId = res.accountId;
      this.email = res.email;
      this.acountry = res.country;
      this.password = res.password;
      this.accountType = res.accountTypeId;
      this.proxyId = res.currentProxyId;
      this.proxyIpAddress = res.currentProxy.ipAddress;
      this.proxyPort = res.currentProxy.port;
      this.proxyUsername = res.currentProxy.userName;
      this.proxyUserPwd = res.currentProxy.password;
      this.proxyCountry = res.currentProxy.country;
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  public getProxies() {
    this.isLoadingResults = true;
    this.spotify.getProxies().subscribe((res: ProxyListModel) => {
      this.isLoadingResults = false;
      this.proxies = res.proxies;
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  getAccountTypes(){
    this.spotify.getAccountTypes().subscribe((res: AccountTypeResponse) => {
      this.accountTypes = res.accountTypes;
    }, (err: any) => {
      console.log(err);
    });
  }

  getCountrys(){
    this.spotify.getCountrys().subscribe((res: CountryModel[]) => {
      this.countrys = res;
    }, (err: any) => {
      console.log(err);
    });
  }

  save() {
    if (this.angForm.invalid) {
      //return;
    }
    let inAccountModel = new InputAccountsModel();
    inAccountModel.ipAddress = (<HTMLInputElement>document.getElementById("proxyIp")).value;
    inAccountModel.port = (<HTMLInputElement>document.getElementById("proxyPort")).value;
    inAccountModel.email = (<HTMLInputElement>document.getElementById("username")).value;
    inAccountModel.password = (<HTMLInputElement>document.getElementById("pass")).value;
    inAccountModel.accountTypeId = (<HTMLSelectElement>document.getElementById("userAccountType")).value;
    inAccountModel.country = (<HTMLSelectElement>document.getElementById("usercountry")).value;
    inAccountModel.proxyCountry = (<HTMLSelectElement>document.getElementById("proxyCountry")).value;
    inAccountModel.proxyUserName = (<HTMLInputElement>document.getElementById("proxyUsername")).value;
    inAccountModel.proxyPassword = (<HTMLInputElement>document.getElementById("proxyUserPwd")).value;
    this.UpdateAccountInfo(inAccountModel);
  }

  UpdateAccountInfo(inAccountModel:InputAccountsModel){
    const proxyData = new ProxyModel(inAccountModel.ipAddress, inAccountModel.port, inAccountModel.proxyUserName, inAccountModel.proxyPassword, inAccountModel.proxyCountry, this.proxyId);
    const accountData = new EditAccountModel(this.accountId,this.proxyId,inAccountModel.email, inAccountModel.password, Number(inAccountModel.accountTypeId), inAccountModel.country);
    accountData.playerStatus = "Added";

    this.spotify.editProxy(proxyData).subscribe((res:string) => {
      this._toastr.success('Proxy updated successfully ', 'Success');
      this.spotify.editAccount(accountData).subscribe( (res:string) => {
        this._toastr.success('Account updated successfully ', 'Success');
        this.onEdit.emit();
      },(err: any) => {
        this.onEdit.emit();
        this._toastr.error('An error has occurred in account', 'Error');
      })
    },(err: any) => {
      this._toastr.error('An error has occurred in proxy', 'Error');
    });
  }
}
