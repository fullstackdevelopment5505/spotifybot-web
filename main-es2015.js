(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/accountpage/accountpage.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accountpage/accountpage.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container table-responsive table-editable\" style=\"margin-top: 100px;  width: 1800px;height: 100%;\">\n  <div style=\"border-radius: 30px;\">\n    <table class=\"table-bordered table-responsive-md table-striped text-center \">\n    <tr>\n      <th class=\"text-left headerTitle\" style=\"padding-left: 40px\" colspan=\"2\">Accounts</th>\n      <th class=\"text-right headerButton\" colspan=\"9\">\n        <a mat-list-item (click)=\"addAccountDlgShow()\">\n          <Button type=\"button\" class=\"btn btn-success\" style=\"width: 181px; height: 55px; border-radius: 7px; font: 24px 'TT Commons' !important; font-weight: 600 !important;\">Upload</Button>\n        </a>\n      </th>\n    </tr>\n    <tr style=\"font-size: 18px;\">\n      <!--<td class=\"text-center\">no</td>-->\n      <td class=\"text-left header-td\" style=\"padding-left: 30px\">AccountId</td>\n      <td class=\"text-left header-td\" style=\"padding-left: 40px\">Username</td>\n      <td class=\"text-left header-td\" style=\"padding-left: 40px\">Country</td>\n      <td class=\"text-left header-td\" style=\"padding-left: 30px\">AccountType</td>\n      <td class=\"text-left header-td\" style=\"padding-left: 25px\">ProxyId</td>\n      <td class=\"text-left header-td\" style=\"padding-left: 40px\">Country</td>\n      <td class=\"text-left header-td\" style=\"padding-left: 35px\">IPAddress</td>\n      <td class=\"text-left header-td\" style=\"padding-left: 30px\">Port</td>\n      <td class=\"text-left header-td\" style=\"padding-left: 35px\">Status</td>\n      <!--<td class=\"text-center\">Action</td>-->\n    </tr>\n    <tr *ngFor=\"let person of accounts; let id = index\"  style=\"font-size: 16px;\">\n\n      <td>\n        <input type=\"text\" id=\"uAccountId{{id}}\" size=\"10\" value=\"{{person.accountId}}\" class=\"text-center\" style=\"width: 139px; height: 48px\" readonly>\n      </td>\n      <td>\n        <input type=\"text\" id=\"uAccountEmail{{id}}\" size=\"30\" value=\"{{person.email}}\" class=\"text-left\" style=\"padding: 0px 15px; width: 216px; height: 48px\" (keyup)=\"changeValue(id, 'Username', $event)\" (blur)=\"updateList(id, 'Username', $event)\">\n      </td>\n      <td>\n        <span >\n          <img src=\"assets/img/country/{{person.country | lowercase}}_44x30.png\" style=\"width: 56px; height: 40px\">\n        </span>\n      </td>\n      <td>\n        <input type=\"text\" id=\"uAccountType{{id}}\" size=\"20\" value=\"{{person.accountType}}\" style=\"width: 139px; height: 48px\" class=\"text-center\" (keyup)=\"changeValue(id, 'AccountType', $event)\" (blur)=\"updateList(id, 'AccountType', $event)\">\n      </td>\n      <td>\n        <input type=\"text\" id=\"uCurrentProxyId{{id}}\" size=\"10\" value=\"{{person.currentProxyId}}\" style=\"width: 85px; height: 48px\" class=\"text-center\" readonly>\n      </td>\n      <td>\n        <span ><!--{{person.country}}-->\n          <img src=\"assets/img/country/{{person.proxyCountry | lowercase}}_44x30.png\" style=\"width: 56px; height: 40px\">\n        </span>\n      </td>\n      <td>\n        <input type=\"text\" id=\"uIpAddress{{id}}\" size=\"25\" value=\"{{person.currentProxy.ipAddress}}\" style=\"width: 150px; height: 48px\" class=\"text-center\" (keyup)=\"changeValue(id, 'IpAddress', $event)\" (blur)=\"updateList(id, 'IpAddress', $event)\">\n      </td>\n      <td>\n        <input type=\"text\" id=\"uPort{{id}}\" size=\"15\" value=\"{{person.currentProxy.port}}\" class=\"text-center\" style=\"width: 91px; height: 48px\" (keyup)=\"changeValue(id, 'Port', $event)\" (blur)=\"updateList(id, 'Port', $event)\">\n      </td>\n      <td align=\"center\">\n        <div class=\"tooltipMenu\">\n          <div class=\"selState\" *ngIf=\"person.playerStatus == 'LoggedIn';else elseBlock\">{{person.playerStatus}}&nbsp;</div>\n          <ng-template #elseBlock><div class=\"selState\" style=\"color: #FF0000;\">{{person.playerStatus}}&nbsp;</div></ng-template>\n          <button mat-icon-button class=\"stateSelector\" (click)=\"menuShow(id)\">\n            <img src=\"assets/img/combo_icon.png\">\n          </button>\n          <div id=\"myDropdown{{id}}\" class=\"text-left dropdown-content\">\n            <div class=\"menuButton\" (click)=\"StatusChange(1,id,person.accountId)\">\n              <img src=\"assets/img/play_sel.png\" style=\"padding:2px 5px;\" id='menuButtonIconId1'>\n              <span class=\"menuButtonText\" style=\"cursor: pointer;\">Edit</span>\n            </div>\n            <div class=\"menuButton\" (click)=\"StatusChange(2,id,person.accountId)\">\n              <img src=\"assets/img/pause_none.png\" style=\"padding: 2px 5px;\" id='menuButtonIconId2'>\n              <span class=\"menuButtonText\" style=\"cursor: pointer;\">Delete</span>\n            </div>\n          </div>\n        </div>\n      </td>\n\n      <!--crud sample-->\n      <!--<td>-->\n\n        <!--<button mat-icon-button color=\"accent\" (click)=\"selectAccount(person)\">-->\n          <!--<mat-icon class=\"mat-18\">reorder</mat-icon>-->\n        <!--</button>-->\n\n        <!--<button mat-icon-button (click)=\"redirectToUpdate(id)\">-->\n          <!--<img src=\"assets/img/edit.png\">-->\n        <!--</button>-->\n        <!--<button mat-icon-button (click)=\"redirectToDelete(person.AccountId)\">-->\n          <!--<img src=\"assets/img/delete.png\">-->\n        <!--</button>-->\n      <!--</td>-->\n    </tr>\n\n  </table>\n  </div>\n  <br>\n  <div class=\"card text-center\" *ngIf=\"selectedAccount\" style=\"background-color: rgb(44, 43, 43);color:bisque\">\n    <div class=\"card-header\">User Account Id : # {{selectedAccount.accountId}}\n    </div>\n    <div class=\"card-block\">\n      <h4 class=\"card-title\"> Email Address : {{selectedAccount.email}}</h4>\n        <p class=\"card-text\">\n            password : {{selectedAccount.password}} ; Proxy Id : {{ selectedAccount.currentProxyId }}\n        </p>    \n    </div>  \n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-order/add-order.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-order/add-order.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/img/close.png\" class=\"closeButton\" (click)=\"close()\">\n<mat-dialog-content>\n      <div class=\"userpart\">\n        <form [formGroup]=\"orderForm\" (ngSubmit) = 'save()'>\n          <div class=\"row\" style=\"magrin: 0px; height: 100px;\">\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Order Title</label>\n              </div>\n            </div>\n            <div class=\"col-9\" style=\"padding: 0px 5px;\">\n              <div class=\"form-group\">\n                <input matInput type=\"text\" formControlName=\"orderTitle\" class=\"form-control\" [ngClass] =\"{'is-invalid':submitted && orderForm.controls.orderTitle.errors}\" >\n                <div *ngIf=\"submitted && orderForm.controls.orderTitle.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"orderForm.controls.orderTitle.errors.required\">Order title is required</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"magrin: 0px; height: 100px;\">\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Track ID</label>\n              </div>\n            </div>\n            <div class=\"col-9\" style=\"padding: 0px 5px;\">\n              <div class=\"form-group\">\n                <input matInput type=\"text\" formControlName=\"trackId\" class=\"form-control\" [ngClass] =\"{'is-invalid':submitted && orderForm.controls.trackId.errors}\" >\n                <div *ngIf=\"submitted && orderForm.controls.trackId.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"orderForm.controls.trackId.errors.required\">Track ID is required</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"magrin: 0px; height: 100px;\">\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Track Title</label>\n              </div>\n            </div>\n            <div class=\"col-9\" style=\"padding: 0px 5px;\">\n              <div class=\"form-group\">\n                <input matInput type=\"text\" formControlName=\"trackTitle\" class=\"form-control\" [ngClass] =\"{'is-invalid':submitted && orderForm.controls.trackTitle.errors}\" >\n                <div *ngIf=\"submitted && orderForm.controls.trackTitle.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"orderForm.controls.trackTitle.errors.required\">Track title is required</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"magrin: 0px; height: 100px;\">\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Required Play Count</label>\n              </div>\n            </div>\n            <div class=\"col-9\" style=\"padding: 0px 5px;\">\n              <div class=\"form-group\">\n                <input matInput type=\"text\" formControlName=\"reqCount\" class=\"form-control\" [ngClass] =\"{'is-invalid':submitted && orderForm.controls.reqCount.errors}\" >\n                <div *ngIf=\"submitted && orderForm.controls.reqCount.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"orderForm.controls.reqCount.errors.required\">Required Play Count is required</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"magrin: 0px; height: 100px;\">\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Order Description</label>\n              </div>\n            </div>\n            <div class=\"col-9\" style=\"padding: 0px 5px;\">\n              <div class=\"form-group\">\n                <input matInput type=\"text\" formControlName=\"orderDpt\" class=\"form-control\" [ngClass] =\"{'is-invalid':submitted && orderForm.controls.orderDpt.errors}\" >\n                <div *ngIf=\"submitted && orderForm.controls.orderDpt.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"orderForm.controls.orderDpt.errors.required\">Order description is required</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-success\" style=\"margin-left: 5px; margin-top: 4px; width: 200px; height:48px;font-size: 21px;\" (click)=\"save()\">Submit</button><br><br>\n        </form>\n      </div>\n</mat-dialog-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addaccountpage/addaccountpage.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addaccountpage/addaccountpage.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/img/close.png\" class=\"closeButton\" (click)=\"close()\">\r\n<mat-dialog-content>\r\n  <mat-tab-group animationDuration=\"0ms\" mat-stretch-tabs style=\"padding: 5px 10px;\">\r\n    <mat-tab label=\"Bulk Upload\" style=\"font: 21px 'TT Commons' !important;font-weight: 600 !important;\">\r\n      <div class=\"form-group uploadpart \">\r\n        <span class=\"filename\" id=\"myfilename\"></span>\r\n        <div class=\"upload-btn-wrapper\">\r\n          <button class=\"btn upload-btn\" (click)=\"DataSubmit()\">Download Template</button>\r\n          <input type=\"file\" id=\"myfile\" name=\"myfile\" accept=\".xlsx,.xls,.csv\" ngf-max-size=\"20MB\" (change)=\"prepareSubmit($event)\" />\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Individual Upload\" style=\"padding: 5px 10px;font: 21px 'TT Commons' !important;font-weight: 600 !important;\" >\r\n      <div class=\"userpart\">\r\n      <form [formGroup]=\"angForm\" (ngSubmit) = 'save()'>\r\n        <div class=\"row\" style=\"magrin: 0px; height: 106px;\">\r\n          <div class=\"col-7\">\r\n            <div class=\"form-group\">\r\n              <label class=\"contTitle\">Username</label>\r\n              <input matInput type=\"text\" formControlName=\"username\" class=\"form-control left\" [ngClass] =\"{'is-invalid':submitted && angForm.controls.username.errors}\" >\r\n              <div *ngIf=\"submitted && angForm.controls.username.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"angForm.controls.username.errors.required\">Username is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-5\" style=\"padding: 0px 5px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"contTitle\" >Country</label><br>\r\n              <!--<input matInput type=\"text\" formControlName=\"country\" class=\"form-control right\" [ngClass] =\"{'is-invalid':submitted && angForm.controls.country.errors}\" >-->\r\n              <select  matInput name=\"usercountry\" id=\"usercountry\" class=\"form-control\" required>\r\n                  <option *ngFor=\"let country of countrys; let id = index\" [value]=\"country.countryCode\">{{country.countryName}}</option>\r\n              </select>\r\n              <!--<div *ngIf=\"submitted && angForm.controls.usercountry.errors\" class=\"invalid-feedback\">-->\r\n                <!--<div *ngIf=\"angForm.controls.usercountry.errors.required\">Country is required</div>-->\r\n              <!--</div>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"magrin: 0px; height: 106px;\">\r\n          <div class=\"col-7\">\r\n            <div class=\"form-group\">\r\n              <label class=\"contTitle\">Password</label>\r\n              <input matInput type='Password' formControlName=\"pass\" class=\"form-control left\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.pass.errors}\">\r\n              <div *ngIf=\"submitted && angForm.controls.pass.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"angForm.controls.pass.errors.required\">Password is required</div>\r\n                <div *ngIf=\"angForm.controls.pass.errors.minlength\">Password must be at least 8 characters</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-5\" style=\"padding: 0px 5px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"contTitle\">AccountType</label>\r\n              <!--<input matInput formControlName=\"accountType\" class=\"form-control right\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.accountType.errors}\">-->\r\n              <!--<div *ngIf=\"submitted && angForm.controls.accountType.errors\" class=\"invalid-feedback\">-->\r\n                <!--<div *ngIf=\"angForm.controls.accountType.errors.required\">Account type is required</div>-->\r\n              <!--</div>-->\r\n              <select  matInput name=\"userAccountType\" id=\"userAccountType\" class=\"form-control\" >\r\n                <option *ngFor=\"let accountType of accountTypes; let id = index\" [value]=\"accountType.id\">{{accountType.type}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"magrin: 0px; height: 106px;\">\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"contTitle\">Proxy IpAddress</label>\r\n              <input matInput formControlName=\"proxyIp\" class=\"form-control\" style=\"min-width:170px\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyIp.errors}\">\r\n              <div *ngIf=\"submitted && angForm.controls.proxyIp.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"angForm.controls.proxyIp.errors.required\">Proxy Ip Address is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"contTitle\">Proxy Port</label>\r\n              <input matInput formControlName=\"proxyPort\" class=\"form-control\" style=\"min-width:110px\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyPort.errors}\">\r\n              <div *ngIf=\"submitted && angForm.controls.proxyPort.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"angForm.controls.proxyPort.errors.required\">Proxy Port is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-5\" style=\"padding: 0px 5px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"contTitle\">Proxy Country</label>\r\n              <!--<input matInput formControlName=\"proxyCountry\" class=\"form-control right\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyCountry.errors}\">-->\r\n              <select  matInput name=\"proxyCountry\" id=\"proxyCountry\" class=\"form-control\" required>\r\n                <option *ngFor=\"let country of countrys; let id = index\" [value]=\"country.countryCode\">{{country.countryName}}</option>\r\n              </select>\r\n              <!--<div *ngIf=\"submitted && angForm.controls.proxyCountry.errors\" class=\"invalid-feedback\">-->\r\n                <!--<div *ngIf=\"angForm.controls.proxyCountry.errors.required\">Proxy Country is required</div>-->\r\n              <!--</div>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"magrin: 0px; height: 106px;\">\r\n          <div class=\"col-7\">\r\n            <div class=\"form-group\">\r\n              <label class=\"contTitle\">Proxy Username</label>\r\n              <input matInput formControlName=\"proxyUsername\" class=\"form-control left\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyUsername.errors}\">\r\n              <div *ngIf=\"submitted && angForm.controls.proxyUsername.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"angForm.controls.proxyUsername.errors.required\">Proxy User Name is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-5\" style=\"padding: 0px 5px;\">\r\n            <div class=\"form-group\">\r\n              <label class=\"contTitle\">Proxy User Password</label>\r\n              <input matInput type='Password' formControlName=\"proxyUserPwd\" class=\"form-control right\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyUserPwd.errors}\">\r\n              <div *ngIf=\"submitted && angForm.controls.proxyUserPwd.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"angForm.controls.proxyUserPwd.errors.required\">Proxy User Password is required</div>\r\n                <div *ngIf=\"angForm.controls.proxyUserPwd.errors.minlength\">Proxy User Password must be at least 8 characters</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--<button type=\"button\" class=\"btn btn-primary\" style=\"margin-left: 50px;\" (click)=\"close()\">Close</button>&nbsp;-->\r\n        <button type=\"button\" class=\"btn btn-success\" style=\"margin-left: 5px; margin-top: 10px; width: 200px; height:48px;font-size: 21px;\" (click)=\"save()\">Submit</button><br><br>\r\n      </form>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-dialog-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-container\">\n  <nav class=\"nav navbar-expand fixed-top\" style=\"background-color: #2A2929;height: 120px;vertical-align: middle;  \">\n      <a class=\"navbar-brand logo\" routerLink=\"/home\" routerLinkActive=\"active\"><img alt=\"Angular Logo\" src=\"assets/img/logo.png\" />\n      </a>\n      <ul class=\"navbar-nav\" style=\"margin: 0px;font: 21px Nunito; font-weight: bold;\">\n          <li class=\"nav-item navitem\">\n            <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Dashboard</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/order\" routerLinkActive=\"active\">Order</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/account\" routerLinkActive=\"active\">Account</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/chart\" routerLinkActive=\"active\">Charts</a>\n          </li>\n      </ul>\n  </nav>\n  <router-outlet></router-outlet>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chartpage/chartpage.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chartpage/chartpage.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container table-responsive table-editable\" style=\"margin-top: 100px;  width: 1800px;height: 100%;\">\r\n  <div style=\"border-radius: 30px;\">\r\n    <table class=\"table-bordered table-responsive-md table-striped text-center \">\r\n      <tr>\r\n        <th class=\"text-left headerTitle\" colspan=\"5\">Charts</th>\r\n      </tr>\r\n      <tr style=\"font-size: 18px;\">\r\n        <td class=\"text-left\" style=\"padding-left: 38px;font: 21px 'TT Commons' !important; font-weight: 600;\">Ranking</td>\r\n        <td class=\"text-left\" style=\"padding-left: 40px;font: 21px 'TT Commons' !important; font-weight: 600;\">Track</td>\r\n        <!--<td class=\"text-left\" style=\"padding-left: 35px;font: 21px 'TT Commons' !important; font-weight: 600;\">Country</td>-->\r\n        <td class=\"text-left\" style=\"padding-left: 25px;font: 21px 'TT Commons' !important; font-weight: 600;\">Daily|Weekly</td>\r\n        <td class=\"text-left\" style=\"padding-left: 30px;font: 21px 'TT Commons' !important; font-weight: 600;\">Stream</td>\r\n      </tr>\r\n      <tr *ngFor=\"let chart of chartDataList; let id = index\" class=\"datarow\" >\r\n        <td>\r\n          <input type=\"text\" size=\"7\" value=\"{{chart.rank}}\" style=\"width:51px; height: 48px;\" class=\"text-center\" readonly>\r\n        </td>\r\n        <td align=\"left\" style=\"padding-left: 40px;\">\r\n          <input type=\"text\" size=\"80\" value=\"{{chart.trackTitle}}\" class=\"text-left\" style=\"padding-left:15px; width:309px; height: 48px;\" (keyup)=\"changeValue(id, 'Username', $event)\" (blur)=\"updateList(id, 'Username', $event)\" readonly>\r\n        </td>\r\n        <!--<td width=\"120px\">-->\r\n          <!--<div class=\"tooltipshow\">-->\r\n            <!--<img src=\"assets/img/country/{{chart.Country}}_44x30.png\" style=\"width:56px; height: 40px;\">-->\r\n            <!--<div class=\"tooltiptext\">-->\r\n              <!--<span style=\"font-size: 10px;display: block;padding: 2px 0px;\"> {{chart.CountryName}} </span>-->\r\n              <!--<span style=\"font-size: 8px;display: block;padding: 2px 2px;\"> {{chart.IpAddress}} </span>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</td>-->\r\n        <td>\r\n          <input type=\"text\" size=\"12\" value=\"{{chart.daily}}\" style=\"width:174px; height: 48px;\" class=\"text-center daily\" (keyup)=\"changeValue(id, 'AccountType', $event)\" (blur)=\"updateList(id, 'AccountType', $event)\" readonly>\r\n\r\n        </td>\r\n        <td>\r\n          <input type=\"text\" size=\"20\" value=\"{{chart.stream}}\" style=\"width:194px; height: 48px;\" class=\"text-center\" readonly>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editaccountpage/editaccountpage.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editaccountpage/editaccountpage.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/img/close.png\" class=\"closeButton\" (click)=\"close()\">\n<mat-dialog-content>\n  <div class=\"userpart\">\n        <form [formGroup]=\"angForm\" (ngSubmit) = 'save()'>\n          <div class=\"row\" style=\"magrin: 0px; height: 106px;\">\n            <div class=\"col-7\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Username</label>\n                <input matInput type=\"text\" formControlName=\"username\" id=\"username\" class=\"form-control left\" [ngClass] =\"{'is-invalid':submitted && angForm.controls.username.errors}\" [value]=\"email\">\n                <div *ngIf=\"submitted && angForm.controls.username.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"angForm.controls.username.errors.required\">Username is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-5\" style=\"padding: 0px 5px;\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\" >Country</label><br>\n                <select  matInput name=\"usercountry\" id=\"usercountry\" class=\"form-control\" required>\n                  <option *ngFor=\"let country of countrys; let id = index\" [value]=\"country.countryCode\" [selected]=\"country.countryCode == acountry\">{{country.countryName}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"magrin: 0px; height: 106px;\">\n            <div class=\"col-7\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Password</label>\n                <input matInput type='Password' formControlName=\"pass\" id=\"pass\" class=\"form-control left\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.pass.errors}\" [value]=\"password\">\n                <div *ngIf=\"submitted && angForm.controls.pass.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"angForm.controls.pass.errors.required\">Password is required</div>\n                  <div *ngIf=\"angForm.controls.pass.errors.minlength\">Password must be at least 8 characters</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-5\" style=\"padding: 0px 5px;\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">AccountType</label>\n                <select  matInput name=\"userAccountType\" id=\"userAccountType\" class=\"form-control\" >\n                  <option *ngFor=\"let userType of accountTypes; let id = index\" [value]=\"userType.id\" [selected]=\"userType.id == accountType\">{{userType.type}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"magrin: 0px; height: 106px;\">\n            <div class=\"col-4\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Proxy IpAddress</label>\n                <input matInput formControlName=\"proxyIp\" id=\"proxyIp\" class=\"form-control\" style=\"min-width:170px\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyIp.errors}\" [value]=\"proxyIpAddress\">\n                <div *ngIf=\"submitted && angForm.controls.proxyIp.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"angForm.controls.proxyIp.errors.required\">Proxy Ip Address is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Proxy Port</label>\n                <input matInput formControlName=\"proxyPort\" id=\"proxyPort\" class=\"form-control\" style=\"min-width:110px\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyPort.errors}\" [value]=\"proxyPort\">\n                <div *ngIf=\"submitted && angForm.controls.proxyPort.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"angForm.controls.proxyPort.errors.required\">Proxy Port is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-5\" style=\"padding: 0px 5px;\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Proxy Country</label>\n                <!--<input matInput formControlName=\"proxyCountry\" class=\"form-control right\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyCountry.errors}\">-->\n                <select  matInput name=\"proxyCountry\" id=\"proxyCountry\" class=\"form-control\" required>\n                  <option *ngFor=\"let country of countrys; let id = index\" [value]=\"country.countryCode\" [selected]=\"country.countryCode == proxyCountry\">{{country.countryName}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"magrin: 0px; height: 106px;\">\n            <div class=\"col-7\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Proxy Username</label>\n                <input matInput formControlName=\"proxyUsername\" id=\"proxyUsername\" class=\"form-control left\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyUsername.errors}\" [value]=\"proxyUsername\">\n                <div *ngIf=\"submitted && angForm.controls.proxyUsername.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"angForm.controls.proxyUsername.errors.required\">Proxy User Name is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-5\" style=\"padding: 0px 5px;\">\n              <div class=\"form-group\">\n                <label class=\"contTitle\">Proxy User Password</label>\n                <input matInput type='Password' formControlName=\"proxyUserPwd\" id=\"proxyUserPwd\" class=\"form-control right\" [ngClass]=\"{'is-invalid':submitted && angForm.controls.proxyUserPwd.errors}\" [value]=\"proxyUserPwd\">\n                <div *ngIf=\"submitted && angForm.controls.proxyUserPwd.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"angForm.controls.proxyUserPwd.errors.required\">Proxy User Password is required</div>\n                  <div *ngIf=\"angForm.controls.proxyUserPwd.errors.minlength\">Proxy User Password must be at least 8 characters</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-success\" style=\"margin-left: 5px; margin-top: 10px; width: 200px; height:48px;font-size: 21px;\" (click)=\"save()\">Submit</button><br><br>\n        </form>\n      </div>\n</mat-dialog-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container table-responsive table-editable\" style=\"margin-top: 100px;  width: 1800px;height: 130%;\">\n  <div style=\"border-radius: 30px;\">\n    <table class=\"table-bordered table-responsive-md table-striped text-center \" style=\"border-radius: 10px;height: 100%;\">\n      <thead>\n        <tr class=\"text-left\" style=\"border-color: black;padding-left:15px;\">\n          <th class=\"text-left\" style=\"padding-left:20px;\">OrderId</th>\n          <th class=\"text-left\" style=\"padding-left:25px;width: 117px;\">AccountId</th>\n          <th class=\"text-left\" style=\"padding-left:20px;\">Username</th>\n          <th class=\"text-left\" style=\"padding-left:15px;;width: 90px;\">Country</th>\n          <th class=\"text-left\" style=\"padding-left:20px;\">AccountType</th>\n          <th class=\"text-left\" style=\"padding-left:20px;\">Songs</th>\n          <th class=\"text-left\" style=\"padding-left:20px;\">Plays</th>\n          <th class=\"text-left\" style=\"padding-left:13px;\">Job Id</th>\n          <th class=\"text-left\" style=\"padding-left:13px;\">Proxy</th>\n          <th class=\"text-left\" style=\"padding-left:20px;\">Created Date</th>\n          <th class=\"text-left\" style=\"padding-left:25px;\">Status</th>\n          <th class=\"text-left\"> </th>\n        </tr>\n      </thead>\n      <ng-container *ngFor=\"let homeData of dashboardData; index as id\">\n        <tr id=\"row{{id}}\">\n          <td id=\"td_{{id}}_1\" [attr.rowspan]=\"homeData.accountCounts+1\" *ngIf=\"homeData.accountCounts > 0 \" valign=\"top\" style=\"padding-top: 10px;\">\n            <div class=\"tooltipview\">\n              <input type=\"text\" size=\"5\" value=\"{{homeData.orderId}}\" class=\"text-center\" style=\"width: 65px; height:48px\" readonly>\n              <div class=\"text-left tooltiptext\">\n                <span class=\"orderId\">Order Name: {{homeData.orderTitle}}</span>\n                <span class=\"orderId\">Order details: {{homeData.orderDetail}}</span>\n                <span class=\"orderId\">Total play amount: {{homeData.allPlays}}</span>\n              </div>\n            </div>\n          </td>\n          <td>\n            <input *ngIf=\"homeData.accountCounts <= 0;else elseAccountId\" type=\"text\" size=\"5\" value=\"{{homeData.accountId}}\" class=\"text-center\" style=\"width: 67px; height:48px\" readonly>\n            <ng-template #elseAccountId><input type=\"text\" size=\"5\" value=\"-\" class=\"text-center\" style=\"width: 67px; height:48px\" readonly></ng-template>\n          </td>\n          <td>\n            <input *ngIf=\"homeData.accountCounts <= 0;else elseUsername\" type=\"text\" size=\"25\" value=\"{{homeData.username}}\" class=\"text-left\" style=\"width: 205px; height:48px;\" (keyup)=\"changeValue(id, 'Username', $event)\" (blur)=\"updateList(id, 'Username', $event)\" readonly>\n            <ng-template #elseUsername><input type=\"text\" size=\"25\" value=\"-\" class=\"text-left\" style=\"width: 205px; height:48px;\" (keyup)=\"changeValue(id, 'Username', $event)\" (blur)=\"updateList(id, 'Username', $event)\" readonly></ng-template>\n          </td>\n          <td>\n            <div class=\"tooltipshow\">\n              <img *ngIf=\"homeData.accountCounts <= 0;else elseCountry\" src=\"assets/img/country/{{homeData.country | lowercase }}_44x30.png\" style=\"width: 56px; height:40px\">\n              <ng-template #elseCountry><img src=\"assets/img/country/none.png\" style=\"width: 56px; height:40px\"></ng-template>\n              <div class=\"tooltiptext\" *ngIf=\"homeData.accountCounts <= 0\">\n                <span style=\"font-size: 10px;display: block;padding: 2px 0px;\"> {{homeData.country}} </span>\n                <span style=\"font-size: 8px;display: block;padding: 2px 2px;\"> {{homeData.proxyIpAddress}} </span>\n              </div>\n            </div>\n          </td>\n          <td>\n            <input *ngIf=\"homeData.accountCounts <= 0;else elseAccountType\" type=\"text\" size=\"15\" value=\"{{homeData.accountType}}\" class=\"text-center\" style=\"width: 139px; height:48px;\" (keyup)=\"changeValue(id, 'AccountType', $event)\" (blur)=\"updateList(id, 'AccountType', $event)\" readonly>\n            <ng-template #elseAccountType><input type=\"text\" size=\"15\" value=\"-\" class=\"text-center\" style=\"width: 139px; height:48px;\" (keyup)=\"changeValue(id, 'AccountType', $event)\" (blur)=\"updateList(id, 'AccountType', $event)\" readonly></ng-template>\n          </td>\n          <td>\n            <input type=\"text\" size=\"50\" value=\"{{homeData.songs}}\" class=\"text-left\" style=\"background-color: #1ED760; width: 256px; height:48px\" readonly>\n          </td>\n          <td>\n            <input type=\"text\" size=\"10\" id=\"plays_{{homeData.orderId}}_{{ homeData.accountId }}\" value=\"{{homeData.currentPlays}}/{{homeData.allPlays}}\" class=\"text-center\" style=\"background-color: #343434; width: 123px; height:48px\" (keyup)=\"changeValue(id, 'IpAddress', $event)\" (blur)=\"updateList(id, 'IpAddress', $event)\" readonly>\n          </td>\n          <td>\n            <input type=\"text\" size=\"5\" value=\"{{homeData.jobId}}\" class=\"text-center\" style=\"width: 65px; height:48px\" (keyup)=\"changeValue(id, 'Port', $event)\" (blur)=\"updateList(id, 'Port', $event)\" readonly>\n          </td>\n          <td>\n            <div class=\"tooltipshow\">\n              <img *ngIf=\"homeData.accountCounts <= 0;else elseProxyCountry\" src=\"assets/img/country/{{homeData.proxyCountry | lowercase }}_44x30.png\" style=\"width: 56px; height:40px\">\n              <ng-template #elseProxyCountry><img src=\"assets/img/country/none.png\" style=\"width: 56px; height:40px\"></ng-template>\n              <div class=\"tooltiptext\" *ngIf=\"homeData.accountCounts <= 0\">\n                <span style=\"font-size: 10px;display: block;padding: 2px 0px;\"> {{homeData.proxyCountry}} </span>\n                <span style=\"font-size: 8px;display: block;padding: 2px 2px;\"> {{homeData.proxyIpAddress}} </span>\n              </div>\n            </div>\n          </td>\n          <td>\n            <input type=\"text\" size=\"12\" value=\"{{homeData.createdDate}}\" class=\"text-center\" style=\"width: 123px; height:48px\" (keyup)=\"changeValue(id, 'IpAddress', $event)\" (blur)=\"updateList(id, 'IpAddress', $event)\" readonly>\n          </td>\n          <td style=\"padding: 0px 15px;\" align=\"center\">\n            <div class=\"dropdown\">\n              <div class=\"selState\" id=\"status_{{homeData.orderId}}_{{homeData.accountId}}\" *ngIf=\"homeData.status == 'LoggedIn';else elseStatus\">{{homeData.status}}</div>\n              <ng-template #elseStatus><div class=\"selState\" id=\"status_{{homeData.orderId}}_{{homeData.accountId}}\" style=\"color:#FF0000\">{{homeData.status}}</div></ng-template>\n              <button mat-icon-button class=\"stateSelector\" (click)=\"menuShow(id)\">\n                <img src=\"assets/img/combo_icon.png\" style=\"padding: 0px\">\n              </button>\n              <div id=\"myDropdown{{id}}\" class=\"text-left dropdown-content\">\n                <div class=\"menuButton\" (click)=\"StatusChange(1,id,homeData.orderId,homeData.accountId)\">\n                  <img src=\"assets/img/play_sel.png\" style=\"padding:2px 5px;\" id='menuButtonIconId1'>\n                  <span class=\"menuButtonText\" style=\"color: #1ec045\">Play</span>\n                </div>\n                <div class=\"menuButton\" (click)=\"StatusChange(2,id,homeData.orderId,homeData.accountId)\">\n                  <img src=\"assets/img/pause_none.png\" style=\"padding: 2px 5px;\" id='menuButtonIconId2'>\n                  <span class=\"menuButtonText\">Pause</span>\n                </div>\n                <div class=\"menuButton\" (click)=\"StatusChange(3,id,homeData.orderId,homeData.accountId)\">\n                  <img src=\"assets/img/del_none.png\" style=\"padding: 2px 5px;\" id='menuButtonIconId3'>\n                  <span class=\"menuButtonText\">Delete</span>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td id=\"td_{{id}}_2\" [attr.rowspan]=\"homeData.accountCounts + 1\" *ngIf=\"homeData.accountCounts > 0\" valign=\"top\" style=\"padding-top: 10px\">\n            <img id=\"collapseImgId{{id}}\" src=\"assets/img/up.png\" style=\"width:64px; height: 48px;\" (click)=\"toggleCollapse(id, homeData.accountCounts)\">\n          </td>\n        </tr>\n      </ng-container>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderpage/orderpage.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderpage/orderpage.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container table-responsive table-editable\" style=\"margin-top: 100px;  width: 1800px;height: 100%;\">\n  <div style=\"border-radius: 30px;\">\n    <table class=\"table-bordered table-responsive-md table-striped text-center \">\n      <thead>\n      <tr style=\"line-height: 80px; height: 90px;\">\n        <th class=\"text-left headerTitle\" colspan=\"5\">Order\n          <div class=\"headerButton2\" id=\"button1\" style=\"width: 174px;margin-left: 40px;\" (click)=\"stateChange(1)\">\n            <div class=\"headerButton-text\" >Family Owner</div>\n            <span class=\"mat-icon-button headerSpan\">{{familyOwnerCount}}</span>\n          </div>\n          <div class=\"headerButton2\" id=\"button2\" style=\"width: 174px\" (click)=\"stateChange(2)\">\n            <div class=\"headerButton-text\" >Family Member</div>\n            <span class=\"mat-icon-button headerSpan\">{{familyMemberCount}}</span>\n          </div>\n          <div class=\"headerButton2\" id=\"button3\" style=\"width: 174px\" (click)=\"stateChange(3)\">\n            <div class=\"headerButton-text\" >Premium</div>\n            <span class=\"mat-icon-button headerSpan\">{{premiumCount}}</span>\n          </div>\n          <div class=\"headerButton2\" id=\"button4\" style=\"width: 174px\" (click)=\"stateChange(4)\">\n            <div class=\"headerButton-text\" >Premium Duo</div>\n            <span class=\"mat-icon-button headerSpan\">{{premiumDuoCount}}</span>\n          </div>\n          <div class=\"headerButton2\" id=\"button5\" style=\"width: 121px\" (click)=\"stateChange(5)\">\n            <div class=\"headerButton-text\" style=\"width: 75px;\" >Free</div>\n            <span class=\"mat-icon-button headerSpan\">{{freeCount}}</span>\n          </div>\n          <button class=\"btn btn-success\" style=\"line-height: 40px; width:181px; height: 55px; margin-left: 70px;border: none;font: 18px 'TT Commons'; font-weight: bold;\" (click)=\"addNewOrderDlg()\">\n            Add New Track\n          </button>\n        </th>\n      </tr>\n      </thead>\n      <tr style=\"font-size: 18px\">\n        <td class=\"text-left header-td\" style=\"padding-left: 30px\">Track IDs</td>\n        <td class=\"text-left header-td\" style=\"padding-left: 30px\">Track Title</td>\n        <td class=\"text-left header-td\" style=\"padding-left: 20px\">Play</td>\n        <td class=\"text-left header-td\" style=\"padding-left: 20px\">Account</td>\n        <td class=\"text-left header-td\" style=\"width: 200px;padding-left: 70px\">Action</td>\n      </tr>\n      <tr *ngFor=\"let order of allOrders; let id = index\" style=\"font-size: 16px\">\n        <td class=\"datatd\">\n          <input type=\"text\" id=\"trackid_{{id}}\" size=\"40\" value=\"{{order.trackIds}}\" style=\"width: 309px; height: 48px;\" class=\"text-left\" (keyup)=\"changeValue(id, 'Username', $event)\" (blur)=\"updateList(id, 'Username', $event)\">\n        </td>\n        <td class=\"datatd\">\n          <input type=\"text\" id=\"tracktitle_{{id}}\" size=\"80\" value=\"{{order.trackTitle}}\" style=\"width: 309px; height: 48px;\" class=\"text-left\" (keyup)=\"changeValue(id, 'Username', $event)\" (blur)=\"updateList(id, 'Username', $event)\">\n        </td>\n        <td class=\"datatd\">\n          <input type=\"text\" id=\"playcount_{{id}}\" size=\"10\" value=\"{{order.requiredPlayCount}}\" style=\"width: 139px; height: 48px;\" class=\"text-center\" (keyup)=\"changeValue(id, 'AccountType', $event)\" (blur)=\"updateList(id, 'AccountType', $event)\">\n        </td>\n        <td class=\"datatd\">\n          <input type=\"text\" size=\"20\" value=\"{{useAccount[id]}}/{{allAccountCount}}\" class=\"text-center\" style=\"background-color: #343434;width: 174px; height: 48px;\" (keyup)=\"changeValue(id, 'AccountType', $event)\" (blur)=\"updateList(id, 'AccountType', $event)\" readonly>\n        </td>\n        <td class=\"datatd\">\n          <button mat-icon-button (click)=\"redirectToUpdate(order, id)\">\n            <img src=\"assets/img/edit.png\">\n          </button>\n          <button mat-icon-button (click)=\"redirectToDelete(order)\">\n            <img src=\"assets/img/delete.png\">\n          </button>\n        </td>\n      </tr>\n      <tr>\n        <td colspan='5' align=\"left\" style=\"padding-left:25px; line-height: 90px;\">\n          <button type=\"button\" class=\"btn btn-dark\" style=\"background-color: #000000;border: none; width: 170px; height: 53px; line-height: 30px; font:21px 'TT Commons' !important;\" (click)=\"ResetData()\">Reset</button>&nbsp;\n          <button type=\"button\" class=\"btn btn-success\" style=\" width: 170px; height: 53px; line-height: 30px;font:21px 'TT Commons' !important;\" (click)=\"SubmitData()\">Submit</button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/accountpage/accountpage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/accountpage/accountpage.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 95%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  min-width: 900px;\n  border-radius: 7px;\n  border: 0px #000000;\n  background-color: #171717;\n  vertical-align: center;\n}\n\ntr {\n  border: 0;\n  color: white;\n  height: 60px;\n}\n\ntr .headerTitle {\n  color: #ffffff;\n  border: 0;\n  font: 24px Nunito;\n  font-weight: bold;\n}\n\ntr .headerButton {\n  border: 0;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  padding-top: 15px;\n}\n\ntd {\n  border-color: #000000;\n  padding: 8px 10px;\n}\n\n.header-td {\n  font: 21px TT Commons !important;\n  font-weight: 600;\n  font-family: normal;\n}\n\ninput {\n  background-color: black;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n  height: 50px;\n  font: 16px \"TT Commons\" !important;\n  font-weight: 600;\n}\n\nselect {\n  background-color: #343434;\n  color: #ffffff;\n  border: 0px;\n  border-radius: 3px;\n  height: 40px;\n}\n\n.tooltipMenu {\n  background-color: #343434;\n  line-height: 44px;\n  border-radius: 5px;\n  min-width: 174px;\n  width: 174px;\n  height: 48px;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  max-width: 78px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  width: 78px;\n  height: 70px;\n  top: 50%;\n  left: 70%;\n}\n\n.selState {\n  color: #1ECC5C;\n  padding: 8px 5px;\n  height: 40px;\n  line-height: 24px;\n  font-size: 16px;\n  border-radius: 5px;\n  min-width: 110px !important;\n  max-width: 120px;\n  width: 120px;\n  display: inline-block;\n  text-align: left;\n  font: 16px \"TT Commons\" !important;\n  font-weight: 600 !important;\n}\n\n.stateSelector {\n  margin-left: 1px;\n  background: rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n}\n\n.menuButton {\n  padding: 3px 5px;\n  max-height: 32px;\n  line-height: 30px;\n}\n\n.menuButtonText {\n  color: #343434;\n  font-size: 12px;\n  padding-right: 0px;\n  margin-right: 0px;\n  max-width: 50px;\n}\n\n.show {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHBhZ2UvRDpcXHdvcmtcXFNwb3RpZnlXZWIvc3JjXFxhcHBcXGFjY291bnRwYWdlXFxhY2NvdW50cGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudHBhZ2UvYWNjb3VudHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURJQTtFQUFPLGNBQUE7QUNBUCIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRwYWdlL2FjY291bnRwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgbWluLXdpZHRoOiA5MDBweDtcclxuICBib3JkZXItcmFkaXVzOjdweDtcclxuICBib3JkZXI6IDBweCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudHJ7XHJcbiAgYm9yZGVyOjA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxudHIgLmhlYWRlclRpdGxle1xyXG4gIGNvbG9yOiAjZmZmZmZmIDtcclxuICBib3JkZXI6MDtcclxuICBmb250OiAyNHB4IE51bml0bztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudHIgLmhlYWRlckJ1dHRvbntcclxuICBib3JkZXI6MDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG50ZHtcclxuICBib3JkZXItY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItdGR7XHJcbiAgZm9udDogMjFweCBUVCBDb21tb25zICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogbm9ybWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjowO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udDogMTZweCBcIlRUIENvbW1vbnNcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbnNlbGVjdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwTWVudXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIG1pbi13aWR0aDogMTc0cHg7XHJcbiAgd2lkdGg6IDE3NHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgbWF4LXdpZHRoOiA3OHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDc4cHg7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNzAlO1xyXG59XHJcblxyXG4uc2VsU3RhdGUge1xyXG4gIGNvbG9yOiAjMUVDQzVDO1xyXG4gIHBhZGRpbmc6IDhweCA1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggO1xyXG4gIG1pbi13aWR0aDogMTEwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gIHdpZHRoOiAxMjBweCA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udDogMTZweCBcIlRUIENvbW1vbnNcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXRlU2VsZWN0b3Ige1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG4ubWVudUJ1dHRvbntcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIG1heC1oZWlnaHQ6IDMycHggO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubWVudUJ1dHRvblRleHR7XHJcbiAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggO1xyXG4gIG1heC13aWR0aDogNTBweDtcclxuXHJcbn1cclxuXHJcbi5zaG93IHtkaXNwbGF5OiBibG9jazt9XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDk1JTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtaW4td2lkdGg6IDkwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogMHB4ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbnRyIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbn1cblxudHIgLmhlYWRlclRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMDtcbiAgZm9udDogMjRweCBOdW5pdG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50ciAuaGVhZGVyQnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbnRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbn1cblxuLmhlYWRlci10ZCB7XG4gIGZvbnQ6IDIxcHggVFQgQ29tbW9ucyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogbm9ybWFsO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQ6IDE2cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnRvb2x0aXBNZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAxNzRweDtcbiAgd2lkdGg6IDE3NHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtYXgtd2lkdGg6IDc4cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDc4cHg7XG4gIGhlaWdodDogNzBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDcwJTtcbn1cblxuLnNlbFN0YXRlIHtcbiAgY29sb3I6ICMxRUNDNUM7XG4gIHBhZGRpbmc6IDhweCA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250OiAxNnB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLnN0YXRlU2VsZWN0b3Ige1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tZW51QnV0dG9uIHtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgbWF4LWhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5tZW51QnV0dG9uVGV4dCB7XG4gIGNvbG9yOiAjMzQzNDM0O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/accountpage/accountpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/accountpage/accountpage.component.ts ***!
  \******************************************************/
/*! exports provided: AccountpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountpageComponent", function() { return AccountpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spotify.service */ "./src/app/spotify.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _addaccountpage_addaccountpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addaccountpage/addaccountpage.component */ "./src/app/addaccountpage/addaccountpage.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/toast-service */ "./src/app/shared/services/toast-service.ts");
/* harmony import */ var _editaccountpage_editaccountpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editaccountpage/editaccountpage.component */ "./src/app/editaccountpage/editaccountpage.component.ts");









