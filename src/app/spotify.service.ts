import { Injectable } from '@angular/core';
import { throwError, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpParams} from '@angular/common/http';
import {AppSettings} from './shared/constants';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {
  TrackStatisticsResponse,
  Track, TrackTransactionResponse, OperationResponse, AccountPlaylistModel, AccountResponse,
  ProxyListModel, ProxyModel, AccountListModel, AccountPlayingResponse, OrderResponse,
  OrderModel, OrderJobDetailResponse, AccountTrackResponse,
  AccountModel, AccountCountsResponse, DashboardResponse, TrackChangeModel,
  CountryModel, AccountTypeResponse, EditAccountModel, ChartModel
} from './spotify.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  chartDataList: ChartModel[];
  stateDataList: string[];

  constructor(private http: HttpClient) {console.log(this.getAuth());}

  getAuth = () => {
    // let params: URLSearchParams = new URLSearchParams();
    // params.set('grant_type', 'client_credentials');
    // let body = params.toString();

    return this.http.post('https://accounts.spotify.com/authorize', {}, httpOptions).pipe(
      tap((res: AccountPlayingResponse) => {console.log(`Started playing`);console.log(res)}),
      catchError(this.handleError<AccountPlayingResponse>('startPlaying'))
    );

  }

  getStateList(){
    this.stateDataList = ['Playing',  'Proxy', 'Track ID', 'Ready', 'Credentials'];
    return this.stateDataList;
  }


  getChartDataList(): Observable<ChartModel[]> {
    const apiUrl: string = AppSettings.API_GetCharts;

    return this.http.post<ChartModel[]>(apiUrl, '' , httpOptions)
      .pipe(
        tap((charts: ChartModel[]) => console.log(`chart info downloaded`)
        ),
        catchError(this.handleError<ChartModel[]>('chart info'))
      );
  }

  /*
  api service
   */

  getPlayingState(accountId: number): Observable<AccountPlayingResponse> {
    const apiUrl: string = AppSettings.API_GetState.replace('{:accountId}', accountId.toString())

    return this.http.get<AccountPlayingResponse>(apiUrl)
      .pipe(
        tap(product => console.log('fetched account playing status')),
        catchError(this.handleError<AccountPlayingResponse>('startPlaying'))
      );
  }

  RefreshPlaylist(accountId: number): Observable<AccountPlayingResponse> {
    debugger;
    const apiUrl: string = AppSettings.API_StartPlaying.replace('{:accountId}', accountId.toString())

    return this.http.post<AccountPlayingResponse>(apiUrl, {}, httpOptions)
      .pipe(
        tap((playingState: AccountPlayingResponse) => console.log(`Started playing`)
        ),
        catchError(this.handleError<AccountPlayingResponse>('startPlaying'))
      );
  }

  startPlaying(orderId: number, accountId: number): Observable<AccountPlayingResponse> {
    const apiUrl: string = AppSettings.API_StartPlaying.replace('{:accountId}', accountId.toString()) + "/" +orderId;
    return this.http.post<AccountPlayingResponse>(apiUrl, {}, httpOptions)
      .pipe(
        tap((playingState: AccountPlayingResponse) => console.log(`Started playing`)
        ),
        catchError(this.handleError<AccountPlayingResponse>('startPlaying'))
      );
  }

  stopPlaying(orderId: number, accountId: number): Observable<AccountPlayingResponse> {
    const apiUrl: string = AppSettings.API_StopPlaying.replace('{:accountId}', accountId.toString()) + "/" +orderId;

    return this.http.post<AccountPlayingResponse>(apiUrl, {}, httpOptions)
      .pipe(
        tap((playingState: AccountPlayingResponse) => console.log(`Stopped playing`)
        ),
        catchError(this.handleError<AccountPlayingResponse>('stopPlaying'))
      );
  }

  getStatistics(accountId: number): Observable<TrackStatisticsResponse> {
    const apiUrl: string = AppSettings.API_GetStatistics.replace('{:accountId}', accountId.toString())

    return this.http.get<TrackStatisticsResponse>(apiUrl)
      .pipe(
        tap(trackResponse => console.log('fetched statistics')),
        catchError(this.handleError<TrackStatisticsResponse>('getStatistics'))
      );
  }

  getPlayLists(accountId: number): Observable<AccountPlaylistModel> {
    const apiUrl: string = AppSettings.API_GetPlaylists.replace('{:accountId}', accountId.toString())

    return this.http.get<AccountPlaylistModel>(apiUrl)
      .pipe(
        tap(trackResponse => console.log('fetched account playlists')),
        catchError(this.handleError<AccountPlaylistModel>('getPlayLists'))
      );
  }

  addTrack(accountId: number, track: Track): Observable<TrackTransactionResponse> {
    const apiUrl: string = AppSettings.API_AddTrack.replace('{:accountId}', accountId.toString())

    return this.http.post<TrackTransactionResponse>(apiUrl, track, httpOptions)
      .pipe(
        tap((playingState: TrackTransactionResponse) => console.log(`track added`)
        ),
        catchError(this.handleError<TrackTransactionResponse>('addTrack'))
      );
  }

  placeOrder( order: OrderModel): Observable<OrderResponse> {
    const apiUrl: string = AppSettings.API_PlaceOrder;

    return this.http.post<OrderResponse>(apiUrl, order, httpOptions)
      .pipe(
        tap((playingState: OrderResponse) => console.log(`order added`)
        ),
        catchError(this.handleError<OrderResponse>('placeOrder'))
      );
  }
  processOrder( ): Observable<OrderResponse> {
    const apiUrl: string = AppSettings.API_ProcessOrder;//.replace('{:orderId}', orderId.toString())

    return this.http.post<OrderResponse>(apiUrl, '' , httpOptions)
      .pipe(
        tap((playingState: OrderResponse) => console.log(`order orocessed`)
        ),
        catchError(this.handleError<OrderResponse>('processOrder'))
      );
  }

  orderJobDetail( orderId: number): Observable<OrderJobDetailResponse> {
    const apiUrl: string = AppSettings.API_OrderJobDetail.replace('{:orderId}', orderId.toString())

    return this.http.get<OrderJobDetailResponse>(apiUrl , httpOptions)
      .pipe(
        tap((playingState: OrderJobDetailResponse) => console.log(`order job detail retrieved`)
        ),
        catchError(this.handleError<OrderJobDetailResponse>('orderDetail'))
      );
  }

  accountTracksByOrder( orderId: number): Observable<AccountTrackResponse> {
    const apiUrl: string = AppSettings.API_OrderAccountTrackDetail.replace('{:orderId}', orderId.toString())

    return this.http.get<AccountTrackResponse>(apiUrl , httpOptions)
      .pipe(
        tap((playingState: AccountTrackResponse) => console.log(`order track detail retrieved`)
        ),
        catchError(this.handleError<AccountTrackResponse>('accountTracksByOrder'))
      );
  }

  getAllAccountTracks(): Observable<AccountTrackResponse> {
    const apiUrl: string = AppSettings.API_GetAllAccountTracks;

    return this.http.get<AccountTrackResponse>(apiUrl , httpOptions)
      .pipe(
        tap((playingState: AccountTrackResponse) => console.log(`all track detail retrieved`)
        ),
        catchError(this.handleError<AccountTrackResponse>('getAllAccountTracks'))
      );
  }

  removeTrack(accountId: number, orderId:number): Observable<TrackTransactionResponse> {
    const apiUrl: string = AppSettings.API_RemoveTrack
      .replace('{:accountId}', accountId.toString()) + '/' + orderId;
    return this.http.delete<TrackTransactionResponse>(apiUrl, httpOptions)
      .pipe(
        tap((playingState: TrackTransactionResponse) => console.log(`track removed`)
        ),
        catchError(this.handleError<TrackTransactionResponse>('removeTrack'))
      );
  }

  EditTrack(accountId: number, orderId: number, newTrackData: TrackChangeModel ): Observable<TrackTransactionResponse> {
    const apiUrl: string = AppSettings.API_EditTrack
      .replace('{:accountId}', accountId.toString()) + '/' + orderId;

    return this.http.post<TrackTransactionResponse>(apiUrl, newTrackData, httpOptions)
      .pipe(
        tap((playingState: TrackTransactionResponse) => console.log(`track removed`)
        ),
        catchError(this.handleError<TrackTransactionResponse>('removeTrack'))
      );
  }

  syncPlaylist(playlist: AccountPlaylistModel): Observable<OperationResponse> {
    var accountId = 1;
    const apiUrl: string = AppSettings.API_SyncPlaylist.replace('{:accountId}', accountId.toString())

    return this.http.post<OperationResponse>(apiUrl, playlist, httpOptions)
      .pipe(
        tap((playingState: OperationResponse) => console.log(`playlist synced`)
        ),
        catchError(this.handleError<OperationResponse>('syncPlaylist'))
      );
  }

  getAccounts(): Observable<AccountResponse> {
    var accountId = AppSettings.MasterAccountId;
    const apiUrl: string = AppSettings.API_GetAccounts.replace('{:accountId}', accountId.toString());
    return this.http.get<AccountResponse>(apiUrl)
      .pipe(
        tap(trackResponse => console.log('fetched accounts')),
        catchError(this.handleError<AccountResponse>('getAccounts'))
      );
  }

  getAccountTypes(): Observable<AccountTypeResponse> {
    var accountId = AppSettings.MasterAccountId;
    const apiUrl: string = AppSettings.API_GetAccountTypes.replace('{:accountId}', accountId.toString());

    return this.http.get<AccountTypeResponse>(apiUrl)
      .pipe(
        tap(trackResponse => console.log('fetched accounts')),
        catchError(this.handleError<AccountTypeResponse>('getAccounts'))
      );
  }

  getCountrys(): Observable<CountryModel[]> {
    var accountId = AppSettings.MasterAccountId;
    const apiUrl: string = AppSettings.API_GetCountrys.replace('{:accountId}', accountId.toString());

    return this.http.get<CountryModel[]>(apiUrl)
      .pipe(
        tap(trackResponse => console.log('fetched accounts')),
        catchError(this.handleError<CountryModel[]>('getAccounts'))
      );
  }

  getOrders(): Observable<OrderResponse> {

    var accountId = AppSettings.MasterAccountId;
    const apiUrl: string = AppSettings.API_GetOrders.replace('{:accountId}', accountId.toString())
    return this.http.get<OrderResponse>(apiUrl)
      .pipe(
        tap(trackResponse => console.log('fetched orders')),
        catchError(this.handleError<OrderResponse>('getOrders'))
      );
  }

  getProxies(): Observable<ProxyListModel> {
    var accountId = AppSettings.MasterAccountId;
    const apiUrl: string = AppSettings.API_GetProxies.replace('{:accountId}', accountId.toString())

    return this.http.get<ProxyListModel>(apiUrl)
      .pipe(
        tap(trackResponse => console.log('fetched proxies')),
        catchError(this.handleError<ProxyListModel>('getProxies'))
      );
  }

  saveProxies(proxyListModel: ProxyListModel): Observable<ProxyListModel> {
    var accountId = AppSettings.MasterAccountId;
    const apiUrl: string = AppSettings.API_AddProxies.replace('{:accountId}', accountId.toString())

    return this.http.post<ProxyListModel>(apiUrl, proxyListModel, httpOptions)
      .pipe(
        tap((playingState: ProxyListModel) => console.log(`Proxies uploaded`)
        ),
        catchError(this.handleError<ProxyListModel>('saveProxies'))
      );
  }

  saveAccounts(accountListModel: AccountListModel): Observable<AccountListModel> {
    var accountId = AppSettings.MasterAccountId;
    const apiUrl: string = AppSettings.API_AddAccounts.replace('{:accountId}', accountId.toString())

    return this.http.post<AccountListModel>(apiUrl, accountListModel, httpOptions)
      .pipe(
        tap((playingState: AccountListModel) => console.log(`Accounts uploaded`)
        ),
        catchError(this.handleError<AccountListModel>('saveAccounts'))
      );
  }

  deleteProxies(proxyId: number): Observable<ProxyListModel> {
    debugger;
    const accountId = AppSettings.MasterAccountId;

    const apiUrl: string = AppSettings.API_DeleteProxies.replace('{:accountId}', accountId.toString()) + '/' + proxyId;

    return this.http.delete<ProxyListModel>(apiUrl, httpOptions)
      .pipe(
        tap((playingState: ProxyListModel) => console.log(`Proxies deleted`)
        ),
        catchError(this.handleError<ProxyListModel>('proxies deleted'))
      );
  }

  // Delete Account
  deleteAccount(id: number): Observable<AccountResponse> {
    const apiUrl: string = AppSettings.API_DeleteAccount.replace('{:accountId}', id.toString());
    console.log(apiUrl);

    return this.http.delete<AccountResponse>(apiUrl,httpOptions)
      .pipe(
        tap((playingState: AccountResponse) => console.log(`Account deleted`)
        ),
        catchError(this.handleError<AccountResponse>('Account Delete Error'))
      );
  }

  editAccount(model: EditAccountModel): Observable<string> {
    const accountId = model.accountId; // AppSettings.MasterAccountId;
    const apiUrl: string = AppSettings.API_EditAccount.replace('{:accountId}', accountId.toString());

    return this.http.put<string>(apiUrl, model, httpOptions)
      .pipe(
        tap((playingStates: string) => console.log(`Edit Account`)
        ),
        catchError(this.handleError<string>('Edit Account'))
      );
  }
  editProxy(model: ProxyModel): Observable<string> {
    const proxyId =  model.id;// AppSettings.MasterAccountId;

    const apiUrl: string = AppSettings.API_EditProxy.replace('{:id}', proxyId.toString());

    return this.http.put<string>(apiUrl, model, httpOptions)
      .pipe(
        tap((playingStates: string) => console.log(`Edit Proxy`)
        ),
        catchError(this.handleError<string>('Edit Proxy'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // Let the app keep running by returning an empty result.
      //return of(result as T);

      //let the caller handle the error response
      return Observable.throw(error);
    };
  }

  public getAccountCounts(): Observable<AccountCountsResponse> {
    var accountId = AppSettings.MasterAccountId;
    const apiUrl: string = AppSettings.API_GetAccountCounts.replace('{:accountId}', accountId.toString());

    // let sendparam : string = "";
    // for(var i=0; i< param.length-1; i++){
    //   sendparam = sendparam + param[i] + ",";
    // }
    // sendparam = sendparam + param[param.length-1];
    // const params = new HttpParams().set('param', sendparam);
    // console.log(sendparam);
    return this.http.get<AccountCountsResponse>(apiUrl,)
      .pipe(
        tap(trackResponse => console.log('fetched accounts')),
        catchError(this.handleError<AccountCountsResponse>('getAccounts'))
      );
  }

  public getDashboardDatas(): Observable<DashboardResponse>{
    const apiUrl: string = AppSettings.API_GetDashboard;
    return this.http.get<DashboardResponse>(apiUrl)
      .pipe(
        tap(trackResponse => console.log('fetched accounts')),
        catchError(this.handleError<DashboardResponse>('getAccounts'))
      );
  }

  ChromeStart(addedAccounts:AccountListModel): Observable<string> {
    const apiUrl: string = AppSettings.API_StartChrome.replace('{:accountId}', "0")
    return this.http.post<string>(apiUrl, addedAccounts, httpOptions)
      .pipe(
        tap((playingState: string) => console.log(`Started playing`)
        ),
        catchError(this.handleError<string>('startPlaying'))
      );
  }

  getAccountInfo(accountId: number): Observable<AccountModel> {
    const apiUrl: string = AppSettings.API_GetAccountInfo.replace('{:accountId}', accountId.toString());
    return this.http.get<AccountModel>(apiUrl)
      .pipe(
        tap(trackResponse => console.log('fetched accounts')),
        catchError(this.handleError<AccountModel>('getAccounts'))
      );
  }
}
