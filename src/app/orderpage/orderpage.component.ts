import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ToastService } from '../shared/services/toast-service';
import {
  TrackStatistics, TrackStatisticsResponse, Track, TrackTransactionResponse, OperationResponse,
  AccountPlayList, AccountPlaylistModel, AccountModel, AccountResponse, ProxyListModel, ProxyModel,
  AccountListModel, SelectModel, AccountPlayingResponse,
  AccountState, OrderModel, OrderResponse, TransactionResponse, OrderDetailResponse, JobModel,
  OrderJobDetailResponse, AccountTrackModel, AccountTrackResponse, AccountCountsModel, AccountCountsResponse, TrackChangeModel
} from '../spotify.model';
import {AddaccountpageComponent} from '../addaccountpage/addaccountpage.component';
import {MatDialog} from '@angular/material';
import {AddOrderComponent} from '../add-order/add-order.component';
import {count} from 'rxjs/operators';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss']
})
export class OrderpageComponent implements OnInit {

  editString: string;

  public allOrders: OrderModel[];
  public orderJobs: JobModel[];
  public orderAccountTracks: AccountTrackModel[];
  public accounts: AccountModel[];
  public proxies: ProxyModel[];
  isLoadingResults = false;
  public selectedAccountId: number = 0;
  public accountCounts: AccountCountsModel[];
  premiumCount: number =0;
  premiumDuoCount: number = 0;
  familyMemberCount: number = 0;
  familyOwnerCount: number = 0;
  freeCount: number =0;
  allAccountCount: number = 0;

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
  stateSel: number[];
  flag: number;
  useAccount: number[];


  constructor(private spotify: SpotifyService, public dialog: MatDialog, private _toastr: ToastService) { }

  ngOnInit() {
    this.flag = 0;
    this.stateSel = [ 0, 0, 0, 0, 0 ];
    this.getAccountCounts();
    this.getOrders();

  }

  changeValue(id: number, property: string, event: any) {
    this.editString = event.target.value;
  }

  updateList(id: number, property: string, event: any) {
    this.editString = event.target.value;
  }

  redirectToUpdate(orderItem,index) {
    var newTrackData = new TrackChangeModel();
    newTrackData.trackId = (<HTMLInputElement>document.getElementById("trackid_" + index)).value;
    newTrackData.trackTitle = (<HTMLInputElement>document.getElementById("tracktitle_" + index)).value;
    newTrackData.playCount = parseInt((<HTMLInputElement>document.getElementById("playcount_" + index)).value);
    this.spotify.EditTrack(this.selectedAccountId, orderItem.id, newTrackData).subscribe((res: TrackTransactionResponse) => {
      this._toastr.success("Track updated ", "Success");
      this.ngOnInit();
    }, (err: any) => {
      console.log(err);
      this._toastr.error("An error has occurred", "Error");
    });
  }

  redirectToDelete(orderItem) {
    this.spotify.removeTrack(this.selectedAccountId, orderItem.id).subscribe((res: TrackTransactionResponse) => {
      this._toastr.success("Track removed ", "Success");
      this.ngOnInit();
    }, (err: any) => {
      console.log(err);
      this._toastr.error("An error has occurred", "Error");
    });
  }


  headerButtonClick(id) {

  }

  ResetData() {
    this.ngOnInit();
  }

  SubmitData(){
    this.processOrder();
  }