let AccountpageComponent = class AccountpageComponent {
    constructor(spotify, dialog, _toastr) {
        this.spotify = spotify;
        this.dialog = dialog;
        this._toastr = _toastr;
        this.isCurrentlyPlaying = false;
        this.isLoadingResults = false;
        this.selectedAccountId = 0;
    }
    ngOnInit() {
        this.setPlayingState();
        this.getAccounts();
    }
    paginatorSetting() {
        this.id = 0;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.accounts);
        this.dataSource.paginator = this.paginator;
    }
    selectAccount(account) {
        this.selectedAccount = account;
    }
    addAccountDlgShow() {
        const dialogRef = this.dialog.open(_addaccountpage_addaccountpage_component__WEBPACK_IMPORTED_MODULE_4__["AddaccountpageComponent"], { width: '635px', height: '650px' });
        dialogRef.disableClose = true;
        const sub = dialogRef.componentInstance.onAdd.subscribe((resultData) => {
            console.log(resultData);
            this.spotify.ChromeStart(resultData).subscribe((res) => {
                this._toastr.success('Chrome(s) browser has started', 'Success');
            }, (err) => {
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
    changeValue(id, property, event) {
        this.editString = event.target.value;
    }
    updateList(id, property, event) {
        this.editString = event.target.value;
        this.accounts[id][property] = this.editString;
    }
    menuShow(id) {
        document.getElementById("myDropdown" + id).classList.toggle("show");
    }
    StatusChange(spanNumber, id, accountId) {
        document.getElementById("myDropdown" + id).classList.toggle("show");
        if (spanNumber == 1) {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
            dialogConfig.data = { accountId: accountId };
            dialogConfig.width = '635px';
            dialogConfig.height = '580px';
            const dialogRef = this.dialog.open(_editaccountpage_editaccountpage_component__WEBPACK_IMPORTED_MODULE_8__["EditaccountpageComponent"], dialogConfig);
            dialogRef.disableClose = true;
            const sub = dialogRef.componentInstance.onEdit.subscribe((resultData) => {
                this.ngOnInit();
            });
            dialogRef.afterClosed().subscribe(result => {
                this.ngOnInit();
            });
        }
        else if (spanNumber == 2) {
            //this.PlayStop( orderId, accountId );
            this.spotify.deleteAccount(accountId).subscribe((res) => {
                this.isLoadingResults = false;
                this.accounts = res.accounts;
                this._toastr.success("Account Delete successfully", "Success");
            }, (err) => {
                console.log(err);
                this._toastr.error("An error has occurred", "Error");
                this.isLoadingResults = false;
            });
            ;
        }
    }
    /*
    addition function.
     */
    getAccounts() {
        this.isLoadingResults = true;
        this.spotify.getAccounts().subscribe((res) => {
            this.isLoadingResults = false;
            this.accounts = res.accounts;
            //console.log(this.accounts);
        }, (err) => {
            console.log(err);
            this._toastr.error("An error has occurred", "Error");
            this.isLoadingResults = false;
        });
    }
    setPlayingState() {
        // debugger;
        this.spotify.getPlayingState(this.selectedAccountId).subscribe((res) => {
            this.setStartAndStopButton(res);
        }, (err) => {
            console.log(err);
        });
    }
    setStartAndStopButton(accountPlayingResponse) {
        this.isCurrentlyPlaying = accountPlayingResponse.isPlaying;
        this.accountPlayingStates = accountPlayingResponse.states;
    }
};
AccountpageComponent.ctorParameters = () => [
    { type: _spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], AccountpageComponent.prototype, "paginator", void 0);
AccountpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accountpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accountpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/accountpage/accountpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accountpage.component.scss */ "./src/app/accountpage/accountpage.component.scss")).default]
    })
], AccountpageComponent);



