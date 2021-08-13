import {Component, EventEmitter, OnInit} from '@angular/core';
import {  MatDialogRef} from '@angular/material';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AccountModel, AccountResponse, ProxyListModel, ProxyModel, AccountListModel,
  InputAccountsModel,AccountTypeResponse, AccountTypeModel, CountryModel
} from '../spotify.model';
import { SpotifyService } from '../spotify.service';
import { ToastService} from '../shared/services/toast-service';

@Component({
  selector: 'app-addaccountpage',
  templateUrl: './addaccountpage.component.html',
  styleUrls: ['./addaccountpage.component.scss']
})

export class AddaccountpageComponent implements OnInit {

  public accounts: AccountModel[];
  public proxies: ProxyModel[];
  isLoadingResults = false;
  public proxyFileDataModel: any;

  // New Account
  email: string;
  proxyId: number;
  country: string;
  accountType: number;

  newAccount = new AccountListModel();

  // New Proxy
  ipAddress: string;
  port: string;
  accountId: number;
  proxyIpAddress: number;
  proxyPort: number;
  username:string;
  password:string;

  accountTypes: AccountTypeModel[];
  countrys: CountryModel[];


  angForm: FormGroup;
  submitted = false;
  onAdd = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddaccountpageComponent>,
    private spotify: SpotifyService,
    private _toastr: ToastService
  ) {}

  ngOnInit() {
    //let container:AccountpageComponent = this.dialogRef._containerInstance;
    this.createForm();
    this.getAccounts();
    this.getProxies();
    this.getAccountTypes();
    this.getCountrys();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      username : ['', [ Validators.required ]],
      pass: ['', Validators.compose([ Validators.required, Validators.minLength(8) ])],
      //usercountry: ['', [ Validators.required ]],
      //accountType: ['', [ Validators.required ]],
      proxyIp: ['', [ Validators.required ]],
      proxyPort: ['', [ Validators.required ]],
      //proxyCountry: ['', [Validators.required]],
      proxyUsername: ['', [Validators.required]],
      proxyUserPwd: ['', Validators.compose([ Validators.required, Validators.minLength(8) ])]
    });
  }

  close() {
    if(this.submitted)
      this.dialogRef.close("submitted");
    else
      this.dialogRef.close("not");
  }

  save() {
    if (this.angForm.invalid) {
      return;
    }

    let inAccountModels = new Array<InputAccountsModel>();
    let inAccountModel = new InputAccountsModel();
    inAccountModel.ipAddress = this.angForm.controls.proxyIp.value;
    inAccountModel.port = this.angForm.controls.proxyPort.value;
    inAccountModel.email = this.angForm.controls.username.value;
    inAccountModel.password = this.angForm.controls.pass.value;
    inAccountModel.accountTypeId = (<HTMLSelectElement>document.getElementById("userAccountType")).value;
    inAccountModel.country = (<HTMLSelectElement>document.getElementById("usercountry")).value;
    inAccountModel.proxyCountry = (<HTMLSelectElement>document.getElementById("proxyCountry")).value;
    inAccountModel.proxyUserName = this.angForm.controls.proxyUsername.value;
    inAccountModel.proxyPassword = this.angForm.controls.proxyUserPwd.value;
    inAccountModels.push(inAccountModel);
    console.log(inAccountModels);
    this.SaveAccountInfo(inAccountModels);
  }

  SaveAccountInfo(inAccountModels:InputAccountsModel[]){
    //Add Proxy
    const proxyData = new ProxyListModel();
    proxyData.proxies = new Array<ProxyModel>();
    if(this.proxies.length <= 0)
    {
      this.proxyId =  1;
    }
    else{
      let last:any = this.proxies[this.proxies.length-1];
      this.proxyId =   last.id + 1;
    }

    const payload = new AccountListModel();
    payload.accounts = new Array<AccountModel>();
    if(this.accounts.length <= 0)
    {
      this.accountId =  1;
    }
    else{
      let last:any = this.accounts[this.accounts.length-1];
      this.accountId =   last.accountId + 1;
    }

    for(let i=0; i<inAccountModels.length; i++) {
      proxyData.proxies.push(new ProxyModel(inAccountModels[i].ipAddress, inAccountModels[i].port, inAccountModels[i].proxyUserName, inAccountModels[i].proxyPassword, inAccountModels[i].proxyCountry, this.proxyId));
      payload.accounts.push(
        new AccountModel(inAccountModels[i].email, inAccountModels[i].password, this.proxyId.toString(), Number(this.accountId), inAccountModels[i].accountTypeId, inAccountModels[i].country));
      payload.accounts[i].playerStatus = "Added";

      this.accountId++;
      this.proxyId++;
    }
    // console.log(proxyData);
    // console.log(payload);
    this.spotify.saveProxies(proxyData).subscribe((res: ProxyListModel) => {
      this.isLoadingResults = false;
      this._toastr.success("New Proxy saved SuccessFully!", "success");
      this.getProxies();

      this.spotify.saveAccounts(payload).subscribe((res: AccountListModel) => {
        this.isLoadingResults = false;
        this._toastr.success('New Account Added SuccessFully ', 'Success');
        this.onAdd.emit(payload);
        this.submitted = true;
        this.getAccounts();
      }, (err: any) => {
        this.isLoadingResults = false;
        this.submitted = false;
        console.log(err);
        this._toastr.error('An error has occurred in account', 'Error');
      });

    }, (err: any) => {
      this.isLoadingResults = false;
      console.log(err);
      this._toastr.error('An error has occurred in proxy', 'Error');
    });


  }


  public getAccounts() {
    this.isLoadingResults = true;
    this.spotify.getAccounts().subscribe((res: AccountResponse) => {
      this.isLoadingResults = false;
      // this._toastr.success("Accounts received", "Success");
      this.accounts = res.accounts;
    }, (err: any) => {
      console.log(err);
      // this._toastr.error("An error has occurred", "Error");
      this.isLoadingResults = false;
    });
  }

  public getProxies() {
    this.isLoadingResults = true;
    this.spotify.getProxies().subscribe((res: ProxyListModel) => {
        this.isLoadingResults = false;
        // debugger;
        this.proxies = res.proxies;
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  public prepareSubmit(fileInput: any){
    this.proxyFileDataModel = fileInput;
    console.log(fileInput);
    (<HTMLSpanElement>document.getElementById("myfilename")).innerText = this.proxyFileDataModel.target.files[0].name;
    document.getElementById("myfilename").style.setProperty("opacity",'80');
  }

  public DataSubmit(){
    let self = this;
    if ( this.proxyFileDataModel == undefined || this.proxyFileDataModel == null ) {
      self._toastr.warning("Please upload the file first!", "Warning");
      return;
    }
    let files = this.proxyFileDataModel.target.files;
    if (this.isValidCSVFile(files[0])) {
      let reader = new FileReader();
      reader.readAsText(files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        let accountRecords = this.getRecordsFromCSV(csvRecordsArray, headersRow.length);
        console.log(accountRecords);
        this.SaveAccountInfo(accountRecords);
      };
      reader.onerror = function () {
        self._toastr.error("An error has occurred while reading file!", "Error");
        console.log('error is occured while reading file!');
      };
    }
    else {
      this._toastr.warning("Please import valid .csv file.");
    }

    (<HTMLSpanElement>document.getElementById("myfilename")).innerText = "";
    document.getElementById("myfilename").style.setProperty("opacity",'0');

  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  getRecordsFromCSV(csvRecordsArray: any, headerLength: any) {
    let csvArr = new Array<InputAccountsModel>();
    // let existflag = false;
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        // for(var rec of csvArr){
        //   if(rec.email == curruntRecord[0].trim()){existflag == true;break;}
        // }
        // if(!existflag){
          let csvRecord: InputAccountsModel = new InputAccountsModel();
          csvRecord.email = curruntRecord[0].trim();
          csvRecord.password = curruntRecord[1].trim();
          csvRecord.country = curruntRecord[2].trim();
          csvRecord.accountTypeId = curruntRecord[3].trim();
          csvRecord.ipAddress = curruntRecord[4].trim();
          csvRecord.port = curruntRecord[5].trim();
          csvRecord.proxyCountry = curruntRecord[6].trim();
          csvRecord.proxyUserName = curruntRecord[7].trim();
          csvRecord.proxyPassword = curruntRecord[8].trim();
          csvArr.push(csvRecord);
        // }else{
        //   existflag = false;
        // }
      }
    }
    return csvArr;
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

}
