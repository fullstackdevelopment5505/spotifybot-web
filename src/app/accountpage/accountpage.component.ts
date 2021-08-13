import { Component, OnInit, ViewChild } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { AddaccountpageComponent } from '../addaccountpage/addaccountpage.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastService } from '../shared/services/toast-service';
import {EditaccountpageComponent} from '../editaccountpage/editaccountpage.component';
import {
  AccountModel, AccountResponse, ProxyListModel, ProxyModel,
  AccountListModel, SelectModel, AccountPlayingResponse, AccountState, EditAccountModel
} from '../spotify.model';


@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.scss']
})

export class AccountpageComponent implements OnInit {

  public isCurrentlyPlaying = false;
  public accountPlayingStates: AccountState[];
  public accounts: AccountModel[];
  public proxies: ProxyModel[];
  isLoadingResults = false;
  public selectedAccountId: number = 0;

  // New Account
  email: string;
  proxyId: number;
  country: string;
  accountType: number;



  // New Proxy
  ipAddress: string;
  port: string;
  accountId: number;
  proxyIpAddress: number;
  proxyPort: number;
  username:string;
  password:string;



  selectedAccount: AccountModel;
  editString: string;
  dataSource: MatTableDataSource<AccountModel>;
  id: number;

  //private _toastr: ToastService;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;

  constructor(private spotify: SpotifyService, public dialog: MatDialog, private _toastr: ToastService) { }

  ngOnInit() {
    this.setPlayingState();
    this.getAccounts();
  }

  paginatorSetting() {
    this.id = 0;
    this.dataSource = new MatTableDataSource(this.accounts);
    this.dataSource.paginator = this.paginator;
  }


  public selectAccount(account) {
    this.selectedAccount = account;

  }

  public addAccountDlgShow() {
    const dialogRef = this.dialog.open(AddaccountpageComponent, {width: '635px',height:'650px'});
    dialogRef.disableClose = true;

    const sub = dialogRef.componentInstance.onAdd.subscribe((resultData) => {
      console.log(resultData);
      this.spotify.ChromeStart(resultData).subscribe( (res:string) =>{
        this._toastr.success('Chrome(s) browser has started', 'Success');
      },(err: any) => {
        this._toastr.error('Chrome browser has occurred in account', 'Error');
      });
      this.ngOnInit();
    });
    dialogRef.afterClosed().subscribe(result => {

        // if(result == "submitted"){
        //   this.spotify.ChromeStart().subscribe( (res:string) =>{
        //     this._toastr.success('Chrome(s) browser has started', 'Success');
        //   },(err: any) => {
        //     this._toastr.error('Chrome browser has occurred in account', 'Error');
        //   });
        // }
        this.ngOnInit();

    });

  }

  changeValue(id: number, property: string, event: any) {
    this.editString = event.target.value;
  }

  updateList(id: number, property: string, event: any) {
    this.editString = event.target.value;
    this.accounts[id][property] = this.editString;
  }

  menuShow(id: string){
    document.getElementById("myDropdown"+id).classList.toggle("show");
  }

  StatusChange(spanNumber: number, id: string , accountId: number) {
    document.getElementById("myDropdown"+id).classList.toggle("show");
    if(spanNumber == 1){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {accountId:accountId};
      dialogConfig.width = '635px';
      dialogConfig.height = '580px';
      const dialogRef = this.dialog.open(EditaccountpageComponent, dialogConfig);
      dialogRef.disableClose = true;

      const sub = dialogRef.componentInstance.onEdit.subscribe((resultData) => {
        this.ngOnInit();
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    }else if(spanNumber ==2){
      //this.PlayStop( orderId, accountId );
      this.spotify.deleteAccount(accountId).subscribe((res: AccountResponse) => {
        this.isLoadingResults = false;
        this.accounts = res.accounts;
        this._toastr.success("Account Delete successfully", "Success");
      }, (err: any) => {
        console.log(err);
        this._toastr.error("An error has occurred", "Error");
        this.isLoadingResults = false;
      });;
    }
  }



  /*
  addition function.
   */
  public getAccounts() {
    this.isLoadingResults = true;
    this.spotify.getAccounts().subscribe((res: AccountResponse) => {
        this.isLoadingResults = false;
        this.accounts = res.accounts;
        //console.log(this.accounts);
      }, (err: any) => {
        console.log(err);
        this._toastr.error("An error has occurred", "Error");
        this.isLoadingResults = false;
      });
  }

  private setPlayingState() {
    // debugger;
    this.spotify.getPlayingState(this.selectedAccountId).subscribe((res: AccountPlayingResponse) => {
        this.setStartAndStopButton(res);
      }, (err: any) => {
        console.log(err);
      });
  }

  private setStartAndStopButton(accountPlayingResponse: AccountPlayingResponse) {
    this.isCurrentlyPlaying = accountPlayingResponse.isPlaying;
    this.accountPlayingStates = accountPlayingResponse.states;
  }
}