/***/ }),

/***/ "./src/app/add-order/add-order.component.scss":
/*!****************************************************!*\
  !*** ./src/app/add-order/add-order.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  background-color: #000000;\n  color: #FFFFFF;\n}\n\nlabel.contTitle {\n  color: #1ECC5C;\n  padding: 5px 0px;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\ninput {\n  background-color: #000000;\n  color: #FFFFFF;\n  width: 400px;\n  height: 55px;\n  max-width: 400px;\n  padding: 0px 10px;\n  border: none;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\nfigure.mat-figure {\n  width: 380px !important;\n}\n\n.mat-dialog-content {\n  margin: 0px 0px !important;\n  height: 650px;\n  background-color: #1C1C1C;\n  min-height: 650px;\n  border-radius: 10px;\n}\n\ndiv.userpart {\n  border-radius: 5px;\n  width: 570px;\n  height: 493px;\n  background-color: #1C1C1C;\n  padding: 20px 10px 0px 10px;\n  margin: 30px 20px 0px 20px;\n  opacity: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW9yZGVyL0Q6XFx3b3JrXFxTcG90aWZ5V2ViL3NyY1xcYXBwXFxhZGQtb3JkZXJcXGFkZC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkLW9yZGVyL2FkZC1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZGQtb3JkZXIvYWRkLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmxhYmVsLmNvbnRUaXRsZXtcclxuICBjb2xvcjogIzFFQ0M1QztcclxuICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gIGZvbnQ6IDE4cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5maWd1cmUubWF0LWZpZ3VyZXtcclxuICB3aWR0aDogMzgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGVudHtcclxuICBtYXJnaW46IDBweCAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XHJcbiAgbWluLWhlaWdodDogNjUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuZGl2LnVzZXJwYXJ0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogNTcwcHg7XHJcbiAgaGVpZ2h0OiA0OTNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxQzFDMUM7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xyXG4gIG1hcmdpbjozMHB4IDIwcHggMHB4IDIwcHg7XHJcbiAgb3BhY2l0eTogODAlO1xyXG59XHJcbiIsImlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbmxhYmVsLmNvbnRUaXRsZSB7XG4gIGNvbG9yOiAjMUVDQzVDO1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQ6IDE4cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG5maWd1cmUubWF0LWZpZ3VyZSB7XG4gIHdpZHRoOiAzODBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWFyZ2luOiAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5kaXYudXNlcnBhcnQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA1NzBweDtcbiAgaGVpZ2h0OiA0OTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUMxQztcbiAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuICBtYXJnaW46IDMwcHggMjBweCAwcHggMjBweDtcbiAgb3BhY2l0eTogODAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/add-order/add-order.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-order/add-order.component.ts ***!
  \**************************************************/
