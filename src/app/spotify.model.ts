export class Account {
    AccountId: number;
    Username: string;
    Country: string;
    Email: string;
    Password: string;
    CurrentProxyId: number;
    AccountType: string;
}

export class Proxies {
    id: number;
    ipAddress: string;
    port: number;
}


export class Product {
  _id: string;
  prod_name: string;
  prod_desc: string;
  prod_price: number;
  updated_at: Date;
}

export class TrackStatisticsResponse {
  statistics: TrackStatistics[];
}

export class TrackStatistics {
  playsCount: number;
  track: Track;
}

export class Track {
  id: string;
  title: string;
}

export class AccountPlayingResponse {
  isPlaying: boolean;
  orderId:number;
  states: AccountState[];
}

export class AccountState {
  accountId: number;
  email:string;
  isPlayying: boolean;
  playerStatus: string;
}

// playlist

export class AccountPlaylistModel {
  playlist: AccountPlayList;
}

export class AccountPlayList {
  tracks: Track[];
}

export class TrackTransactionResponse {
  status: string;
}

export class TransactionResponse {
  status: string;
}


export class OperationResponse {
  status: string;
}

//Account
export class AccountResponse {
  accounts: AccountModel[];
}

export class AccountListModel {
  accounts: AccountModel[];
}

export class AccountModel {
  accountId: number;
  email: string;
  password: string;
  currentProxyId: number;
  accountTypeId: number;
  country: string;
  currentProxy: ProxyModel;
  playerStatus: string;
  proxyCountry: string;

  constructor(email: string, password: string, currentProxyId: string, accountId: number , accountTypeId: string, country: string = "", playerStatus:string = "") {
    this.accountId= accountId;
    this.email = email;
    this.password = password;
    this.country = country;
    this.currentProxyId = Number(currentProxyId);
    this.accountTypeId = Number(accountTypeId);
    this.playerStatus = playerStatus;
  }
}

export class AccountTypeModel{
  id: number;
  type: string;
}

export class AccountTypeResponse{
  accountTypes: AccountTypeModel[];
}

export class CountryModel{
  id: number;
  countryName: string;
  countryCode: string;
}

export class ProxyListModel {
  proxies: ProxyModel[];
}

export class ProxyModel {
  id: number;
  ipAddress: string;
  port: number;
  userName:string;
  password:string;
  country: string;

  constructor(ipAddress: string, port: string,userName:string,password:string,country: string,id: number = 0) {
    this.id = id;
    this.ipAddress = ipAddress;
    this.port = Number(port);
    this.userName=userName;
    this.password=password;
    this.country = country;
  }
}

export class EditAccountModel{
  accountId: number;
  accountEmail: string;
  accountPwd: string;
  accountCountry: string;
  proxyId: number;
  accountTypeId: number;
  playerStatus: string;

  constructor(uId:number, pId:number, uEmail: string, uPwd: string, uAccountType: number, uCountry:string){
    this.accountId = uId;
    this.accountEmail = uEmail;
    this.accountPwd =uPwd;
    this.accountCountry = uCountry;
    this.proxyId = pId;
    this.accountTypeId = uAccountType;
    this.playerStatus = "Added";
  }
}

export class InputAccountsModel{
  email: string;
  country: string;
  password: string;
  accountTypeId: string;
  ipAddress: string;
  port: string;
  proxyCountry: string;
  proxyUserName: string;
  proxyPassword: string;
}

export class SelectModel {
  value: number;
  text: string;

  /**
   *
   */
  constructor(value: number, text: string) {

    this.value = value;
    this.text = text;
  }
}

// ORDER

export class OrderModel {
  id: number;
  title: string;
  description: string;
  trackIds: string;
  trackTitle: string;
  requiredPlayCount: number;
  priority: number;
  isActive: boolean;
  isProcessed: boolean;
  tracks: Track[];
  jobs: JobModel[];
  createdDate: string;
  accountCounts: number[];
}

export class JobModel {
  id: number;
  orderId: number;
  description: string;
  trackId: number;
  requiredPlayCount: number;
}

export class OrderResponse {
  orders: OrderModel[];
  newOrder: OrderModel;
  status: string;
}

export class OrderDetailResponse {
  order: OrderModel;
  status: string;
}

export class OrderJobDetailResponse {
  jobs: JobModel[];
  status: string;
}

export class AccountTrackResponse {
  accountTracks: AccountTrackModel[];
  status: string;
}

export class AccountTrackModel {
  accountTrackId: number;
  accountId: number;
  jobId: number;
  trackId: string;
  email: string;
  trackTitle: string;
  requiredPlayCount: number;
  playCount: number;
}


export enum TabIndex {
  Control = 0,
  Orders = 1,
  Statistics = 2,
  Playlists = 3,
  Accounts = 4,
  proxies = 5
}

export class AccountCountsModel{
  accountTypeId: number;
  accountType: string;
  accountCount: number;
}

export class AccountCountsResponse {
  accountCounts: AccountCountsModel[];

}

export class DashboardModel{
  orderId: number;
  orderTitle: string;
  orderDetail: string;
  accountId: number;
  username: string;
  country: string;
  accountType: string;
  songs: string;
  currentPlays: number;
  allPlays: number;
  jobId: number;
  proxyCountry: string;
  proxyIpAddress: string;
  createdDate: string;
  status: string;
  accountCounts: number;
}

export class DashboardResponse{
  dash: DashboardModel[];
}

export class TrackChangeModel{
  trackId: string;
  trackTitle: string;
  playCount: number;
}

export class ChartModel{
  rank: number;
  trackTitle: string;
  trackAuthor: string;
  country: string;
  stream: string;
  daily: string;
}