  public addNewOrderDlg(){
    const dialogRef = this.dialog.open(AddOrderComponent, {width: '632px',height:'650px'});
    dialogRef.disableClose = true;
    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      this.ngOnInit();
    });
    dialogRef.afterClosed().subscribe(result => {
      //this.ngOnInit();
    });
  }

  private getOrders() {
    this.allOrders = new Array<OrderModel>();
    this.isLoadingResults = false;
    this.spotify.getOrders().subscribe((res: OrderResponse) => {
      this.isLoadingResults = false;
      this.allOrders = res.orders;
      this.getUseAccount();
        // this._toastr.success("Orders received!", "Success");
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
         this._toastr.error('An error has occurred', "Error");
      });
  }

  private getUseAccount(){
    this.useAccount=[];
    for(var i=0; i<this.allOrders.length;i++){
      this.useAccount[i]=0;
      if(this.flag == 0){
        for(var j=0; j<this.allOrders[i].accountCounts.length; j++){
          this.useAccount[i] = this.useAccount[i] +this.allOrders[i].accountCounts[j];
        }
      }else{
        for(var j=0; j<this.allOrders[i].accountCounts.length; j++){
          if(this.stateSel[j] == 1){
            this.useAccount[i] = this.useAccount[i] + this.allOrders[i].accountCounts[j];
          }
        }
      }
    }
  }

  private getAccountCounts() {
    this.spotify.getAccountCounts().subscribe((res: AccountCountsResponse) => {
      console.log(res);
      this.accountCounts = res.accountCounts;
      this.allAccountCount = 0;
      this.familyOwnerCount = 0;
      this.familyMemberCount =0;
      this.premiumCount = 0;
      this.premiumDuoCount =0;
      this.freeCount = 0;
      for(var index in this.accountCounts){
        if( this.accountCounts[index].accountType == 'Family Owner'){
          this.familyOwnerCount = this.familyOwnerCount + this.accountCounts[index].accountCount;
          this.allAccountCount = this.allAccountCount + this.familyOwnerCount;
        }else if( this.accountCounts[index].accountType == 'Family Member'){
          this.familyMemberCount = this.familyMemberCount + this.accountCounts[index].accountCount;
          this.allAccountCount = this.allAccountCount +this.familyMemberCount;
        }else if( this.accountCounts[index].accountType == 'Premium'){
          this.premiumCount = this.premiumCount + this.accountCounts[index].accountCount;
          this.allAccountCount = this.allAccountCount + this.premiumCount;
        }else if( this.accountCounts[index].accountType == 'PremiumDuo'){
          this.premiumDuoCount = this.premiumDuoCount + this.accountCounts[index].accountCount;
          this.allAccountCount = this.allAccountCount + this.premiumDuoCount;
        }else if( this.accountCounts[index].accountType == 'Free'){
          this.freeCount = this.freeCount + this.accountCounts[index].accountCount;
          this.allAccountCount = this.allAccountCount + this.freeCount;
        }else{
          if(this.accountCounts[index].accountType.indexOf("Premium") >= 0 ){
            this.premiumCount = this.premiumCount + this.accountCounts[index].accountCount;
            this.allAccountCount = this.allAccountCount + this.accountCounts[index].accountCount;
          }
        }
      }
      // this.useAccountCount = this.familyOwnerCount + this.freeCount;
      // this._toastr.success("get Account Counts by types!", "Success");
    }, (err: any) => {
      console.log(err);
    })
  }

  /**
   * Processes the order
   */
  public processOrder() {
    this.clearResult();
    this.isLoadingResults = true;
    this.spotify.processOrder()
      .subscribe((res: OrderResponse) => {
        this.isLoadingResults = false;
        this._toastr.success("Order processed ", "Success");
        this.allOrders = res.orders;
        this.getUseAccount();
      }, (err: any) => {
        this.isLoadingResults = false;
        this._toastr.error("An error has occurred", "Error");

        console.log(err);
      });
  }

  private clearResult() {
    this.orderJobs = [];
    this.orderAccountTracks = [];
  }

  public getOrderDetails(orderId: number) {
    this.orderJobDetail(orderId);
    this.accountTracksByOrder(orderId);
  }

  /**
   * get jobs of the order
   */
  public orderJobDetail(orderId: number) {
    this.isLoadingResults = true;
    this.spotify.orderJobDetail(orderId)
      .subscribe((res: OrderJobDetailResponse) => {
        this.isLoadingResults = false;
        this.orderJobs = res.jobs;
        this._toastr.success("Order job detail received ", "Success");

      }, (err: any) => {
        this.isLoadingResults = false;
        this._toastr.error("An error has occurred", "Error");

        console.log(err);
      });
  }

  handleOrderTransaction(orderItem: OrderModel) {
    this.allOrders.push(orderItem);
  }


  /**
   * get account tracks by order
   */
  public accountTracksByOrder(orderId: number) {
    this.isLoadingResults = true;
    this.spotify.accountTracksByOrder(orderId)
      .subscribe((res: AccountTrackResponse) => {
        this.isLoadingResults = false;
        this.orderAccountTracks = res.accountTracks;
        this._toastr.success("Order account tracks received ", "Success");

      }, (err: any) => {
        this.isLoadingResults = false;
        this._toastr.error("An error has occurred", "Error");

        console.log(err);
      });
  }

  public stateChange(divId: number){
    //debugger
    if( this.stateSel[divId-1] == 0 ){
      this.stateSel[divId-1] = 1;
      document.getElementById('button'+divId).style.setProperty('background-color','#28A745');
    }else{
      this.stateSel[divId-1] = 0;
      document.getElementById('button'+divId).style.setProperty('background-color','#000000');
    }
    this.flag = 0;
    for(var i=0; i< this.stateSel.length; i++){
      this.flag = this.flag + this.stateSel[i];
      // if(this.stateSel[i] == 1){
      //   this.flag = this.flag
      // }
    }
    if(this.flag > 0 && this.flag < 5){
      this.flag = 1;
    }else{
      this.flag = 0;
    }
    this.getUseAccount();
  }
}