/*! exports provided: AddOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function() { return AddOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spotify.service */ "./src/app/spotify.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast-service */ "./src/app/shared/services/toast-service.ts");
/* harmony import */ var _spotify_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spotify.model */ "./src/app/spotify.model.ts");






//import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

let AddOrderComponent = class AddOrderComponent {
    constructor(formBuilder, dialogRef, spotify, _toastr) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.spotify = spotify;
        this._toastr = _toastr;
        this.newOrder = new _spotify_model__WEBPACK_IMPORTED_MODULE_6__["OrderModel"]();
        this.isLoadingResults = false;
        this.submitted = false;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.orderForm = this.formBuilder.group({
            orderTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            trackTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            trackId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reqCount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            orderDpt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    close() {
        this.dialogRef.close();
    }
    save() {
        this.submitted = true;
        if (this.orderForm.invalid) {
            return;
        }
        this.clearResult();
        this.newOrder.title = this.orderForm.controls.orderTitle.value;
        this.newOrder.description = this.orderForm.controls.orderDpt.value;
        this.newOrder.requiredPlayCount = this.orderForm.controls.reqCount.value;
        this.newOrder.trackIds = this.orderForm.controls.trackId.value;
        this.newOrder.trackTitle = this.orderForm.controls.trackTitle.value;
        this.newOrder.isProcessed = true;
        this.isLoadingResults = true;
        this.spotify.placeOrder(this.newOrder)
            .subscribe((res) => {
            this.isLoadingResults = false;
            this.onAdd.emit();
            this._toastr.success("Order placed ", "Success");
            //this.processOrder(res.newOrder);
        }, (err) => {
            this.isLoadingResults = false;
            this._toastr.error("An error has occurred", "Error");
            console.log(err);
        });
    }
    clearResult() {
        this.orderJobs = [];
        this.orderAccountTracks = [];
    }
};
AddOrderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _spotify_service__WEBPACK_IMPORTED_MODULE_4__["SpotifyService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
AddOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-order/add-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-order.component.scss */ "./src/app/add-order/add-order.component.scss")).default]
    })
], AddOrderComponent);



/***/ }),

/***/ "./src/app/addaccountpage/addaccountpage.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/addaccountpage/addaccountpage.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  background-color: #000000;\n  color: #FFFFFF;\n  width: 50px;\n  height: 50px;\n  max-width: 50px;\n  padding: 0px 10px;\n  border: none;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\nlabel.contTitle {\n  color: #1ECC5C;\n  padding: 2px 0px;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\ninput.left {\n  width: 308px;\n  height: 50px;\n  max-width: 308px;\n  padding: 0px 10px;\n  border: none;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\ninput.right {\n  width: 230px;\n  height: 50px;\n  max-width: 230px;\n  padding: 0px 10px;\n  border: none;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\nfigure.mat-figure {\n  width: 380px !important;\n}\n\n.mat-dialog-content {\n  margin: 0px 0px !important;\n  height: 630px;\n  background-color: #1C1C1C;\n  min-height: 630px;\n  border-radius: 10px;\n}\n\ndiv.uploadpart {\n  border-radius: 5px;\n  width: 410px;\n  height: 380px;\n  background-color: #343434;\n  padding: 20px 10px;\n  margin: 90px 100px 50px 100px;\n  opacity: 80%;\n  background: url('download.png');\n  background-repeat: no-repeat;\n}\n\ndiv.userpart {\n  border-radius: 5px;\n  width: 570px;\n  height: 510px;\n  background-color: #1C1C1C;\n  margin: 20px 20px 0px 20px;\n  opacity: 80%;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  left: 30%;\n  top: 50%;\n  width: 185px;\n  height: 92px;\n}\n\n.upload-btn {\n  color: #FFFFFF;\n  background-color: #1ECC5C;\n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 50px;\n  margin-left: 0px;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 10px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-width: 120px;\n  max-height: 26px;\n  opacity: 0;\n  background-color: #FF0000;\n  cursor: pointer;\n}\n\n.filename {\n  font-size: 10px;\n  position: absolute;\n  left: 150px;\n  top: 170px;\n  width: 270px;\n  height: 55px;\n  opacity: 0;\n  background-color: #1C1C1C;\n  cursor: pointer;\n  text-align: left;\n  padding-left: 40px;\n  padding-top: 10px;\n  font-size: 20px;\n  color: #FFFFFF;\n}\n\nselect {\n  width: 230px;\n  height: 47px;\n  background-color: #000000;\n  color: #FFFFFF;\n  border-color: #000000;\n}\n\n.menuButton {\n  padding: 3px 5px;\n  max-height: 25px;\n  line-height: 21px;\n  cursor: pointer;\n}\n\n.menuButtonText {\n  color: #343434;\n  font-size: 12px;\n  padding-right: 0px;\n  margin-right: 0px;\n  max-width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYWNjb3VudHBhZ2UvRDpcXHdvcmtcXFNwb3RpZnlXZWIvc3JjXFxhcHBcXGFkZGFjY291bnRwYWdlXFxhZGRhY2NvdW50cGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkYWNjb3VudHBhZ2UvYWRkYWNjb3VudHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFFQSw0QkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEsMEJBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRkY7O0FET0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvYWRkYWNjb3VudHBhZ2UvYWRkYWNjb3VudHBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbC5jb250VGl0bGV7XHJcbiAgY29sb3I6ICMxRUNDNUM7XHJcbiAgcGFkZGluZzogMnB4IDBweDtcclxuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dC5sZWZ0e1xyXG4gIHdpZHRoOiAzMDhweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDhweDtcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udDogMThweCBcIlRUIENvbW1vbnNcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQucmlnaHR7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXgtd2lkdGg6IDIzMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5maWd1cmUubWF0LWZpZ3VyZXtcclxuICB3aWR0aDogMzgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGVudHtcclxuICBtYXJnaW46IDBweCAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDYzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XHJcbiAgbWluLWhlaWdodDogNjMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuZGl2LnVwbG9hZHBhcnQge1xyXG4gIC8vYm9yZGVyOiAycHggZG90dGVkIGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA0MTBweDtcclxuICBoZWlnaHQ6IDM4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIG1hcmdpbjogOTBweCAxMDBweCA1MHB4IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDgwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvZG93bmxvYWQucG5nJyk7XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmRpdi51c2VycGFydHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDU3MHB4O1xyXG4gIGhlaWdodDogNTEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMUMxQzFDO1xyXG4gIC8vcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgbWFyZ2luOjIwcHggMjBweCAwcHggMjBweDtcclxuICBvcGFjaXR5OiA4MCU7XHJcbn1cclxuXHJcbi51cGxvYWQtYnRuLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsZWZ0OiAzMCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDE4NXB4O1xyXG4gIGhlaWdodDogOTJweDtcclxuICAvL2JvcmRlcjogMXB4IGRhc2hlZCAjMDBGRjAwO1xyXG4gIC8vYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4udXBsb2FkLWJ0biB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFQ0M1QztcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIG1pbi13aWR0aDoxMjBweDtcclxuICBtYXgtaGVpZ2h0OiAyNnB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlbmFtZXtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE1MHB4O1xyXG4gIHRvcDogMTcwcHg7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGhlaWdodDo1NXB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUMxQztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBmb250LXNpemU6MjBweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuc2VsZWN0e1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXItY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5tZW51QnV0dG9ue1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgbWF4LWhlaWdodDogMjVweCA7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVudUJ1dHRvblRleHR7XHJcbiAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggO1xyXG4gIG1heC13aWR0aDogNTBweDtcclxuXHJcbn1cclxuIiwiaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxubGFiZWwuY29udFRpdGxlIHtcbiAgY29sb3I6ICMxRUNDNUM7XG4gIHBhZGRpbmc6IDJweCAwcHg7XG4gIGZvbnQ6IDE4cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dC5sZWZ0IHtcbiAgd2lkdGg6IDMwOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1heC13aWR0aDogMzA4cHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQ6IDE4cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dC5yaWdodCB7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXgtd2lkdGg6IDIzMHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuZmlndXJlLm1hdC1maWd1cmUge1xuICB3aWR0aDogMzgwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1hcmdpbjogMHB4IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMxQzFDO1xuICBtaW4taGVpZ2h0OiA2MzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZGl2LnVwbG9hZHBhcnQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA0MTBweDtcbiAgaGVpZ2h0OiAzODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBtYXJnaW46IDkwcHggMTAwcHggNTBweCAxMDBweDtcbiAgb3BhY2l0eTogODAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2Rvd25sb2FkLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuZGl2LnVzZXJwYXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTcwcHg7XG4gIGhlaWdodDogNTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XG4gIG1hcmdpbjogMjBweCAyMHB4IDBweCAyMHB4O1xuICBvcGFjaXR5OiA4MCU7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGVmdDogMzAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDE4NXB4O1xuICBoZWlnaHQ6IDkycHg7XG59XG5cbi51cGxvYWQtYnRuIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUNDNUM7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC1oZWlnaHQ6IDI2cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbGVuYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1MHB4O1xuICB0b3A6IDE3MHB4O1xuICB3aWR0aDogMjcwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUMxQztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG5zZWxlY3Qge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogNDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbn1cblxuLm1lbnVCdXR0b24ge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBtYXgtaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudUJ1dHRvblRleHQge1xuICBjb2xvcjogIzM0MzQzNDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXgtd2lkdGg6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/addaccountpage/addaccountpage.component.ts":
/*!************************************************************!*\
  !*** ./src/app/addaccountpage/addaccountpage.component.ts ***!
  \************************************************************/
/*! exports provided: AddaccountpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddaccountpageComponent", function() { return AddaccountpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _spotify_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spotify.model */ "./src/app/spotify.model.ts");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spotify.service */ "./src/app/spotify.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/toast-service */ "./src/app/shared/services/toast-service.ts");







