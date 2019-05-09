(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Space Travel App\n  </h1>\n</div>\n\n<app-life-forms></app-life-forms>\n<app-shuttle></app-shuttle>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'space-travel';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _life_forms_life_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./life-forms/life-forms.component */ "./src/app/life-forms/life-forms.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shuttle_shuttle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shuttle/shuttle.component */ "./src/app/shuttle/shuttle.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _life_forms_life_forms_component__WEBPACK_IMPORTED_MODULE_5__["LifeFormsComponent"],
                _shuttle_shuttle_component__WEBPACK_IMPORTED_MODULE_7__["ShuttleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/life-forms/life-forms.component.css":
/*!*****************************************************!*\
  !*** ./src/app/life-forms/life-forms.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lf {\n  display: inline-block;\n  /*width: 150px;*/\n  padding: 5px;\n  margin: 0 10px 10px;\n  border: 1px solid #ccc;\n\n}\n\n.lfContainer {\n  overflow: scroll;\n  width: 100%;\n  height: 122px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZS1mb3Jtcy9saWZlLWZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbGlmZS1mb3Jtcy9saWZlLWZvcm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qd2lkdGg6IDE1MHB4OyovXG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwIDEwcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcblxufVxuXG4ubGZDb250YWluZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/life-forms/life-forms.component.html":
/*!******************************************************!*\
  !*** ./src/app/life-forms/life-forms.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Passengers</h2>\n<div class=\"lfContainer\">\n  <span class=\"lf\" *ngFor=\"let f of forms\">\n    {{f.weight}} Kg\n    <div>{{f.sourcePlanet}} -> {{f.destinationPlanet}}</div>\n  </span>\n</div>\n\n<!--<input type=\"button\" (click)=\"showLatest();\" value=\"Show Latest\"/>-->\n<input type=\"button\" (click)=\"getAllForms();\" value=\"Refresh Passengers List\"/>\n\n<div *ngIf=\"latestLifeForm\">\n  {{latestLifeForm.weight}}\n  {{latestLifeForm.sourcePlanet}}\n  {{latestLifeForm.destinationPlanet}}\n</div>\n"

/***/ }),

/***/ "./src/app/life-forms/life-forms.component.ts":
/*!****************************************************!*\
  !*** ./src/app/life-forms/life-forms.component.ts ***!
  \****************************************************/
/*! exports provided: LifeFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeFormsComponent", function() { return LifeFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_life_form_life_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/life-form/life-form.service */ "./src/app/service/life-form/life-form.service.ts");



var LifeFormsComponent = /** @class */ (function () {
    function LifeFormsComponent(lifeFormService) {
        this.lifeFormService = lifeFormService;
    }
    LifeFormsComponent.prototype.ngOnInit = function () {
        this.getAllForms();
    };
    LifeFormsComponent.prototype.getAllForms = function () {
        var _this = this;
        this.lifeFormService.getAll().subscribe(function (d) {
            _this.forms = d;
        });
    };
    LifeFormsComponent.prototype.showLatest = function () {
        var _this = this;
        this.lifeFormService.getLatest().subscribe(function (data) {
            _this.latestLifeForm = data;
        });
        this.getAllForms();
    };
    LifeFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-life-forms',
            template: __webpack_require__(/*! ./life-forms.component.html */ "./src/app/life-forms/life-forms.component.html"),
            styles: [__webpack_require__(/*! ./life-forms.component.css */ "./src/app/life-forms/life-forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_life_form_life_form_service__WEBPACK_IMPORTED_MODULE_2__["LifeFormService"]])
    ], LifeFormsComponent);
    return LifeFormsComponent;
}());



/***/ }),

/***/ "./src/app/service/life-form/life-form.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/life-form/life-form.service.ts ***!
  \********************************************************/
/*! exports provided: LifeFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeFormService", function() { return LifeFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LifeFormService = /** @class */ (function () {
    function LifeFormService(http) {
        this.http = http;
    }
    LifeFormService.prototype.getAll = function () {
        return this.http.get('http://localhost:8080/getLifeForm');
    };
    LifeFormService.prototype.getLatest = function () {
        return this.http.get('http://localhost:8080/getLatestLifeForm');
    };
    LifeFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LifeFormService);
    return LifeFormService;
}());



