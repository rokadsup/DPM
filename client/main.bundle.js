webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\" class = \"header\">AVIS</mat-toolbar>\n\n<!-- <ul>\n  <li>\n    <h2><a   routerLink=\"/home\" routerLinkActive=\"active\">Home</a></h2>\n  </li>\n  <li>\n    <h2><a  routerLink=\"/prep\" routerLinkActive=\"active\">Prep</a></h2>\n  </li>\n  \n</ul> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__prep_prep_component__ = __webpack_require__("../../../../../src/app/prep/prep.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_16__prep_prep_component__["a" /* PrepComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_checkbox__["a" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_input__["a" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_radio__["a" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_select__["a" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_17__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prep_prep_component__ = __webpack_require__("../../../../../src/app/prep/prep.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { CanDeactivateGuard }      from './can-deactivate-guard.service';
// import { AuthGuard }               from './auth-guard.service';
var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'prep',
        component: __WEBPACK_IMPORTED_MODULE_4__prep_prep_component__["a" /* PrepComponent */],
    },
    //   {
    //     path: 'admin',
    //     loadChildren: 'app/admin/admin.module#AdminModule',
    //     canLoad: [AuthGuard]
    //   },
    //   {
    //     path: 'crisis-center',
    //     loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
    //   },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"button-row\">\n  \n  <button mat-raised-button color=\"primary\" (click)=\"prep()\">Scan</button>\n  \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.prep = function () {
        this.router.navigate(['prep']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"button-row\">\n  \n  <button mat-raised-button (click)=\"login()\">Login</button>\n  \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['home']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/prep/prep.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prep/prep.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n<mat-accordion >\r\n\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n          <b>Vehicle Details</b>\r\n      </mat-expansion-panel-header>\r\n  \r\n      <mat-form-field  >\r\n          <mat-select placeholder=\"Inspection Type\">\r\n              <mat-option *ngFor=\"let itype of Itype\" [value]=\"itype.value\">\r\n                {{ itype.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n      </mat-form-field>\r\n  \r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"MVA\" disabled>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n          <input matInput placeholder=\"Make/Model\" disabled>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Wheels\">\r\n                <mat-option *ngFor=\"let wheel of Wheels\" [value]=\"wheel.value\">\r\n                  {{ wheel.viewValue }}\r\n                </mat-option> \r\n              </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input type=\"text\" matInput placeholder=\"Wizard Mileage\" disabled >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput placeholder=\"Actual Mileage\" >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Interior\">\r\n                <mat-option *ngFor=\"let int of Interior\" [value]=\"int.value\">\r\n                  {{ int.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input type=\"text\" matInput placeholder=\"Engine Size\" >\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input type=\"date\" matInput placeholder=\"Date\" >\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input type=\"text\" matInput placeholder=\"Last 8 of VIN\" disabled >\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Prep City\">\r\n              <mat-option *ngFor=\"let city of PCity\" [value]=\"city.value\">\r\n                {{ city.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-grid-list cols=\"2\" rowHeight=\"4:1\" >\r\n        <mat-grid-tile><div class=\"grid_element\" >Recalls Clear?</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n        <mat-grid-tile><div class=\"grid_element\">IQ/VR/CC/EZ/ZIP Removed?</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n      </mat-grid-list>\r\n    </mat-expansion-panel>\r\n<br>\r\n\r\n<!--          Expansion 2      -->\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <b> Drivers Seat/Cockpit</b>\r\n      </mat-expansion-panel-header>\r\n      \r\n      <mat-grid-list cols=\"2\" rowHeight=\"4:1\" >\r\n        <mat-grid-tile><div class=\"grid_element\" >Inspect Left Side & Center Rails</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle name=\"x1\" [(ngModel)]=\"x1\"></mat-slide-toggle></mat-grid-tile>\r\n        \r\n        <mat-grid-tile *ngIf=\"x1\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x1\">\r\n            <mat-select placeholder=\"Specify Type\">\r\n                <mat-option *ngFor=\"let dtype of DType\" [value]=\"dtype.value\">\r\n                  {{ dtype.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n      </mat-grid-tile>\r\n\r\n\r\n      <mat-grid-tile *ngIf=\"x1\"><div class=\"grid_element\" style=\"color:red;\"><i>Damage Severity</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x1\">\r\n            <mat-select placeholder=\"Select Severity\">\r\n                <mat-option *ngFor=\"let stype of SType\" [value]=\"stype.value\">\r\n                  {{ stype.viewValue }}\r\n                </mat-option>\r\n              </mat-select>        \r\n      </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Horn Function </div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Turn Signals</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Wipers good operation </div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Warning Lights on Dashboard Cluster</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle name=\"x2\" [(ngModel)]=\"x2\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x2\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x2\">\r\n            <mat-select placeholder=\"Specify Type\">\r\n                <mat-option *ngFor=\"let d2type of D2Type\" [value]=\"d2type.value\">\r\n                  {{ d2type.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n      </mat-grid-tile>\r\n\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Visor / Mirror / Interior lamps</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Headliner </div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle name=\"x3\" [(ngModel)]=\"x3\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x3\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x3\">\r\n            <mat-select placeholder=\"Specify Type\">\r\n                <mat-option *ngFor=\"let d3type of D3Type\" [value]=\"d3type.value\">\r\n                  {{ d3type.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">All Switches - Locks, Mirror </div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Heat / AC Operation </div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">All Knobs / Vents</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle name=\"x4\"  [(ngModel)]=\"x4\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x4\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x4\">\r\n            <mat-select placeholder=\"Specify Type\">\r\n                <mat-option *ngFor=\"let d4type of D4Type\" [value]=\"d4type.value\">\r\n                  {{ d4type.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Radio / Stereo / Speakers</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x5\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x5\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x5\">\r\n            <mat-select placeholder=\"Specify Type\">\r\n                <mat-option *ngFor=\"let d5type of D5Type\" [value]=\"d5type.value\">\r\n                  {{ d5type.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Back Up Camera operation</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x6\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x6\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x6\">\r\n            <mat-select placeholder=\"Specify Type\">\r\n                <mat-option *ngFor=\"let d6type of D6Type\" [value]=\"d6type.value\">\r\n                  {{ d6type.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Power Outlet functioning</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Seats / Power / Manual</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Seatbelts</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x7\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x7\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x7\">\r\n            <mat-select placeholder=\"Specify Type\">\r\n                <mat-option *ngFor=\"let d7type of D7Type\" [value]=\"d7type.value\">\r\n                  {{ d7type.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Trim - Door / Seat</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x8\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x8\"><div class=\"grid_element\" style=\"color:red;\"><i>Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x8\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let d8type of D8Type\" [value]=\"d8type.value\">\r\n                  {{ d8type.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Upholstery / Carpet</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x9\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x9\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x9\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let d9type of D9Type\" [value]=\"d9type.value\">\r\n                  {{ d9type.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Fuel level</div></mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <mat-select placeholder=\"Select Type\">\r\n            <mat-option *ngFor=\"let d10type of D10Type\" [value]=\"d10type.value\">\r\n              {{ d10type.viewValue }}\r\n            </mat-option>\r\n          </mat-select></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Trunk / Hood / Fuel Release</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Floor Mat Front Set (If equippped)</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x11\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x11\"><div class=\"grid_element\">Did the vehicle come with mats (see ROME sticker)?</div></mat-grid-tile>\r\n        <mat-grid-tile *ngIf=\"x11\"><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n\r\n      </mat-grid-list>\r\n    </mat-expansion-panel>\r\n    <br>\r\n\r\n<!--    Expansion 3      -->\r\n<mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n      <b>Left Rear</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>      \r\n      <mat-grid-list cols=\"2\" rowHeight=\"4:1\" >\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Exterior Door /Mldgs / Body</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x12\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x12\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x12\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDT1\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x12\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Severity</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x12\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDS1\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">LR Glass</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x13\" ></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x13\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x13\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDT3\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Upholstery / Carpet</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x14\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x13\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x13\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDT4\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Trim - Door / Seat</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x15\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x15\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x15\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDT5\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Seat Belt</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x16\" ></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x16\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x16\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDT6\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Switches, Window, Lock</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Floor Mats Rear Set (If equippped)</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x17\" ></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x17\"><div class=\"grid_element\" style=\"color:red;\"><i>Did the vehicle come with mats (see ROME sticker)?</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x17\">\r\n            <mat-select placeholder=\"Select Option\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearVM\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Wheel / Cover /Nuts / Caps </div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x18\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x18\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x18\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDT7\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n        \r\n        <mat-grid-tile *ngIf=\"x18\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Severity Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x18\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDS2\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Qtr Pnl - Mldg / Body</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x19\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x19\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x19\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDT8\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x19\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Severity Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x19\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDS3\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Lights</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><mat-form-field>\r\n        <div><input type=\"text\" matInput placeholder=\"Left Rear Tire Make Model\"></div>\r\n        </mat-form-field> </mat-grid-tile>\r\n        <mat-grid-tile></mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Left Rear Tire damage</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x20\"></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile *ngIf=\"x20\"><div class=\"grid_element\" style=\"color:red;\"><i>Specify Damage Type</i></div></mat-grid-tile>        \r\n        <mat-grid-tile *ngIf=\"x20\">\r\n            <mat-select placeholder=\"Select Type\">\r\n                <mat-option *ngFor=\"let lr1 of lftRearDT9\" [value]=\"lr1.value\">\r\n                  {{ lr1.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile><div class=\"grid_element\">Left Rear Tire Thread</div></mat-grid-tile>\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n      </mat-grid-list>\r\n   \r\n  </mat-expansion-panel>\r\n  <br>\r\n\r\n<!--    Expansion 4      -->\r\n<mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n     <b>Rear of Vehicle</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n  \r\n  </mat-expansion-panel>\r\n\r\n  <br>\r\n\r\n<!--          Expansion 5      -->\r\n<mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <b>Right Rear</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    \r\n  </mat-expansion-panel>\r\n  <br>\r\n\r\n  \r\n<!--          Expansion 6      -->\r\n<mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n      <b>Right Side Front</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    \r\n  </mat-expansion-panel>\r\n  <br>\r\n\r\n\r\n<!--          Expansion 7      -->\r\n<mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <b>Front End</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    \r\n  </mat-expansion-panel>  \r\n  <br>\r\n\r\n\r\n<!--          Expansion 8      -->\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <b> Engine Compartment</b>\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      \r\n    </mat-expansion-panel>\r\n    <br>\r\n\r\n\r\n<!--          Expansion 9      -->\r\n<mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <b> Left Front</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    \r\n  </mat-expansion-panel>    \r\n  <br>\r\n\r\n\r\n<!--          Expansion 10      -->\r\n<mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <b>Chargable Damage</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n  \r\n      \r\n    <div class=\"grid_element\" style=\"padding:20px;\"><b>Ford</b> has turnback allowances upto <b>$500</b> deductible<span style=\"margin-left:4px;\"></span><i class=\"fa fa-info\"></i></div>\r\n    <br><br>\r\n    <mat-form-field>  \r\n      <input matInput placeholder=\"Panel Issues\" disabled>\r\n    </mat-form-field>\r\n\r\n    \r\n  \r\n    <mat-grid-list cols=\"4\" rowHeight=\"4:4\">\r\n        <mat-grid-tile><div class=\"grid_element\">ABG Ramp Amount $$</div></mat-grid-tile>\r\n        <mat-grid-tile><div class=\"grid_element\">Repair Yes or No</div></mat-grid-tile>\r\n        <mat-grid-tile><div class=\"grid_element\">ABG Cost of Repair $$</div></mat-grid-tile>\r\n        <mat-grid-tile><div class=\"grid_element\">Remaining Damage on MVA $$</div></mat-grid-tile>\r\n\r\n        <mat-grid-tile colspan=\"2\"><div class=\"grid_element\">Drivers Seat/Cockpit</div></mat-grid-tile>\r\n        <mat-grid-tile colspan=\"2\"><div class=\"grid_element\"><i class=\"fa fa-bullseye\"></i>Turn Signals</div></mat-grid-tile>\r\n\r\n        <mat-grid-tile><mat-form-field>  \r\n            <input matInput placeholder=\"0\">\r\n          </mat-form-field></mat-grid-tile>\r\n\r\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n\r\n        <mat-grid-tile><mat-form-field>  \r\n            <input matInput placeholder=\"0\">\r\n          </mat-form-field></mat-grid-tile>\r\n\r\n        <mat-grid-tile><mat-form-field>  \r\n            <input matInput placeholder=\"0\">\r\n          </mat-form-field></mat-grid-tile>\r\n<!--                                      -->\r\n         \r\n<mat-grid-tile colspan=\"2\"><div class=\"grid_element\">Left Rear</div></mat-grid-tile>\r\n        <mat-grid-tile colspan=\"2\"><div class=\"grid_element\"><i class=\"fa fa-bullseye\"></i>Turn Signals</div></mat-grid-tile>\r\n\r\n          <mat-grid-tile><mat-form-field>  \r\n              <input matInput placeholder=\"0\">\r\n            </mat-form-field></mat-grid-tile>\r\n  \r\n          <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\r\n  \r\n          <mat-grid-tile><mat-form-field>  \r\n              <input matInput placeholder=\"0\">\r\n            </mat-form-field></mat-grid-tile>\r\n  \r\n          <mat-grid-tile><mat-form-field>  \r\n              <input matInput placeholder=\"0\">\r\n            </mat-form-field></mat-grid-tile>\r\n\r\n    \r\n    </mat-grid-list>\r\n\r\n\r\n    \r\n        \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <mat-form-field>\r\n          <input type=\"text\" matInput placeholder=\"Total Existing Condition\"  disabled>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n          <input type=\"text\" matInput placeholder=\"Prepped Condition\"  disabled>\r\n      </mat-form-field>\r\n\r\n    </mat-expansion-panel>\r\n  <br>\r\n\r\n\r\n\r\n  </mat-accordion>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/prep/prep.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrepComponent = /** @class */ (function () {
    function PrepComponent() {
        this.panelOpenState = false;
        this.Itype = [
            { value: 'TB', viewValue: 'Turnback' },
            { value: 'WS', viewValue: 'Wholesale' },
            { value: 'UTD', viewValue: 'Ultimate Test Drive' }
        ];
        this.Wheels = [
            { value: 'ALY', viewValue: 'Alloy' },
            { value: 'STL', viewValue: 'Steel' },
        ];
        this.Interior = [
            { value: 'CLT', viewValue: 'Cloth' },
            { value: 'VIN', viewValue: 'Vinyl' },
            { value: 'LTH', viewValue: 'Leather' }
        ];
        this.PCity = [
            { value: 'MCO', viewValue: 'MCO' },
            { value: 'EWR', viewValue: 'EWR' }
        ];
        // Door seat Cockpit 
        this.DType = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' },
        ];
        this.SType = [
            { value: '<1', viewValue: '<1' },
            { value: '1-4', viewValue: '1-4' },
            { value: '4-8', viewValue: '4-8' },
            { value: '>8', viewValue: '>8' }
        ];
        this.D2Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inpoerative', viewValue: 'Inpoerative' }
        ];
        this.D3Type = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.D4Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inpoerative', viewValue: 'Inpoerative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.D5Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inpoerative', viewValue: 'Inpoerative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.D6Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inpoerative', viewValue: 'Inpoerative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.D7Type = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inpoerative', viewValue: 'Inpoerative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.D8Type = [
            { value: 'Loose', viewValue: 'loose' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.D9Type = [
            { value: 'Loose', viewValue: 'loose' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.D10Type = [
            { value: 'E', viewValue: 'E' },
            { value: '1/8', viewValue: '1/8' },
            { value: '1/4', viewValue: '1/4' },
            { value: '3/8', viewValue: '3/8' },
            { value: '1/2', viewValue: '1/2' },
            { value: '5/8', viewValue: '5/8' },
            { value: '3/4', viewValue: '3/4' },
            { value: '7/8', viewValue: '7/8' },
            { value: 'F', viewValue: 'F' },
        ];
        // Left Rear 
        this.lftRearDT1 = [
            { value: 'dent', viewValue: 'dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'chip', viewValue: 'chip' }
        ];
        this.lftRearDS1 = [
            { value: '< 1"', viewValue: '< 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: ' >8"' }
        ];
        this.lftRearDT3 = [
            { value: 'scratch"', viewValue: 'scratch' },
            { value: 'crack', viewValue: 'crack' },
            { value: 'aftermarket', viewValue: 'aftermarket' },
            { value: 'molding damage', viewValue: 'molding damage' }
        ];
        this.lftRearDT4 = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.lftRearDT5 = [
            { value: 'Loose', viewValue: 'Loose' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.lftRearDT6 = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'broken', viewValue: 'broken' },
            { value: 'inoperative', viewValue: 'inoperative' },
            { value: 'missing', viewValue: 'missing' }
        ];
        this.lftRearVM = [
            { value: 'Y', viewValue: 'Y' },
            { value: 'N', viewValue: 'N' },
        ];
        this.lftRearDT7 = [
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Bent', viewValue: 'Bent' }
        ];
        this.lftRearDS2 = [
            { value: '< 2"', viewValue: ' < 2"' },
            { value: '2-4"', viewValue: '2-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.lftRearDT8 = [
            { value: '< 2"', viewValue: ' < 2"' },
            { value: '2-4"', viewValue: '2-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.lftRearDS3 = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.lftRearDT9 = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Puncture', viewValue: 'Puncture' },
            { value: 'Buldge', viewValue: 'Buldge' },
            { value: 'Wear Pattern', viewValue: 'Wear Pattern' }
        ];
    }
    PrepComponent.prototype.ngOnInit = function () {
    };
    PrepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prep',
            template: __webpack_require__("../../../../../src/app/prep/prep.component.html"),
            styles: [__webpack_require__("../../../../../src/app/prep/prep.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrepComponent);
    return PrepComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map