let AddaccountpageComponent = class AddaccountpageComponent {
    constructor(formBuilder, dialogRef, spotify, _toastr) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.spotify = spotify;
        this._toastr = _toastr;
        this.isLoadingResults = false;
        this.newAccount = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["AccountListModel"]();
        this.submitted = false;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
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
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)])],
            //usercountry: ['', [ Validators.required ]],
            //accountType: ['', [ Validators.required ]],
            proxyIp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            proxyPort: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            //proxyCountry: ['', [Validators.required]],
            proxyUsername: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            proxyUserPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)])]
        });
    }
    close() {
        if (this.submitted)
            this.dialogRef.close("submitted");
        else
            this.dialogRef.close("not");
    }
    save() {
        if (this.angForm.invalid) {
            return;
        }
        let inAccountModels = new Array();
        let inAccountModel = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["InputAccountsModel"]();
        inAccountModel.ipAddress = this.angForm.controls.proxyIp.value;
        inAccountModel.port = this.angForm.controls.proxyPort.value;
        inAccountModel.email = this.angForm.controls.username.value;
        inAccountModel.password = this.angForm.controls.pass.value;
        inAccountModel.accountTypeId = document.getElementById("userAccountType").value;
        inAccountModel.country = document.getElementById("usercountry").value;
        inAccountModel.proxyCountry = document.getElementById("proxyCountry").value;
        inAccountModel.proxyUserName = this.angForm.controls.proxyUsername.value;
        inAccountModel.proxyPassword = this.angForm.controls.proxyUserPwd.value;
        inAccountModels.push(inAccountModel);
        console.log(inAccountModels);
        this.SaveAccountInfo(inAccountModels);
    }
    SaveAccountInfo(inAccountModels) {
        //Add Proxy
        const proxyData = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["ProxyListModel"]();
        proxyData.proxies = new Array();
        if (this.proxies.length <= 0) {
            this.proxyId = 1;
        }
        else {
            let last = this.proxies[this.proxies.length - 1];
            this.proxyId = last.id + 1;
        }
        const payload = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["AccountListModel"]();
        payload.accounts = new Array();
        if (this.accounts.length <= 0) {
            this.accountId = 1;
        }
        else {
            let last = this.accounts[this.accounts.length - 1];
            this.accountId = last.accountId + 1;
        }
        for (let i = 0; i < inAccountModels.length; i++) {
            proxyData.proxies.push(new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["ProxyModel"](inAccountModels[i].ipAddress, inAccountModels[i].port, inAccountModels[i].proxyUserName, inAccountModels[i].proxyPassword, inAccountModels[i].proxyCountry, this.proxyId));
            payload.accounts.push(new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["AccountModel"](inAccountModels[i].email, inAccountModels[i].password, this.proxyId.toString(), Number(this.accountId), inAccountModels[i].accountTypeId, inAccountModels[i].country));
            payload.accounts[i].playerStatus = "Added";
            this.accountId++;
            this.proxyId++;
        }
        // console.log(proxyData);
        // console.log(payload);
        this.spotify.saveProxies(proxyData).subscribe((res) => {
            this.isLoadingResults = false;
            this._toastr.success("New Proxy saved SuccessFully!", "success");
            this.getProxies();
            this.spotify.saveAccounts(payload).subscribe((res) => {
                this.isLoadingResults = false;
                this._toastr.success('New Account Added SuccessFully ', 'Success');
                this.onAdd.emit(payload);
                this.submitted = true;
                this.getAccounts();
            }, (err) => {
                this.isLoadingResults = false;
                this.submitted = false;
                console.log(err);
                this._toastr.error('An error has occurred in account', 'Error');
            });
        }, (err) => {
            this.isLoadingResults = false;
            console.log(err);
            this._toastr.error('An error has occurred in proxy', 'Error');
        });
    }
    getAccounts() {
        this.isLoadingResults = true;
        this.spotify.getAccounts().subscribe((res) => {
            this.isLoadingResults = false;
            // this._toastr.success("Accounts received", "Success");
            this.accounts = res.accounts;
        }, (err) => {
            console.log(err);
            // this._toastr.error("An error has occurred", "Error");
            this.isLoadingResults = false;
        });
    }
    getProxies() {
        this.isLoadingResults = true;
        this.spotify.getProxies().subscribe((res) => {
            this.isLoadingResults = false;
            // debugger;
            this.proxies = res.proxies;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    prepareSubmit(fileInput) {
        this.proxyFileDataModel = fileInput;
        console.log(fileInput);
        document.getElementById("myfilename").innerText = this.proxyFileDataModel.target.files[0].name;
        document.getElementById("myfilename").style.setProperty("opacity", '80');
    }
    DataSubmit() {
        let self = this;
        if (this.proxyFileDataModel == undefined || this.proxyFileDataModel == null) {
            self._toastr.warning("Please upload the file first!", "Warning");
            return;
        }
        let files = this.proxyFileDataModel.target.files;
        if (this.isValidCSVFile(files[0])) {
            let reader = new FileReader();
            reader.readAsText(files[0]);
            reader.onload = () => {
                let csvData = reader.result;
                let csvRecordsArray = csvData.split(/\r\n|\n/);
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
        document.getElementById("myfilename").innerText = "";
        document.getElementById("myfilename").style.setProperty("opacity", '0');
    }
    isValidCSVFile(file) {
        return file.name.endsWith(".csv");
    }
    getHeaderArray(csvRecordsArr) {
        let headers = csvRecordsArr[0].split(',');
        let headerArray = [];
        for (let j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    }
    getRecordsFromCSV(csvRecordsArray, headerLength) {
        let csvArr = new Array();
        // let existflag = false;
        for (let i = 1; i < csvRecordsArray.length; i++) {
            let curruntRecord = csvRecordsArray[i].split(',');
            if (curruntRecord.length == headerLength) {
                // for(var rec of csvArr){
                //   if(rec.email == curruntRecord[0].trim()){existflag == true;break;}
                // }
                // if(!existflag){
                let csvRecord = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["InputAccountsModel"]();
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
    getAccountTypes() {
        this.spotify.getAccountTypes().subscribe((res) => {
            this.accountTypes = res.accountTypes;
        }, (err) => {
            console.log(err);
        });
    }
    getCountrys() {
        this.spotify.getCountrys().subscribe((res) => {
            this.countrys = res;
        }, (err) => {
            console.log(err);
        });
    }
};
AddaccountpageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _spotify_service__WEBPACK_IMPORTED_MODULE_5__["SpotifyService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
AddaccountpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addaccountpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addaccountpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addaccountpage/addaccountpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addaccountpage.component.scss */ "./src/app/addaccountpage/addaccountpage.component.scss")).default]
    })
], AddaccountpageComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _accountpage_accountpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accountpage/accountpage.component */ "./src/app/accountpage/accountpage.component.ts");
/* harmony import */ var _orderpage_orderpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orderpage/orderpage.component */ "./src/app/orderpage/orderpage.component.ts");
/* harmony import */ var _chartpage_chartpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartpage/chartpage.component */ "./src/app/chartpage/chartpage.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");







const routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'account', component: _accountpage_accountpage_component__WEBPACK_IMPORTED_MODULE_3__["AccountpageComponent"] },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'chart', component: _chartpage_chartpage_component__WEBPACK_IMPORTED_MODULE_5__["ChartpageComponent"] },
    { path: 'order', component: _orderpage_orderpage_component__WEBPACK_IMPORTED_MODULE_4__["OrderpageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-container {\n  margin-top: 160px;\n  width: 100%;\n}\n\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\na.nav-link.active {\n  color: #1ECC5C !important;\n  border-bottom: 2px solid #1ECC5C;\n  padding: 45px 5px !important;\n}\n\na.nav-link {\n  color: #FFFFFF;\n  padding: 45px 5px !important;\n  margin: 0px 50px !important;\n}\n\nli.active {\n  border-bottom: 1px solid #FF0000;\n}\n\n.logo {\n  margin-left: 70px;\n  padding-top: 35px;\n  padding-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtcXFNwb3RpZnlXZWIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQ0FGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubXktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG5hLm5hdi1saW5rLmFjdGl2ZXtcclxuICBjb2xvcjogIzFFQ0M1QyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMUVDQzVDO1xyXG4gIHBhZGRpbmc6IDQ1cHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuYS5uYXYtbGlua3tcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBwYWRkaW5nOiA0NXB4IDVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxubGkuYWN0aXZle1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkYwMDAwO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICBwYWRkaW5nLXRvcDogMzVweCA7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuIiwiLm15LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE2MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYS5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzFFQ0M1QyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFFQ0M1QztcbiAgcGFkZGluZzogNDVweCA1cHggIWltcG9ydGFudDtcbn1cblxuYS5uYXYtbGluayB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiA0NXB4IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmxpLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkYwMDAwO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'SpotifyWeb';
        this.navbarOpen = false;
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _accountpage_accountpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accountpage/accountpage.component */ "./src/app/accountpage/accountpage.component.ts");
/* harmony import */ var _addaccountpage_addaccountpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addaccountpage/addaccountpage.component */ "./src/app/addaccountpage/addaccountpage.component.ts");
/* harmony import */ var _editaccountpage_editaccountpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editaccountpage/editaccountpage.component */ "./src/app/editaccountpage/editaccountpage.component.ts");
/* harmony import */ var _chartpage_chartpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chartpage/chartpage.component */ "./src/app/chartpage/chartpage.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _orderpage_orderpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orderpage/orderpage.component */ "./src/app/orderpage/orderpage.component.ts");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-order/add-order.component */ "./src/app/add-order/add-order.component.ts");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spotify.service */ "./src/app/spotify.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/toast-service */ "./src/app/shared/services/toast-service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _accountpage_accountpage_component__WEBPACK_IMPORTED_MODULE_5__["AccountpageComponent"],
            _chartpage_chartpage_component__WEBPACK_IMPORTED_MODULE_8__["ChartpageComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
            _orderpage_orderpage_component__WEBPACK_IMPORTED_MODULE_10__["OrderpageComponent"],
            _addaccountpage_addaccountpage_component__WEBPACK_IMPORTED_MODULE_6__["AddaccountpageComponent"],
            _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_11__["AddOrderComponent"],
            _editaccountpage_editaccountpage_component__WEBPACK_IMPORTED_MODULE_7__["EditaccountpageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            // MatTableDataSource,
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                positionClass: 'toast-top-right',
                closeButton: true,
            })
        ],
        providers: [_spotify_service__WEBPACK_IMPORTED_MODULE_12__["SpotifyService"], _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_addaccountpage_addaccountpage_component__WEBPACK_IMPORTED_MODULE_6__["AddaccountpageComponent"], _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_11__["AddOrderComponent"], _editaccountpage_editaccountpage_component__WEBPACK_IMPORTED_MODULE_7__["EditaccountpageComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chartpage/chartpage.component.scss":
/*!****************************************************!*\
  !*** ./src/app/chartpage/chartpage.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 65%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  min-width: 900px;\n  border-radius: 5px;\n  border: 0px #000000;\n  background-color: #171717;\n  vertical-align: center;\n}\n\ntr {\n  border: 0;\n  color: white;\n  height: 60px;\n}\n\ntr .headerTitle {\n  color: #ffffff;\n  border: 0;\n  font: 24px Nunito !important;\n  font-weight: bold !important;\n  padding-left: 30px;\n}\n\ntr .headerButton {\n  border: 0;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  padding-top: 15px;\n}\n\ntd {\n  border-color: #000000;\n}\n\ninput {\n  background-color: black;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n  height: 60px;\n  font: 16px \"TT Commons\" !important;\n}\n\ninput.daily {\n  background-color: #343434;\n}\n\ntr.datarow {\n  height: 82px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnRwYWdlL0Q6XFx3b3JrXFxTcG90aWZ5V2ViL3NyY1xcYXBwXFxjaGFydHBhZ2VcXGNoYXJ0cGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhcnRwYWdlL2NoYXJ0cGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jaGFydHBhZ2UvY2hhcnRwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgbWluLXdpZHRoOiA5MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAwcHggIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRye1xyXG4gIGJvcmRlcjowO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbnRyIC5oZWFkZXJUaXRsZXtcclxuICBjb2xvcjogI2ZmZmZmZiA7XHJcbiAgYm9yZGVyOjA7XHJcbiAgZm9udDogMjRweCBOdW5pdG8gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuXHJcbn1cclxuXHJcbnRyIC5oZWFkZXJCdXR0b257XHJcbiAgYm9yZGVyOjA7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxudGR7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjowO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZm9udDogMTZweCBcIlRUIENvbW1vbnNcIiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dC5kYWlseXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG5cclxufVxyXG5cclxudHIuZGF0YXJvd3tcclxuICBoZWlnaHQ6IDgycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDY1JTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtaW4td2lkdGg6IDkwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMHB4ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbnRyIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbn1cblxudHIgLmhlYWRlclRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMDtcbiAgZm9udDogMjRweCBOdW5pdG8gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG50ciAuaGVhZGVyQnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbnRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQ6IDE2cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcbn1cblxuaW5wdXQuZGFpbHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxuXG50ci5kYXRhcm93IHtcbiAgaGVpZ2h0OiA4MnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/chartpage/chartpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chartpage/chartpage.component.ts ***!
  \**************************************************/
/*! exports provided: ChartpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartpageComponent", function() { return ChartpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spotify.service */ "./src/app/spotify.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/toast-service */ "./src/app/shared/services/toast-service.ts");




let ChartpageComponent = class ChartpageComponent {
    constructor(spotify, _toastr) {
        this.spotify = spotify;
        this._toastr = _toastr;
    }
    ngOnInit() {
        this.getChartDataList();
    }
    getChartDataList() {
        this.spotify.getChartDataList().subscribe((res) => {
            this._toastr.success("success", "success");
            this.chartDataList = res;
        }, (err) => {
            this._toastr.error("error message", "error");
        });
    }
};
ChartpageComponent.ctorParameters = () => [
    { type: _spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
];
ChartpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chartpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chartpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chartpage/chartpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chartpage.component.scss */ "./src/app/chartpage/chartpage.component.scss")).default]
    })
], ChartpageComponent);



/***/ }),

/***/ "./src/app/editaccountpage/editaccountpage.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/editaccountpage/editaccountpage.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  background-color: #000000;\n  color: #FFFFFF;\n  width: 50px;\n  height: 50px;\n  max-width: 50px;\n  padding: 0px 10px;\n  border: none;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\nlabel.contTitle {\n  color: #1ECC5C;\n  padding: 2px 0px;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\ninput.left {\n  width: 308px;\n  height: 50px;\n  max-width: 308px;\n  padding: 0px 10px;\n  border: none;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\ninput.right {\n  width: 230px;\n  height: 50px;\n  max-width: 230px;\n  padding: 0px 10px;\n  border: none;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 500 !important;\n}\n\n.mat-dialog-content {\n  margin: 40px 0px 0px 0px !important;\n  height: 530px;\n  background-color: #1C1C1C;\n  min-height: 530px;\n  border-radius: 10px;\n}\n\ndiv.userpart {\n  border-radius: 5px;\n  width: 570px;\n  height: 510px;\n  background-color: #1C1C1C;\n  margin: 20px 20px 0px 30px;\n  opacity: 80%;\n}\n\nselect {\n  width: 230px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFFFFF;\n  border-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdGFjY291bnRwYWdlL0Q6XFx3b3JrXFxTcG90aWZ5V2ViL3NyY1xcYXBwXFxlZGl0YWNjb3VudHBhZ2VcXGVkaXRhY2NvdW50cGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWRpdGFjY291bnRwYWdlL2VkaXRhY2NvdW50cGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2VkaXRhY2NvdW50cGFnZS9lZGl0YWNjb3VudHBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbC5jb250VGl0bGV7XHJcbiAgY29sb3I6ICMxRUNDNUM7XHJcbiAgcGFkZGluZzogMnB4IDBweDtcclxuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dC5sZWZ0e1xyXG4gIHdpZHRoOiAzMDhweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDhweDtcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udDogMThweCBcIlRUIENvbW1vbnNcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQucmlnaHR7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXgtd2lkdGg6IDIzMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50e1xyXG4gIG1hcmdpbjogNDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUMxQztcclxuICBtaW4taGVpZ2h0OiA1MzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5kaXYudXNlcnBhcnR7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA1NzBweDtcclxuICBoZWlnaHQ6IDUxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzFDMUMxQztcclxuICBtYXJnaW46MjBweCAyMHB4IDBweCAzMHB4O1xyXG4gIG9wYWNpdHk6IDgwJTtcclxufVxyXG5cclxuc2VsZWN0e1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXItY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuIiwiaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxubGFiZWwuY29udFRpdGxlIHtcbiAgY29sb3I6ICMxRUNDNUM7XG4gIHBhZGRpbmc6IDJweCAwcHg7XG4gIGZvbnQ6IDE4cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dC5sZWZ0IHtcbiAgd2lkdGg6IDMwOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1heC13aWR0aDogMzA4cHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQ6IDE4cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dC5yaWdodCB7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXgtd2lkdGg6IDIzMHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1hcmdpbjogNDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMxQzFDO1xuICBtaW4taGVpZ2h0OiA1MzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZGl2LnVzZXJwYXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTcwcHg7XG4gIGhlaWdodDogNTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XG4gIG1hcmdpbjogMjBweCAyMHB4IDBweCAzMHB4O1xuICBvcGFjaXR5OiA4MCU7XG59XG5cbnNlbGVjdCB7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/editaccountpage/editaccountpage.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/editaccountpage/editaccountpage.component.ts ***!
  \**************************************************************/