/***/ }),

/***/ "./src/app/service/shuttle/shuttle.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/shuttle/shuttle.service.ts ***!
  \****************************************************/
/*! exports provided: ShuttleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuttleService", function() { return ShuttleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ShuttleService = /** @class */ (function () {
    function ShuttleService(http) {
        this.http = http;
    }
    ShuttleService.prototype.getShuttle = function () {
        return this.http.get('http://localhost:8080/shuttle');
    };
    ShuttleService.prototype.assignLatest = function () {
        return this.http.get('http://localhost:8080/assignLatest');
    };
    ShuttleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShuttleService);
    return ShuttleService;
}());



/***/ }),

/***/ "./src/app/shuttle/shuttle.component.css":
/*!***********************************************!*\
  !*** ./src/app/shuttle/shuttle.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shuttleDeck {\n  width: 250px;\n  border: 1px solid #888;\n  background-color: #efefef;\n  margin: 20px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.shuttleDeck .title {\n  background-color: #4274FF;\n  color: white;\n  padding: 5px;\n  margin: 0 0 5px;\n}\n\n.passenger_title {\n  margin: 5px 0;\n  padding: 5px;\n  background-color: #87b7ff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2h1dHRsZS9zaHV0dGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NodXR0bGUvc2h1dHRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNodXR0bGVEZWNrIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2h1dHRsZURlY2sgLnRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNzRGRjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMCAwIDVweDtcbn1cblxuLnBhc3Nlbmdlcl90aXRsZSB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3YjdmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shuttle/shuttle.component.html":
/*!************************************************!*\
  !*** ./src/app/shuttle/shuttle.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"button\" (click)=\"assignLatest()\" value=\"Assign Latest\">\n\n<div *ngIf=\"shuttles\">\n  <div *ngFor=\"let s of shuttles\" class=\"shuttleDeck\">\n    <div class=\"title\">Shuttle {{s.id + 1}}</div>\n    <div>Dir: {{s.direction}}</div>\n    <div>Cap: {{s.currentCapacity}}</div>\n    <div>Weight: {{s.currentWeight}}</div>\n    <div>Curr: {{s.currentPlanet}}</div>\n    <div>Dest: {{s.nextDestination}}</div>\n\n    <div *ngIf=\"s.passengers\">\n      <div class=\"passenger_title\">Passengers</div>\n      <div *ngFor=\"let p of s.passengers\" class=\"passengers\">\n        <span>{{p.id}}</span> | <span>{{p.destinationPlanet}}</span> | <span>{{p.weight}} Kg</span>\n      </div>\n    </div>\n\n    <div>Count: {{s.passengers.length}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shuttle/shuttle.component.ts":
/*!**********************************************!*\
  !*** ./src/app/shuttle/shuttle.component.ts ***!
  \**********************************************/
/*! exports provided: ShuttleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuttleComponent", function() { return ShuttleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_shuttle_shuttle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/shuttle/shuttle.service */ "./src/app/service/shuttle/shuttle.service.ts");



var ShuttleComponent = /** @class */ (function () {
    function ShuttleComponent(shuttleService) {
        this.shuttleService = shuttleService;
    }
    ShuttleComponent.prototype.ngOnInit = function () {
        this.getShuttles();
    };
    ShuttleComponent.prototype.getShuttles = function () {
        var _this = this;
        this.shuttleService.getShuttle().subscribe(function (data) {
            _this.shuttles = data;
        });
    };
    ShuttleComponent.prototype.assignLatest = function () {
        var _this = this;
        this.shuttleService.assignLatest().subscribe(function () {
            return _this.getShuttles();
        });
    };
    ShuttleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shuttle',
            template: __webpack_require__(/*! ./shuttle.component.html */ "./src/app/shuttle/shuttle.component.html"),
            styles: [__webpack_require__(/*! ./shuttle.component.css */ "./src/app/shuttle/shuttle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_shuttle_shuttle_service__WEBPACK_IMPORTED_MODULE_2__["ShuttleService"]])
    ], ShuttleComponent);
    return ShuttleComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Storage/Hooman/Work/NAB/NAB Project/space-travel/src/main/space-travel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map