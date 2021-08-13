export class AppSettings {

  public static MasterAccountId = 0;
  private static API_Base = 'http://localhost:5005';
  // private static API_Base = 'http://85.235.64.95:5005';
  private static API_Base_Accounts = AppSettings.API_Base + '/accounts';
  public static RefreshStatisticsIntervalinSeconds = 30000;

  public static API_GetState = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-state';
  public static API_StartChrome = AppSettings.API_Base_Accounts + "/{:accountId}" + '/start-chrome';
  public static API_StartPlaying = AppSettings.API_Base_Accounts + "/{:accountId}" + '/start-playing';
  public static API_StopPlaying = AppSettings.API_Base_Accounts + "/{:accountId}" + '/stop-playing';
  public static API_GetStatistics = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-statistics';
  public static API_GetPlaylists = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-playlist';
  public static API_AddTrack = AppSettings.API_Base_Accounts + "/{:accountId}" + '/add-track';
  public static API_RemoveTrack = AppSettings.API_Base_Accounts + "/{:accountId}" + '/remove-track';
  public static API_SyncPlaylist = AppSettings.API_Base_Accounts + "/{:accountId}" + '/sync-playlist';
  public static API_AddProxies = AppSettings.API_Base_Accounts + "/{:accountId}" + '/add-proxies';
  public static API_AddAccounts = AppSettings.API_Base_Accounts + "/{:accountId}" + '/add-accounts';
  public static API_GetAccounts = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-accounts';
  public static API_GetAccountInfo = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-account-info';
  public static API_GetAccountTypes = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-account-types';
  public static API_GetCountrys = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-countrys';
  public static API_GetOrders = AppSettings.API_Base + "/process/get-orders";
  public static API_PlaceOrder = AppSettings.API_Base + "/process/place-order";
  public static API_ProcessOrder = AppSettings.API_Base + "/process/process-order";
  public static API_GetProxies = AppSettings.API_Base_Accounts + '/{:accountId}' + '/get-proxies';
  public static API_OrderJobDetail = AppSettings.API_Base + '/process/order-job-detail/{:orderId}';
  public static API_OrderAccountTrackDetail = AppSettings.API_Base + '/process/order-account-tracks/{:orderId}';
  public static API_GetAllAccountTracks = AppSettings.API_Base + '/process/account-tracks' ;
  public static API_DeleteProxies = AppSettings.API_Base_Accounts + "/{:accountId}" + '/delete-proxies';
  public static API_DeleteAccount = AppSettings.API_Base_Accounts + "/{:accountId}" + '/delete-account';
  public static API_EditAccount = AppSettings.API_Base_Accounts + "/{:accountId}" + '/edit-accounts';
  public static API_EditProxy = AppSettings.API_Base_Accounts + '/{:id}' + '/edit-proxies';
  public static API_GetAccountCounts = AppSettings.API_Base_Accounts + '/{:accountId}' + '/get-account-counts';
  public static API_GetDashboard = AppSettings.API_Base + '/process/dashboard';
  public static API_GetCharts = AppSettings.API_Base + '/process/get-charts';
  public static API_EditTrack = AppSettings.API_Base_Accounts + '/{:accountId}' + '/edit-track';
}

export class AppURLs {
  public static home = '/';
  public static login = '/login';
  public static logout = '/logout';
  public static dashboard = '/dashboard';
  public static profile = AppURLs.dashboard + '/profile';
}

export class LocalStorageKeys {
  public static User = 'currentUser';
}

export class ValidationConstants {
  public static PhoneNotConfirmed = 'phone_unconfirmed';
}

export class SnackToastAction {
  public static Success = 'Success';
  public static Failure = 'Success';
}

export class Messages {
  public static Online = 'Now connected';
}

export class Constants {
  public static NoAvatar = 'assets/images/noavatar.png';
}

export enum SampleEnum {
  Default = 0
}