/*! exports provided: EditaccountpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaccountpageComponent", function() { return EditaccountpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _spotify_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spotify.model */ "./src/app/spotify.model.ts");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spotify.service */ "./src/app/spotify.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/toast-service */ "./src/app/shared/services/toast-service.ts");







let EditaccountpageComponent = class EditaccountpageComponent {
    constructor(data, formBuilder, dialogRef, spotify, _toastr) {
        this.data = data;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.spotify = spotify;
        this._toastr = _toastr;
        this.isLoadingResults = false;
        this.submitted = false;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)])],
            proxyIp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            proxyPort: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            proxyUsername: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            proxyUserPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)])]
        });
    }
    getAccountInfo(accountId) {
        this.isLoadingResults = true;
        this.spotify.getAccountInfo(accountId).subscribe((res) => {
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
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getProxies() {
        this.isLoadingResults = true;
        this.spotify.getProxies().subscribe((res) => {
            this.isLoadingResults = false;
            this.proxies = res.proxies;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getAccountTypes() {
        this.spotify.getAccountTypes().subscribe((res) => {
            this.accountTypes = res.accountTypes;
        }, (err) => {
            console.log(err);
        });
    }
    getCountrys() {
        this.spotify.getCountrys().subscribe((res) => {
            this.countrys = res;
        }, (err) => {
            console.log(err);
        });
    }
    save() {
        if (this.angForm.invalid) {
            //return;
        }
        let inAccountModel = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["InputAccountsModel"]();
        inAccountModel.ipAddress = document.getElementById("proxyIp").value;
        inAccountModel.port = document.getElementById("proxyPort").value;
        inAccountModel.email = document.getElementById("username").value;
        inAccountModel.password = document.getElementById("pass").value;
        inAccountModel.accountTypeId = document.getElementById("userAccountType").value;
        inAccountModel.country = document.getElementById("usercountry").value;
        inAccountModel.proxyCountry = document.getElementById("proxyCountry").value;
        inAccountModel.proxyUserName = document.getElementById("proxyUsername").value;
        inAccountModel.proxyPassword = document.getElementById("proxyUserPwd").value;
        this.UpdateAccountInfo(inAccountModel);
    }
    UpdateAccountInfo(inAccountModel) {
        const proxyData = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["ProxyModel"](inAccountModel.ipAddress, inAccountModel.port, inAccountModel.proxyUserName, inAccountModel.proxyPassword, inAccountModel.proxyCountry, this.proxyId);
        const accountData = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["EditAccountModel"](this.accountId, this.proxyId, inAccountModel.email, inAccountModel.password, Number(inAccountModel.accountTypeId), inAccountModel.country);
        accountData.playerStatus = "Added";
        this.spotify.editProxy(proxyData).subscribe((res) => {
            this._toastr.success('Proxy updated successfully ', 'Success');
            this.spotify.editAccount(accountData).subscribe((res) => {
                this._toastr.success('Account updated successfully ', 'Success');
                this.onEdit.emit();
            }, (err) => {
                this.onEdit.emit();
                this._toastr.error('An error has occurred in account', 'Error');
            });
        }, (err) => {
            this._toastr.error('An error has occurred in proxy', 'Error');
        });
    }
};
EditaccountpageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _spotify_service__WEBPACK_IMPORTED_MODULE_5__["SpotifyService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
EditaccountpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editaccountpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editaccountpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editaccountpage/editaccountpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editaccountpage.component.scss */ "./src/app/editaccountpage/editaccountpage.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditaccountpageComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  min-width: 900px;\n  border-radius: 5px;\n  border: 0px #000000;\n  background-color: #171717;\n  vertical-align: center;\n}\n\ntr {\n  border: 0;\n  color: white;\n  height: 55px;\n}\n\ntd {\n  border-color: #000000;\n  padding: 10px;\n}\n\nth {\n  border-color: #000000;\n  height: 70px;\n  font: 18px \"TT Commons\" !important;\n  font-weight: 600 !important;\n}\n\ninput {\n  background-color: black;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n  padding: 2px 10px;\n  font: 16px \"TT Commons\" !important;\n  font-weight: 600;\n}\n\nspan.eventClick {\n  display: block;\n  padding: 0px 5px;\n  cursor: pointer;\n}\n\n.tooltipview {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltipview .tooltiptext {\n  visibility: hidden;\n  background-color: #FFFFFF;\n  color: #000;\n  text-align: center;\n  border-radius: 5px;\n  padding: 1px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: -110%;\n  left: 150%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n  width: 138px;\n  min-width: 138px;\n  min-height: 84px;\n}\n\n.tooltipview .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #FFFFFF transparent transparent transparent;\n}\n\n.tooltipview:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}\n\nspan.orderId {\n  font-size: 10px;\n  display: block;\n  padding: 2px 5px;\n}\n\n.tooltipMenu {\n  background-color: #343434;\n  line-height: 44px;\n  border-radius: 5px;\n  min-width: 174px;\n  width: 174px;\n  height: 48px;\n}\n\n.tooltipMenu .tooltipMenuText {\n  visibility: hidden;\n  background-color: #FFFFFF;\n  color: #000;\n  text-align: center;\n  border-radius: 5px;\n  padding: 1px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: -90%;\n  left: 100%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n  width: 138px;\n  min-width: 138px;\n  min-height: 84px;\n}\n\n.selState {\n  color: #1ECC5C;\n  padding: 8px 15px;\n  height: 40px;\n  line-height: 24px;\n  font-size: 16px;\n  border-radius: 5px;\n  min-width: 110px !important;\n  max-width: 120px;\n  width: 120px;\n  display: inline-block;\n  text-align: left;\n  font: 16px \"TT Commons\";\n  font-weight: bold;\n}\n\n.stateSelector {\n  margin-left: 5px;\n  background: rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n}\n\n.playMenu {\n  max-width: 75px;\n  width: 75px;\n  max-height: 78px;\n  height: 78px;\n}\n\n.menuButton {\n  padding: 3px 5px;\n  max-height: 25px;\n  line-height: 21px;\n  cursor: pointer;\n}\n\n.menuButtonText {\n  color: #343434;\n  font-size: 12px;\n  padding-right: 0px;\n  margin-right: 0px;\n  max-width: 50px;\n}\n\n.dropdown {\n  display: block;\n  background-color: #343434;\n  line-height: 44px;\n  border-radius: 5px;\n  min-width: 174px;\n  width: 174px;\n  height: 48px;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  max-width: 78px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  width: 78px;\n  height: 83px;\n  top: 50%;\n  left: 70%;\n}\n\n.show {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvRDpcXHdvcmtcXFNwb3RpZnlXZWIvc3JjXFxhcHBcXGhvbWVwYWdlXFxob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5REFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FESUE7RUFFRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNGRjs7QURLQTtFQUFPLGNBQUE7QUNEUCIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG1pbi13aWR0aDogOTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgYm9yZGVyOiAwcHggIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRye1xyXG4gIGJvcmRlcjowO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbnRke1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG50aHtcclxuICBib3JkZXItY29sb3I6ICMwMDAwMDA7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGZvbnQ6IDE4cHggJ1RUIENvbW1vbnMnICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjowO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBmb250OiAxNnB4ICdUVCBDb21tb25zJyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbnNwYW4uZXZlbnRDbGlja3tcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG9vbHRpcHZpZXcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XHJcbn1cclxuXHJcbi50b29sdGlwdmlldyAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXB4IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAtMTEwJTtcclxuICBsZWZ0OiAxNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuICB3aWR0aDogMTM4cHg7XHJcbiAgbWluLXdpZHRoOiAxMzhweDtcclxuICBtaW4taGVpZ2h0OiA4NHB4O1xyXG59XHJcblxyXG4udG9vbHRpcHZpZXcgLnRvb2x0aXB0ZXh0OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICNGRkZGRkYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50b29sdGlwdmlldzpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuc3Bhbi5vcmRlcklke1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBhZGRpbmc6IDJweCA1cHg7XHJcbn1cclxuXHJcbi50b29sdGlwTWVudXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIG1pbi13aWR0aDogMTc0cHg7XHJcbiAgd2lkdGg6IDE3NHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLnRvb2x0aXBNZW51IC50b29sdGlwTWVudVRleHR7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxcHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IC05MCU7XHJcbiAgbGVmdDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogLTYwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbiAgd2lkdGg6IDEzOHB4O1xyXG4gIG1pbi13aWR0aDogMTM4cHg7XHJcbiAgbWluLWhlaWdodDogODRweDtcclxufVxyXG5cclxuLnNlbFN0YXRlIHtcclxuICBjb2xvcjogIzFFQ0M1QztcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA7XHJcbiAgbWluLXdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTIwcHg7XHJcbiAgd2lkdGg6IDEyMHB4IDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250OiAxNnB4ICdUVCBDb21tb25zJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN0YXRlU2VsZWN0b3Ige1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5wbGF5TWVudXtcclxuICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgbWF4LWhlaWdodDogNzhweDtcclxuICBoZWlnaHQ6IDc4cHg7XHJcbn1cclxuXHJcbi5tZW51QnV0dG9ue1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgbWF4LWhlaWdodDogMjVweCA7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVudUJ1dHRvblRleHR7XHJcbiAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggO1xyXG4gIG1heC13aWR0aDogNTBweDtcclxuXHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XHJcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgbWluLXdpZHRoOiAxNzRweDtcclxuICB3aWR0aDogMTc0cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBtYXgtd2lkdGg6IDc4cHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogNzhweDtcclxuICBoZWlnaHQ6ODNweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA3MCU7XHJcbn1cclxuXHJcbi5zaG93IHtkaXNwbGF5OiBibG9jazt9XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbWluLXdpZHRoOiA5MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDBweCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xufVxuXG50ciB7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbnRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG50aCB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGZvbnQ6IDE2cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuc3Bhbi5ldmVudENsaWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvb2x0aXB2aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG59XG5cbi50b29sdGlwdmlldyAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAtMTEwJTtcbiAgbGVmdDogMTUwJTtcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIHdpZHRoOiAxMzhweDtcbiAgbWluLXdpZHRoOiAxMzhweDtcbiAgbWluLWhlaWdodDogODRweDtcbn1cblxuLnRvb2x0aXB2aWV3IC50b29sdGlwdGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNGRkZGRkYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi50b29sdGlwdmlldzpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG5zcGFuLm9yZGVySWQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4udG9vbHRpcE1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDE3NHB4O1xuICB3aWR0aDogMTc0cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRvb2x0aXBNZW51IC50b29sdGlwTWVudVRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAtOTAlO1xuICBsZWZ0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgd2lkdGg6IDEzOHB4O1xuICBtaW4td2lkdGg6IDEzOHB4O1xuICBtaW4taGVpZ2h0OiA4NHB4O1xufVxuXG4uc2VsU3RhdGUge1xuICBjb2xvcjogIzFFQ0M1QztcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250OiAxNnB4IFwiVFQgQ29tbW9uc1wiO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN0YXRlU2VsZWN0b3Ige1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wbGF5TWVudSB7XG4gIG1heC13aWR0aDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG4gIG1heC1oZWlnaHQ6IDc4cHg7XG4gIGhlaWdodDogNzhweDtcbn1cblxuLm1lbnVCdXR0b24ge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBtYXgtaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudUJ1dHRvblRleHQge1xuICBjb2xvcjogIzM0MzQzNDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG5cbi5kcm9wZG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDE3NHB4O1xuICB3aWR0aDogMTc0cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIG1heC13aWR0aDogNzhweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogNzhweDtcbiAgaGVpZ2h0OiA4M3B4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNzAlO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spotify.service */ "./src/app/spotify.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/toast-service */ "./src/app/shared/services/toast-service.ts");




let HomepageComponent = class HomepageComponent {
    constructor(spotify, _toastr) {
        this.spotify = spotify;
        this._toastr = _toastr;
        this.isLoadingResults = false;
        this.isEdit = false;
    }
    ngOnInit() {
        this.toggleFlag = true;
        this.stateList = this.spotify.getStateList();
        this.selectedState = this.stateList[0];
        this.oldId = "";
        this.getDashboardData();
    }
    changeValue(id, property, event) {
        this.editString = event.target.value;
    }
    updateList(id, property, event) {
        this.editString = event.target.value;
    }
    getDashboardData() {
        this.spotify.getDashboardDatas().subscribe((res) => {
            this.dashboardData = res.dash;
            console.log(this.dashboardData);
        }, (err) => {
            console.log(err);
        });
    }
    StatusChange(spanNumber, id, orderId, accountId) {
        document.getElementById("myDropdown" + id).classList.toggle("show");
        if (spanNumber == 1) {
            this.PlayStart(orderId, accountId);
            // document.getElementById("pngicon").style.setProperty("src","");
            // alert(document.getElementById("pngicon").style.getPropertyValue("src"));
        }
        else if (spanNumber == 2) {
            this.PlayStop(orderId, accountId);
        }
    }
    toggleCollapse(baseRowNum, rows) {
        if (this.toggleFlag) {
            this.toggleFlag = false;
            for (var i = 1; i <= rows; i++) {
                document.getElementById("row" + (baseRowNum + i)).style.setProperty("display", "none");
            }
            document.getElementById("td_" + baseRowNum + "_1").setAttribute("rowspan", "1");
            document.getElementById("td_" + baseRowNum + "_2").setAttribute("rowspan", "1");
            document.getElementById("collapseImgId" + baseRowNum).setAttribute("src", "assets/img/down.png");
        }
        else {
            this.toggleFlag = true;
            for (var i = 1; i <= rows; i++) {
                document.getElementById("row" + (baseRowNum + i)).style.removeProperty("display");
            }
            document.getElementById("td_" + baseRowNum + "_1").setAttribute("rowspan", (rows + 1).toString());
            document.getElementById("td_" + baseRowNum + "_2").setAttribute("rowspan", (rows + 1).toString());
            document.getElementById("collapseImgId" + baseRowNum).setAttribute("src", "assets/img/up.png");
        }
    }
    menuShow(id) {
        document.getElementById("myDropdown" + id).classList.toggle("show");
    }
    PlayStart(orderId, accountId) {
        this.isLoadingResults = true;
        this.spotify.startPlaying(orderId, accountId)
            .subscribe((res) => {
            this.isLoadingResults = false;
            //this.setStartAndStopButton(res)
            console.log(res);
            if (accountId === 0) {
                this._toastr.success('Going to start playing accounts that orderId is ' + orderId + '!', "Success");
            }
            var p = "";
            if (res.isPlaying) {
                document.getElementById("status_" + res.orderId + "_0").innerText = "Playing";
                p = document.getElementById("plays_" + res.orderId + "_0").value;
                document.getElementById("plays_" + res.orderId + "_0").value = this.GetNextPlays(p, res.states.length, 1);
            }
            else {
                document.getElementById("status_" + res.orderId + "_0").innerText = "Complete";
            }
            for (var i = 0; i < res.states.length; i++) {
                document.getElementById("status_" + res.orderId + "_" + res.states[i].accountId).innerText = res.states[i].playerStatus;
                p = document.getElementById("plays_" + res.orderId + "_" + res.states[i].accountId).value;
                document.getElementById("plays_" + res.orderId + "_" + res.states[i].accountId).value = this.GetNextPlays(p, res.states.length, 2);
            }
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
            this._toastr.error("An error has occurred", "Error");
        });
    }
    GetNextPlays(playsStr, rows, type) {
        var playNum = playsStr.split("/");
        var num = parseInt(playNum[0]);
        if (type == 1) {
            num = num + 1 * rows;
        }
        else {
            num++;
        }
        if (num > parseInt(playNum[1]))
            num = parseInt(playNum[1]);
        return num.toString() + "/" + playNum[1];
    }
    PlayStop(orderId, accountId) {
        this.isLoadingResults = true;
        this.spotify.stopPlaying(orderId, accountId)
            .subscribe((res) => {
            this.isLoadingResults = false;
            console.log(res);
            let p = "";
            if (!res.isPlaying) {
                document.getElementById("status_" + res.orderId + "_0").innerText = "Stopped";
            }
            for (var i = 0; i < res.states.length; i++) {
                document.getElementById("status_" + res.orderId + "_" + res.states[i].accountId).innerText = "Stopped";
            }
            console.log(res);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
HomepageComponent.ctorParameters = () => [
    { type: _spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/orderpage/orderpage.component.scss":
/*!****************************************************!*\
  !*** ./src/app/orderpage/orderpage.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 73%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  min-width: 900px;\n  border-radius: 1%;\n  border: 0px #000000;\n  background-color: #171717;\n  vertical-align: center;\n}\n\ntr {\n  border: 0;\n  color: white;\n  height: 60px;\n}\n\nth.headerTitle {\n  color: #ffffff;\n  border: 0;\n  font: 24px Nunito;\n  font-weight: bold;\n  padding-left: 20px;\n}\n\ntd.datatd {\n  padding: 10px 10px;\n}\n\ntd.header-td {\n  font: 18px \"TT Commons\";\n  font-weight: bold;\n}\n\ndiv.headerButton1 {\n  display: inline-block;\n  height: 50px;\n  font-size: 18px;\n  background-color: #28A745;\n  vertical-align: middle;\n  padding-top: 8px;\n  border-radius: 5px;\n  margin: 10px 7px;\n  cursor: pointer;\n}\n\ndiv.headerButton2 {\n  display: inline-block;\n  height: 50px;\n  font-size: 18px;\n  background-color: #000000;\n  vertical-align: middle;\n  border-radius: 5px;\n  margin: 10px 7px;\n  padding-top: 8px;\n  cursor: pointer;\n}\n\n.headerButton-text {\n  display: inline-block;\n  width: 130px;\n  text-align: center;\n  font: 16px \"TT Commons\";\n}\n\nspan.headerSpan {\n  background-color: #FFFFFF;\n  color: #000000;\n  width: 35px;\n  height: 35px;\n  font-size: 12px;\n  font-family: \"TT Commons\";\n  vertical-align: middle;\n  display: inline-block;\n  padding-bottom: 10px;\n  margin-bottom: 5px;\n}\n\ntd {\n  border-color: #000000;\n}\n\ninput {\n  background-color: black;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n  height: 50px;\n  padding: 2px 10px;\n  font: 18px \"TT Commons\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJwYWdlL0Q6XFx3b3JrXFxTcG90aWZ5V2ViL3NyY1xcYXBwXFxvcmRlcnBhZ2VcXG9yZGVycGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3JkZXJwYWdlL29yZGVycGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEYUE7RUFDRSxxQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL29yZGVycGFnZS9vcmRlcnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDczJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBtaW4td2lkdGg6IDkwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MSU7XHJcbiAgYm9yZGVyOiAwcHggIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRye1xyXG4gIGJvcmRlcjowO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbnRoLmhlYWRlclRpdGxle1xyXG4gIGNvbG9yOiAjZmZmZmZmIDtcclxuICBib3JkZXI6MDtcclxuICBmb250OiAyNHB4IE51bml0bztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWxlZnQ6MjBweDtcclxufVxyXG5cclxudGQuZGF0YXRke1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG5cclxudGQuaGVhZGVyLXRke1xyXG4gIGZvbnQ6IDE4cHggXCJUVCBDb21tb25zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmRpdi5oZWFkZXJCdXR0b24xe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOEE3NDU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDEwcHggN3B4O1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG5kaXYuaGVhZGVyQnV0dG9uMntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMTBweCA3cHg7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLmhlYWRlckJ1dHRvbi10ZXh0e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQ6IDE2cHggXCJUVCBDb21tb25zXCI7XHJcbn1cclxuXHJcbnNwYW4uaGVhZGVyU3BhbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogXCJUVCBDb21tb25zXCI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxufVxyXG5cclxuLy9zcGFuLmhlYWRlckJ1dHRvbjJ7XHJcbi8vICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcclxuLy8gIGNvbG9yOiNGRkZGRkY7XHJcbi8vICB3aWR0aDogMzVweDtcclxuLy8gIGhlaWdodDogMzVweDtcclxuLy8gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4vLyAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4vL31cclxuXHJcbnRke1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6MDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gIGZvbnQ6IDE4cHggXCJUVCBDb21tb25zXCIgIWltcG9ydGFudDtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiA3MyU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbWluLXdpZHRoOiA5MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMSU7XG4gIGJvcmRlcjogMHB4ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbnRyIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbn1cblxudGguaGVhZGVyVGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwO1xuICBmb250OiAyNHB4IE51bml0bztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxudGQuZGF0YXRkIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuXG50ZC5oZWFkZXItdGQge1xuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2LmhlYWRlckJ1dHRvbjEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhBNzQ1O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmhlYWRlckJ1dHRvbjIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCA3cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlckJ1dHRvbi10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udDogMTZweCBcIlRUIENvbW1vbnNcIjtcbn1cblxuc3Bhbi5oZWFkZXJTcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiVFQgQ29tbW9uc1wiO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbnRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBmb250OiAxOHB4IFwiVFQgQ29tbW9uc1wiICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/orderpage/orderpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/orderpage/orderpage.component.ts ***!
  \**************************************************/
/*! exports provided: OrderpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderpageComponent", function() { return OrderpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spotify.service */ "./src/app/spotify.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/toast-service */ "./src/app/shared/services/toast-service.ts");
/* harmony import */ var _spotify_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spotify.model */ "./src/app/spotify.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-order/add-order.component */ "./src/app/add-order/add-order.component.ts");







let OrderpageComponent = class OrderpageComponent {
    constructor(spotify, dialog, _toastr) {
        this.spotify = spotify;
        this.dialog = dialog;
        this._toastr = _toastr;
        this.isLoadingResults = false;
        this.selectedAccountId = 0;
        this.premiumCount = 0;
        this.premiumDuoCount = 0;
        this.familyMemberCount = 0;
        this.familyOwnerCount = 0;
        this.freeCount = 0;
        this.allAccountCount = 0;
        this.newAccount = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["AccountListModel"]();
    }
    ngOnInit() {
        this.flag = 0;
        this.stateSel = [0, 0, 0, 0, 0];
        this.getAccountCounts();
        this.getOrders();
    }
    changeValue(id, property, event) {
        this.editString = event.target.value;
    }
    updateList(id, property, event) {
        this.editString = event.target.value;
    }
    redirectToUpdate(orderItem, index) {
        var newTrackData = new _spotify_model__WEBPACK_IMPORTED_MODULE_4__["TrackChangeModel"]();
        newTrackData.trackId = document.getElementById("trackid_" + index).value;
        newTrackData.trackTitle = document.getElementById("tracktitle_" + index).value;
        newTrackData.playCount = parseInt(document.getElementById("playcount_" + index).value);
        this.spotify.EditTrack(this.selectedAccountId, orderItem.id, newTrackData).subscribe((res) => {
            this._toastr.success("Track updated ", "Success");
            this.ngOnInit();
        }, (err) => {
            console.log(err);
            this._toastr.error("An error has occurred", "Error");
        });
    }
    redirectToDelete(orderItem) {
        this.spotify.removeTrack(this.selectedAccountId, orderItem.id).subscribe((res) => {
            this._toastr.success("Track removed ", "Success");
            this.ngOnInit();
        }, (err) => {
            console.log(err);
            this._toastr.error("An error has occurred", "Error");
        });
    }
    headerButtonClick(id) {
    }
    ResetData() {
        this.ngOnInit();
    }
    SubmitData() {
        this.processOrder();
    }
    addNewOrderDlg() {
        const dialogRef = this.dialog.open(_add_order_add_order_component__WEBPACK_IMPORTED_MODULE_6__["AddOrderComponent"], { width: '632px', height: '650px' });
        dialogRef.disableClose = true;
        const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
            this.ngOnInit();
        });
        dialogRef.afterClosed().subscribe(result => {
            //this.ngOnInit();
        });
    }
    getOrders() {
        this.allOrders = new Array();
        this.isLoadingResults = false;
        this.spotify.getOrders().subscribe((res) => {
            this.isLoadingResults = false;
            this.allOrders = res.orders;
            this.getUseAccount();
            // this._toastr.success("Orders received!", "Success");
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
            this._toastr.error('An error has occurred', "Error");
        });
    }
    getUseAccount() {
        this.useAccount = [];
        for (var i = 0; i < this.allOrders.length; i++) {
            this.useAccount[i] = 0;
            if (this.flag == 0) {
                for (var j = 0; j < this.allOrders[i].accountCounts.length; j++) {
                    this.useAccount[i] = this.useAccount[i] + this.allOrders[i].accountCounts[j];
                }
            }
            else {
                for (var j = 0; j < this.allOrders[i].accountCounts.length; j++) {
                    if (this.stateSel[j] == 1) {
                        this.useAccount[i] = this.useAccount[i] + this.allOrders[i].accountCounts[j];
                    }
                }
            }
        }
    }
    getAccountCounts() {
        this.spotify.getAccountCounts().subscribe((res) => {
            console.log(res);
            this.accountCounts = res.accountCounts;
            this.allAccountCount = 0;
            this.familyOwnerCount = 0;
            this.familyMemberCount = 0;
            this.premiumCount = 0;
            this.premiumDuoCount = 0;
            this.freeCount = 0;
            for (var index in this.accountCounts) {
                if (this.accountCounts[index].accountType == 'Family Owner') {
                    this.familyOwnerCount = this.familyOwnerCount + this.accountCounts[index].accountCount;
                    this.allAccountCount = this.allAccountCount + this.familyOwnerCount;
                }
                else if (this.accountCounts[index].accountType == 'Family Member') {
                    this.familyMemberCount = this.familyMemberCount + this.accountCounts[index].accountCount;
                    this.allAccountCount = this.allAccountCount + this.familyMemberCount;
                }
                else if (this.accountCounts[index].accountType == 'Premium') {
                    this.premiumCount = this.premiumCount + this.accountCounts[index].accountCount;
                    this.allAccountCount = this.allAccountCount + this.premiumCount;
                }
                else if (this.accountCounts[index].accountType == 'PremiumDuo') {
                    this.premiumDuoCount = this.premiumDuoCount + this.accountCounts[index].accountCount;
                    this.allAccountCount = this.allAccountCount + this.premiumDuoCount;
                }
                else if (this.accountCounts[index].accountType == 'Free') {
                    this.freeCount = this.freeCount + this.accountCounts[index].accountCount;
                    this.allAccountCount = this.allAccountCount + this.freeCount;
                }
                else {
                    if (this.accountCounts[index].accountType.indexOf("Premium") >= 0) {
                        this.premiumCount = this.premiumCount + this.accountCounts[index].accountCount;
                        this.allAccountCount = this.allAccountCount + this.accountCounts[index].accountCount;
                    }
                }
            }
            // this.useAccountCount = this.familyOwnerCount + this.freeCount;
            // this._toastr.success("get Account Counts by types!", "Success");
        }, (err) => {
            console.log(err);
        });
    }
    /**
     * Processes the order
     */
    processOrder() {
        this.clearResult();
        this.isLoadingResults = true;
        this.spotify.processOrder()
            .subscribe((res) => {
            this.isLoadingResults = false;
            this._toastr.success("Order processed ", "Success");
            this.allOrders = res.orders;
            this.getUseAccount();
        }, (err) => {
            this.isLoadingResults = false;
            this._toastr.error("An error has occurred", "Error");
            console.log(err);
        });
    }
    clearResult() {
        this.orderJobs = [];
        this.orderAccountTracks = [];
    }
    getOrderDetails(orderId) {
        this.orderJobDetail(orderId);
        this.accountTracksByOrder(orderId);
    }
    /**
     * get jobs of the order
     */
    orderJobDetail(orderId) {
        this.isLoadingResults = true;
        this.spotify.orderJobDetail(orderId)
            .subscribe((res) => {
            this.isLoadingResults = false;
            this.orderJobs = res.jobs;
            this._toastr.success("Order job detail received ", "Success");
        }, (err) => {
            this.isLoadingResults = false;
            this._toastr.error("An error has occurred", "Error");
            console.log(err);
        });
    }
    handleOrderTransaction(orderItem) {
        this.allOrders.push(orderItem);
    }
    /**
     * get account tracks by order
     */
    accountTracksByOrder(orderId) {
        this.isLoadingResults = true;
        this.spotify.accountTracksByOrder(orderId)
            .subscribe((res) => {
            this.isLoadingResults = false;
            this.orderAccountTracks = res.accountTracks;
            this._toastr.success("Order account tracks received ", "Success");
        }, (err) => {
            this.isLoadingResults = false;
            this._toastr.error("An error has occurred", "Error");
            console.log(err);
        });
    }
    stateChange(divId) {
        //debugger
        if (this.stateSel[divId - 1] == 0) {
            this.stateSel[divId - 1] = 1;
            document.getElementById('button' + divId).style.setProperty('background-color', '#28A745');
        }
        else {
            this.stateSel[divId - 1] = 0;
            document.getElementById('button' + divId).style.setProperty('background-color', '#000000');
        }
        this.flag = 0;
        for (var i = 0; i < this.stateSel.length; i++) {
            this.flag = this.flag + this.stateSel[i];
            // if(this.stateSel[i] == 1){
            //   this.flag = this.flag
            // }
        }
        if (this.flag > 0 && this.flag < 5) {
            this.flag = 1;
        }
        else {
            this.flag = 0;
        }
        this.getUseAccount();
    }
};
OrderpageComponent.ctorParameters = () => [
    { type: _spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
];
OrderpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orderpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderpage/orderpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orderpage.component.scss */ "./src/app/orderpage/orderpage.component.scss")).default]
    })
], OrderpageComponent);



/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: AppSettings, AppURLs, LocalStorageKeys, ValidationConstants, SnackToastAction, Messages, Constants, SampleEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppURLs", function() { return AppURLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function() { return LocalStorageKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationConstants", function() { return ValidationConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackToastAction", function() { return SnackToastAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleEnum", function() { return SampleEnum; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppSettings {
}
AppSettings.MasterAccountId = 0;
AppSettings.API_Base = 'http://localhost:5005';
// private static API_Base = 'http://85.235.64.95:5005';
AppSettings.API_Base_Accounts = AppSettings.API_Base + '/accounts';
AppSettings.RefreshStatisticsIntervalinSeconds = 30000;
AppSettings.API_GetState = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-state';
AppSettings.API_StartChrome = AppSettings.API_Base_Accounts + "/{:accountId}" + '/start-chrome';
AppSettings.API_StartPlaying = AppSettings.API_Base_Accounts + "/{:accountId}" + '/start-playing';
AppSettings.API_StopPlaying = AppSettings.API_Base_Accounts + "/{:accountId}" + '/stop-playing';
AppSettings.API_GetStatistics = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-statistics';
AppSettings.API_GetPlaylists = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-playlist';
AppSettings.API_AddTrack = AppSettings.API_Base_Accounts + "/{:accountId}" + '/add-track';
AppSettings.API_RemoveTrack = AppSettings.API_Base_Accounts + "/{:accountId}" + '/remove-track';
AppSettings.API_SyncPlaylist = AppSettings.API_Base_Accounts + "/{:accountId}" + '/sync-playlist';
AppSettings.API_AddProxies = AppSettings.API_Base_Accounts + "/{:accountId}" + '/add-proxies';
AppSettings.API_AddAccounts = AppSettings.API_Base_Accounts + "/{:accountId}" + '/add-accounts';
AppSettings.API_GetAccounts = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-accounts';
AppSettings.API_GetAccountInfo = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-account-info';
AppSettings.API_GetAccountTypes = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-account-types';
AppSettings.API_GetCountrys = AppSettings.API_Base_Accounts + "/{:accountId}" + '/get-countrys';
AppSettings.API_GetOrders = AppSettings.API_Base + "/process/get-orders";
AppSettings.API_PlaceOrder = AppSettings.API_Base + "/process/place-order";
AppSettings.API_ProcessOrder = AppSettings.API_Base + "/process/process-order";
AppSettings.API_GetProxies = AppSettings.API_Base_Accounts + '/{:accountId}' + '/get-proxies';
AppSettings.API_OrderJobDetail = AppSettings.API_Base + '/process/order-job-detail/{:orderId}';
AppSettings.API_OrderAccountTrackDetail = AppSettings.API_Base + '/process/order-account-tracks/{:orderId}';
AppSettings.API_GetAllAccountTracks = AppSettings.API_Base + '/process/account-tracks';
AppSettings.API_DeleteProxies = AppSettings.API_Base_Accounts + "/{:accountId}" + '/delete-proxies';
AppSettings.API_DeleteAccount = AppSettings.API_Base_Accounts + "/{:accountId}" + '/delete-account';
AppSettings.API_EditAccount = AppSettings.API_Base_Accounts + "/{:accountId}" + '/edit-accounts';
AppSettings.API_EditProxy = AppSettings.API_Base_Accounts + '/{:id}' + '/edit-proxies';
AppSettings.API_GetAccountCounts = AppSettings.API_Base_Accounts + '/{:accountId}' + '/get-account-counts';
AppSettings.API_GetDashboard = AppSettings.API_Base + '/process/dashboard';
AppSettings.API_GetCharts = AppSettings.API_Base + '/process/get-charts';
AppSettings.API_EditTrack = AppSettings.API_Base_Accounts + '/{:accountId}' + '/edit-track';
class AppURLs {
}
AppURLs.home = '/';
AppURLs.login = '/login';
AppURLs.logout = '/logout';
AppURLs.dashboard = '/dashboard';
AppURLs.profile = AppURLs.dashboard + '/profile';
class LocalStorageKeys {
}
LocalStorageKeys.User = 'currentUser';
class ValidationConstants {
}
ValidationConstants.PhoneNotConfirmed = 'phone_unconfirmed';
class SnackToastAction {
}
SnackToastAction.Success = 'Success';
SnackToastAction.Failure = 'Success';
class Messages {
}
Messages.Online = 'Now connected';
class Constants {
}
Constants.NoAvatar = 'assets/images/noavatar.png';
var SampleEnum;
(function (SampleEnum) {
    SampleEnum[SampleEnum["Default"] = 0] = "Default";
})(SampleEnum || (SampleEnum = {}));


/***/ }),

/***/ "./src/app/shared/services/toast-service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast-service.ts ***!
  \**************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let ToastService = class ToastService {
    constructor(toastr) {
        this.toastr = toastr;
        this.duration = 2000;
    }
    success(message, title) {
        this.toastr.success(message, title);
    }
    warning(message, title) {
        this.toastr.warning(message, title);
    }
    error(message, title) {
        this.toastr.error(message, title);
    }
    errorObj(message, title) {
        this.error(JSON.stringify(message), title);
    }
};
ToastService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "./src/app/spotify.model.ts":
/*!**********************************!*\
  !*** ./src/app/spotify.model.ts ***!
  \**********************************/
/*! exports provided: Account, Proxies, Product, TrackStatisticsResponse, TrackStatistics, Track, AccountPlayingResponse, AccountState, AccountPlaylistModel, AccountPlayList, TrackTransactionResponse, TransactionResponse, OperationResponse, AccountResponse, AccountListModel, AccountModel, AccountTypeModel, AccountTypeResponse, CountryModel, ProxyListModel, ProxyModel, EditAccountModel, InputAccountsModel, SelectModel, OrderModel, JobModel, OrderResponse, OrderDetailResponse, OrderJobDetailResponse, AccountTrackResponse, AccountTrackModel, TabIndex, AccountCountsModel, AccountCountsResponse, DashboardModel, DashboardResponse, TrackChangeModel, ChartModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proxies", function() { return Proxies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackStatisticsResponse", function() { return TrackStatisticsResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackStatistics", function() { return TrackStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPlayingResponse", function() { return AccountPlayingResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountState", function() { return AccountState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPlaylistModel", function() { return AccountPlaylistModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPlayList", function() { return AccountPlayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackTransactionResponse", function() { return TrackTransactionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionResponse", function() { return TransactionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationResponse", function() { return OperationResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountResponse", function() { return AccountResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListModel", function() { return AccountListModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModel", function() { return AccountModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTypeModel", function() { return AccountTypeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTypeResponse", function() { return AccountTypeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryModel", function() { return CountryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyListModel", function() { return ProxyListModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyModel", function() { return ProxyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountModel", function() { return EditAccountModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAccountsModel", function() { return InputAccountsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModel", function() { return SelectModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return OrderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobModel", function() { return JobModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderResponse", function() { return OrderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailResponse", function() { return OrderDetailResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderJobDetailResponse", function() { return OrderJobDetailResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTrackResponse", function() { return AccountTrackResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTrackModel", function() { return AccountTrackModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabIndex", function() { return TabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCountsModel", function() { return AccountCountsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCountsResponse", function() { return AccountCountsResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModel", function() { return DashboardModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardResponse", function() { return DashboardResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackChangeModel", function() { return TrackChangeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModel", function() { return ChartModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Account {
}
class Proxies {
}
class Product {
}
class TrackStatisticsResponse {
}
class TrackStatistics {
}
class Track {
}
class AccountPlayingResponse {
}
class AccountState {
}
// playlist
class AccountPlaylistModel {
}
class AccountPlayList {
}
class TrackTransactionResponse {
}
class TransactionResponse {
}
class OperationResponse {
}
//Account
class AccountResponse {
}
class AccountListModel {
}
class AccountModel {
    constructor(email, password, currentProxyId, accountId, accountTypeId, country = "", playerStatus = "") {
        this.accountId = accountId;
        this.email = email;
        this.password = password;
        this.country = country;
        this.currentProxyId = Number(currentProxyId);
        this.accountTypeId = Number(accountTypeId);
        this.playerStatus = playerStatus;
    }
}
class AccountTypeModel {
}
class AccountTypeResponse {
}
class CountryModel {
}
class ProxyListModel {
}
class ProxyModel {
    constructor(ipAddress, port, userName, password, country, id = 0) {
        this.id = id;
        this.ipAddress = ipAddress;
        this.port = Number(port);
        this.userName = userName;
        this.password = password;
        this.country = country;
    }
}
class EditAccountModel {
    constructor(uId, pId, uEmail, uPwd, uAccountType, uCountry) {
        this.accountId = uId;
        this.accountEmail = uEmail;
        this.accountPwd = uPwd;
        this.accountCountry = uCountry;
        this.proxyId = pId;
        this.accountTypeId = uAccountType;
        this.playerStatus = "Added";
    }
}
class InputAccountsModel {
}
class SelectModel {
    /**
     *
     */
    constructor(value, text) {
        this.value = value;
        this.text = text;
    }
}
// ORDER
class OrderModel {
}
class JobModel {
}
class OrderResponse {
}
class OrderDetailResponse {
}
class OrderJobDetailResponse {
}
class AccountTrackResponse {
}
class AccountTrackModel {
}
var TabIndex;
(function (TabIndex) {
    TabIndex[TabIndex["Control"] = 0] = "Control";
    TabIndex[TabIndex["Orders"] = 1] = "Orders";
    TabIndex[TabIndex["Statistics"] = 2] = "Statistics";
    TabIndex[TabIndex["Playlists"] = 3] = "Playlists";
    TabIndex[TabIndex["Accounts"] = 4] = "Accounts";
    TabIndex[TabIndex["proxies"] = 5] = "proxies";
})(TabIndex || (TabIndex = {}));
class AccountCountsModel {
}
class AccountCountsResponse {
}
class DashboardModel {
}
class DashboardResponse {
}
class TrackChangeModel {
}
class ChartModel {
}


/***/ }),

