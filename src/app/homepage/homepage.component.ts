import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ToastService } from '../shared/services/toast-service';
import {
  TrackStatistics, TrackStatisticsResponse, Track, TrackTransactionResponse, OperationResponse,
  AccountPlayList, AccountPlaylistModel, AccountModel, AccountResponse, ProxyListModel, ProxyModel,
  AccountListModel, SelectModel, AccountPlayingResponse, DashboardModel, DashboardResponse
} from '../spotify.model';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  editString: string;
  stateList: string[];
  selectedState: string;
  toggleFlag: boolean;
  oldId: string;
  dashboardData: DashboardModel[];

  public accounts: AccountModel[];
  public proxies: ProxyModel[];
  isLoadingResults = false;
  isEdit: boolean = false;

  constructor(private spotify: SpotifyService, private _toastr: ToastService) { }

  ngOnInit() {
    this.toggleFlag = true;
    this.stateList = this.spotify.getStateList();
    this.selectedState = this.stateList[0];
    this.oldId = "";

    this.getDashboardData();
  }

  changeValue(id: number, property: string, event: any) {
    this.editString = event.target.value;
  }

  updateList(id: number, property: string, event: any) {
    this.editString = event.target.value;
  }

  getDashboardData(){
    this.spotify.getDashboardDatas().subscribe((res: DashboardResponse) => {
      this.dashboardData = res.dash;
      console.log(this.dashboardData);
    }, (err: any) => {
      console.log(err);
    });
  }


  StatusChange(spanNumber: number, id: string, orderId: number, accountId: number) {
    document.getElementById("myDropdown"+id).classList.toggle("show");
    if(spanNumber == 1){
      this.PlayStart( orderId, accountId );
      // document.getElementById("pngicon").style.setProperty("src","");
      // alert(document.getElementById("pngicon").style.getPropertyValue("src"));
    }else if(spanNumber ==2){
      this.PlayStop( orderId, accountId );
    }
  }

  toggleCollapse(baseRowNum: number, rows: number){
    if(this.toggleFlag){
      this.toggleFlag = false;
      for(var i=1; i<=rows; i++){
        document.getElementById("row"+(baseRowNum+i)).style.setProperty("display","none");
      }
      document.getElementById("td_"+baseRowNum+"_1").setAttribute("rowspan","1");
      document.getElementById("td_"+baseRowNum+"_2").setAttribute("rowspan","1");
      document.getElementById("collapseImgId"+baseRowNum).setAttribute("src","assets/img/down.png");
    }else{
      this.toggleFlag = true;
      for(var i=1; i<=rows; i++){
        document.getElementById("row"+(baseRowNum+i)).style.removeProperty("display");
      }
      document.getElementById("td_"+baseRowNum+"_1").setAttribute("rowspan",(rows+1).toString());
      document.getElementById("td_"+baseRowNum+"_2").setAttribute("rowspan",(rows+1).toString());
      document.getElementById("collapseImgId"+baseRowNum).setAttribute("src","assets/img/up.png");
    }
  }

  menuShow(id: string){
    document.getElementById("myDropdown"+id).classList.toggle("show");
  }

  public PlayStart(orderId:number, accountId:number) {

    this.isLoadingResults = true;
    this.spotify.startPlaying(orderId, accountId)
      .subscribe((res: AccountPlayingResponse) => {
        this.isLoadingResults = false;
        //this.setStartAndStopButton(res)
        console.log(res);
        if (accountId === 0) {
          this._toastr.success('Going to start playing accounts that orderId is ' + orderId + '!', "Success");
        }
        var p = "";
        if(res.isPlaying){
          (<HTMLDivElement>document.getElementById("status_" + res.orderId + "_0")).innerText = "Playing";
          p = (<HTMLInputElement>document.getElementById("plays_" + res.orderId + "_0")).value;
          (<HTMLInputElement>document.getElementById("plays_" + res.orderId + "_0")).value = this.GetNextPlays(p,res.states.length,1);
        }else{
          (<HTMLDivElement>document.getElementById("status_" + res.orderId + "_0")).innerText = "Complete";
        }
        for(var i=0; i<res.states.length; i++){
          (<HTMLDivElement>document.getElementById("status_" + res.orderId + "_" + res.states[i].accountId)).innerText = res.states[i].playerStatus;
          p = (<HTMLInputElement>document.getElementById("plays_" + res.orderId + "_" + res.states[i].accountId)).value;
          (<HTMLInputElement>document.getElementById("plays_" + res.orderId + "_" + res.states[i].accountId)).value = this.GetNextPlays(p,res.states.length,2);
        }
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
        this._toastr.error("An error has occurred", "Error");
      });

  }

  public GetNextPlays(playsStr:string, rows:number,type:number){
    var playNum = playsStr.split("/");
    var num = parseInt(playNum[0]);
    if(type == 1){
      num = num + 1*rows;
    }else{
      num++;
    }

    if(num > parseInt(playNum[1])) num = parseInt(playNum[1]);
    return num.toString() + "/" + playNum[1];
  }
  public PlayStop(orderId:number, accountId:number) {
    this.isLoadingResults = true;
    this.spotify.stopPlaying(orderId, accountId)
      .subscribe((res: AccountPlayingResponse) => {
        this.isLoadingResults = false;
        console.log(res);
        let p = "";
        if(!res.isPlaying){
          (<HTMLDivElement>document.getElementById("status_" + res.orderId + "_0")).innerText = "Stopped";
        }
        for(var i=0; i<res.states.length; i++){
          (<HTMLDivElement>document.getElementById("status_" + res.orderId + "_" + res.states[i].accountId)).innerText = "Stopped";
        }
        console.log(res);
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  // private setStartAndStopButton(accountPlayingResponse: AccountPlayingResponse) {
  //   this.isCurrentlyPlaying = accountPlayingResponse.isPlaying;
  //   this.accountPlayingStates = accountPlayingResponse.states;
  // }
}