/***/ "./src/app/spotify.service.ts":
/*!************************************!*\
  !*** ./src/app/spotify.service.ts ***!
  \************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let SpotifyService = class SpotifyService {
    constructor(http) {
        this.http = http;
        this.getAuth = () => {
            // let params: URLSearchParams = new URLSearchParams();
            // params.set('grant_type', 'client_credentials');
            // let body = params.toString();
            return this.http.post('https://accounts.spotify.com/authorize', {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => { console.log(`Started playing`); console.log(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('startPlaying')));
        };
        console.log(this.getAuth());
    }
    getStateList() {
        this.stateDataList = ['Playing', 'Proxy', 'Track ID', 'Ready', 'Credentials'];
        return this.stateDataList;
    }
    getChartDataList() {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetCharts;
        return this.http.post(apiUrl, '', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((charts) => console.log(`chart info downloaded`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('chart info')));
    }
    /*
    api service
     */
    getPlayingState(accountId) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetState.replace('{:accountId}', accountId.toString());
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(product => console.log('fetched account playing status')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('startPlaying')));
    }
    RefreshPlaylist(accountId) {
        debugger;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_StartPlaying.replace('{:accountId}', accountId.toString());
        return this.http.post(apiUrl, {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`Started playing`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('startPlaying')));
    }
    startPlaying(orderId, accountId) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_StartPlaying.replace('{:accountId}', accountId.toString()) + "/" + orderId;
        return this.http.post(apiUrl, {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`Started playing`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('startPlaying')));
    }
    stopPlaying(orderId, accountId) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_StopPlaying.replace('{:accountId}', accountId.toString()) + "/" + orderId;
        return this.http.post(apiUrl, {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`Stopped playing`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('stopPlaying')));
    }
    getStatistics(accountId) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetStatistics.replace('{:accountId}', accountId.toString());
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched statistics')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getStatistics')));
    }
    getPlayLists(accountId) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetPlaylists.replace('{:accountId}', accountId.toString());
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched account playlists')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getPlayLists')));
    }
    addTrack(accountId, track) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_AddTrack.replace('{:accountId}', accountId.toString());
        return this.http.post(apiUrl, track, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`track added`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addTrack')));
    }
    placeOrder(order) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_PlaceOrder;
        return this.http.post(apiUrl, order, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`order added`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('placeOrder')));
    }
    processOrder() {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_ProcessOrder; //.replace('{:orderId}', orderId.toString())
        return this.http.post(apiUrl, '', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`order orocessed`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('processOrder')));
    }
    orderJobDetail(orderId) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_OrderJobDetail.replace('{:orderId}', orderId.toString());
        return this.http.get(apiUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`order job detail retrieved`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('orderDetail')));
    }
    accountTracksByOrder(orderId) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_OrderAccountTrackDetail.replace('{:orderId}', orderId.toString());
        return this.http.get(apiUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`order track detail retrieved`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('accountTracksByOrder')));
    }
    getAllAccountTracks() {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetAllAccountTracks;
        return this.http.get(apiUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`all track detail retrieved`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllAccountTracks')));
    }
    removeTrack(accountId, orderId) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_RemoveTrack
            .replace('{:accountId}', accountId.toString()) + '/' + orderId;
        return this.http.delete(apiUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`track removed`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('removeTrack')));
    }
    EditTrack(accountId, orderId, newTrackData) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_EditTrack
            .replace('{:accountId}', accountId.toString()) + '/' + orderId;
        return this.http.post(apiUrl, newTrackData, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`track removed`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('removeTrack')));
    }
    syncPlaylist(playlist) {
        var accountId = 1;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_SyncPlaylist.replace('{:accountId}', accountId.toString());
        return this.http.post(apiUrl, playlist, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`playlist synced`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('syncPlaylist')));
    }
    getAccounts() {
        var accountId = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetAccounts.replace('{:accountId}', accountId.toString());
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched accounts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAccounts')));
    }
    getAccountTypes() {
        var accountId = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetAccountTypes.replace('{:accountId}', accountId.toString());
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched accounts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAccounts')));
    }
    getCountrys() {
        var accountId = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetCountrys.replace('{:accountId}', accountId.toString());
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched accounts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAccounts')));
    }
    getOrders() {
        var accountId = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetOrders.replace('{:accountId}', accountId.toString());
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched orders')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getOrders')));
    }
    getProxies() {
        var accountId = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetProxies.replace('{:accountId}', accountId.toString());
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched proxies')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getProxies')));
    }
    saveProxies(proxyListModel) {
        var accountId = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_AddProxies.replace('{:accountId}', accountId.toString());
        return this.http.post(apiUrl, proxyListModel, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`Proxies uploaded`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('saveProxies')));
    }
    saveAccounts(accountListModel) {
        var accountId = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_AddAccounts.replace('{:accountId}', accountId.toString());
        return this.http.post(apiUrl, accountListModel, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`Accounts uploaded`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('saveAccounts')));
    }
    deleteProxies(proxyId) {
        debugger;
        const accountId = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_DeleteProxies.replace('{:accountId}', accountId.toString()) + '/' + proxyId;
        return this.http.delete(apiUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`Proxies deleted`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('proxies deleted')));
    }
    // Delete Account
    deleteAccount(id) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_DeleteAccount.replace('{:accountId}', id.toString());
        console.log(apiUrl);
        return this.http.delete(apiUrl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`Account deleted`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Account Delete Error')));
    }
    editAccount(model) {
        const accountId = model.accountId; // AppSettings.MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_EditAccount.replace('{:accountId}', accountId.toString());
        return this.http.put(apiUrl, model, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingStates) => console.log(`Edit Account`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Edit Account')));
    }
    editProxy(model) {
        const proxyId = model.id; // AppSettings.MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_EditProxy.replace('{:id}', proxyId.toString());
        return this.http.put(apiUrl, model, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingStates) => console.log(`Edit Proxy`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Edit Proxy')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.log(error); // log to console instead
            // Let the app keep running by returning an empty result.
            //return of(result as T);
            //let the caller handle the error response
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        };
    }
    getAccountCounts() {
        var accountId = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].MasterAccountId;
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetAccountCounts.replace('{:accountId}', accountId.toString());
        // let sendparam : string = "";
        // for(var i=0; i< param.length-1; i++){
        //   sendparam = sendparam + param[i] + ",";
        // }
        // sendparam = sendparam + param[param.length-1];
        // const params = new HttpParams().set('param', sendparam);
        // console.log(sendparam);
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched accounts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAccounts')));
    }
    getDashboardDatas() {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetDashboard;
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched accounts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAccounts')));
    }
    ChromeStart(addedAccounts) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_StartChrome.replace('{:accountId}', "0");
        return this.http.post(apiUrl, addedAccounts, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((playingState) => console.log(`Started playing`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('startPlaying')));
    }
    getAccountInfo(accountId) {
        const apiUrl = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_GetAccountInfo.replace('{:accountId}', accountId.toString());
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(trackResponse => console.log('fetched accounts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAccounts')));
    }
};
SpotifyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpotifyService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost',
    clientId: '7436fbc414414814ac3d7342fefc03f1',
    clientSecret: 'ec695fad7425460cb64b7a21309925b9',
    redirect_uri: 'https://open.spotify.com/browse/featured'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\SpotifyWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map