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

/***/ "./src/app/alert.service.ts":
/*!**********************************!*\
  !*** ./src/app/alert.service.ts ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertService = /** @class */ (function () {
    function AlertService() {
        this.needAlert = false;
        this.message = '';
    }
    AlertService.prototype.show = function (isWin) {
        this.needAlert = true;
        this.message = isWin ? "Congratulations! You Win!" : 'You Lose.';
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal fade\" [ngClass]=\"{'show': alert.needAlert, 'disablitWindow': alert.needAlert}\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Game Over.</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"close()\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{ alert.message }}\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"close()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"restart()\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/alert/alert.component.scss":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".disablitWindow {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _battle_ship_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../battle-ship.service */ "./src/app/battle-ship.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alert, battleShipService) {
        this.alert = alert;
        this.battleShipService = battleShipService;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.close = function () {
        this.alert.needAlert = false;
    };
    AlertComponent.prototype.restart = function () {
        this.close();
        this.battleShipService.restartGame();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"], _battle_ship_service__WEBPACK_IMPORTED_MODULE_2__["BattleShipService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-main></app-main>\r\n<app-footer></app-footer>\r\n<app-alert></app-alert>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field/field.component */ "./src/app/field/field.component.ts");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cell/cell.component */ "./src/app/cell/cell.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _ship_ship_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ship/ship.component */ "./src/app/ship/ship.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _ships_ships_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ships/ships.component */ "./src/app/ships/ships.component.ts");
/* harmony import */ var _battle_ship_battle_ship_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./battle-ship/battle-ship.component */ "./src/app/battle-ship/battle-ship.component.ts");
/* harmony import */ var _controller_controller_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controller/controller.component */ "./src/app/controller/controller.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _battle_ship_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./battle-ship.service */ "./src/app/battle-ship.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _field_field_component__WEBPACK_IMPORTED_MODULE_5__["FieldComponent"],
                _cell_cell_component__WEBPACK_IMPORTED_MODULE_6__["CellComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _ship_ship_component__WEBPACK_IMPORTED_MODULE_10__["ShipComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_11__["PlayerComponent"],
                _display_display_component__WEBPACK_IMPORTED_MODULE_12__["DisplayComponent"],
                _ships_ships_component__WEBPACK_IMPORTED_MODULE_13__["ShipsComponent"],
                _battle_ship_battle_ship_component__WEBPACK_IMPORTED_MODULE_14__["BattleShipComponent"],
                _controller_controller_component__WEBPACK_IMPORTED_MODULE_15__["ControllerComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                _battle_ship_service__WEBPACK_IMPORTED_MODULE_17__["BattleShipService"],
                _websocket_service__WEBPACK_IMPORTED_MODULE_18__["WebsocketService"],
                _alert_service__WEBPACK_IMPORTED_MODULE_19__["AlertService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/battle-ship.service.ts":
/*!****************************************!*\
  !*** ./src/app/battle-ship.service.ts ***!
  \****************************************/
/*! exports provided: BattleShipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleShipService", function() { return BattleShipService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BattleShipService = /** @class */ (function () {
    function BattleShipService(wsService, alert) {
        var _this = this;
        this.wsService = wsService;
        this.alert = alert;
        this.whoWillTurn = "me";
        this.myField = {
            cells: [],
            ships: []
        };
        this.enemyField = {
            cells: [],
            ships: []
        };
        this.bot = { level: 'easy' };
        var that = this;
        wsService.on('getMyField', function (data) {
            that.setMyField(data.field);
        });
        wsService.on('getEnemyField', function (data) {
            that.setEnemyField(data.field);
        });
        wsService.on('endGame', function (data) {
            _this.whoWillTurn = "enemy";
            alert.show(data.isWin);
        });
        wsService.on('switchLevel', function (data) {
            _this.bot = Object.assign(_this.bot, data);
        });
        setTimeout(that.startConfig.bind(this), 1);
    }
    BattleShipService.prototype.startConfig = function () {
        this.whoWillTurn = "me";
        this.ganirateField();
        this.startGame();
    };
    BattleShipService.prototype.setMyField = function (field) {
        this.myField.cells = Object.assign(this.myField.cells, field._cells);
        this.myField.ships = Object.assign(this.myField.ships, field.ships);
    };
    BattleShipService.prototype.setEnemyField = function (field) {
        this.enemyField.cells = Object.assign(this.enemyField.cells, field._cells);
        this.enemyField.ships = Object.assign(this.enemyField.ships, field.ships);
    };
    BattleShipService.prototype.switchPlayer = function () {
        this.whoWillTurn = (this.whoWillTurn === "me") ? "enemy" : "me";
    };
    BattleShipService.prototype.switchLevel = function () {
        this.wsService.send('switchLevel', null);
    };
    BattleShipService.prototype.ganirateField = function () {
        this.wsService.send('ganirateField', null);
    };
    BattleShipService.prototype.startGame = function () {
        this.wsService.send('playVsBot', null);
    };
    BattleShipService.prototype.restartGame = function () {
        this.startConfig();
    };
    BattleShipService.prototype.serverFire = function () {
        this.wsService.send('serverFire', {
            myField: this.myField
        });
    };
    BattleShipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"], _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], BattleShipService);
    return BattleShipService;
}());



/***/ }),

/***/ "./src/app/battle-ship/battle-ship.component.html":
/*!********************************************************!*\
  !*** ./src/app/battle-ship/battle-ship.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-player [player]=\"'me'\" class=\"col-xl-6 col-md-9 sm-12 mx-auto mb-3\"></app-player>\r\n<app-player [player]=\"'enemy'\" class=\"col-xl-6 col-md-9 sm-12 mx-auto mb-3\"></app-player>"

/***/ }),

/***/ "./src/app/battle-ship/battle-ship.component.scss":
/*!********************************************************!*\
  !*** ./src/app/battle-ship/battle-ship.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/battle-ship/battle-ship.component.ts":
/*!******************************************************!*\
  !*** ./src/app/battle-ship/battle-ship.component.ts ***!
  \******************************************************/
/*! exports provided: BattleShipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleShipComponent", function() { return BattleShipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BattleShipComponent = /** @class */ (function () {
    function BattleShipComponent() {
    }
    BattleShipComponent.prototype.ngOnInit = function () {
    };
    BattleShipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-battle-ship',
            template: __webpack_require__(/*! ./battle-ship.component.html */ "./src/app/battle-ship/battle-ship.component.html"),
            styles: [__webpack_require__(/*! ./battle-ship.component.scss */ "./src/app/battle-ship/battle-ship.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BattleShipComponent);
    return BattleShipComponent;
}());



/***/ }),

/***/ "./src/app/cell/cell.component.html":
/*!******************************************!*\
  !*** ./src/app/cell/cell.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"cell btn\" [ngClass]=\"{cell_hasShip:cellInfo.hasShip, cell_hasFire:cellInfo.hasFire}\" (click)=\"fire()\"></button>\r\n"

/***/ }),

/***/ "./src/app/cell/cell.component.scss":
/*!******************************************!*\
  !*** ./src/app/cell/cell.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 10%;\n  height: 40px; }\n\n@media (max-width: 576px) {\n  :host {\n    height: 30px; } }\n\n.cell {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  background: #a9e4f7;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #a9e4f7 0%, #6ecce9 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  border: 1px solid; }\n\n.cell:hover, .cell:active, .cell:visited, .cell:focus {\n    outline: none;\n    border: 1px solid red; }\n\n.cell_hasShip {\n    background: #ffa053;\n    /* Old browsers */\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: radial-gradient(ellipse at center, #ffa053 0%, #e8b642 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ }\n\n.cell_hasShip:hover, .cell_hasShip:active, .cell_hasShip:visited, .cell_hasShip:focus {\n      outline: none;\n      border: 1px solid blue; }\n\n.cell_hasFire {\n    position: relative; }\n\n.cell_hasFire::after, .cell_hasFire::before {\n      display: block;\n      content: \"\";\n      position: absolute;\n      background: darkblue;\n      border-radius: 50%;\n      width: 4px;\n      height: 100%;\n      top: 50%;\n      left: 50%; }\n\n.cell_hasFire::after {\n      -webkit-transform: translate(-50%, -50%) rotate(45deg);\n              transform: translate(-50%, -50%) rotate(45deg); }\n\n.cell_hasFire::before {\n      -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n              transform: translate(-50%, -50%) rotate(-45deg); }\n"

/***/ }),

/***/ "./src/app/cell/cell.component.ts":
/*!****************************************!*\
  !*** ./src/app/cell/cell.component.ts ***!
  \****************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fire_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fire.service */ "./src/app/fire.service.ts");
/* harmony import */ var _helper_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/position */ "./src/app/helper/position.ts");
/* harmony import */ var _battle_ship_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../battle-ship.service */ "./src/app/battle-ship.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CellComponent = /** @class */ (function () {
    function CellComponent(fireService, battleShipService) {
        this.fireService = fireService;
        this.battleShipService = battleShipService;
    }
    CellComponent.prototype.ngOnInit = function () {
    };
    CellComponent.prototype.fire = function () {
        if (this.changeable && !this.cellInfo.hasFire && this.battleShipService.whoWillTurn === 'me')
            this.fireService.fire(new _helper_position__WEBPACK_IMPORTED_MODULE_2__["Position"](this.cellInfo.x, this.cellInfo.y));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellComponent.prototype, "cellInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellComponent.prototype, "changeable", void 0);
    CellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cell',
            template: __webpack_require__(/*! ./cell.component.html */ "./src/app/cell/cell.component.html"),
            styles: [__webpack_require__(/*! ./cell.component.scss */ "./src/app/cell/cell.component.scss")]
        }),
        __metadata("design:paramtypes", [_fire_service__WEBPACK_IMPORTED_MODULE_1__["FireService"], _battle_ship_service__WEBPACK_IMPORTED_MODULE_3__["BattleShipService"]])
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/app/controller/controller.component.html":
/*!******************************************************!*\
  !*** ./src/app/controller/controller.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center controller\">\r\n  <p class=\"mb-0\">Level: {{ battleShipService.bot.level[0] | uppercase }}{{ battleShipService.bot.level.slice(1, battleShipService.bot.level.length) }}</p>\r\n\r\n  <button class=\"btn btn-secondary ml-2\" (click)=\"battleShipService.switchLevel()\">Switch Level</button>\r\n  <button class=\"btn btn-light ml-2\" (click)=\"battleShipService.restartGame()\">Restart Game</button>\r\n</div>"

/***/ }),

/***/ "./src/app/controller/controller.component.scss":
/*!******************************************************!*\
  !*** ./src/app/controller/controller.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".level {\n  display: block; }\n\n.controller {\n  height: 60px; }\n"

/***/ }),

/***/ "./src/app/controller/controller.component.ts":
/*!****************************************************!*\
  !*** ./src/app/controller/controller.component.ts ***!
  \****************************************************/
/*! exports provided: ControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerComponent", function() { return ControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _battle_ship_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../battle-ship.service */ "./src/app/battle-ship.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControllerComponent = /** @class */ (function () {
    function ControllerComponent(battleShipService) {
        this.battleShipService = battleShipService;
    }
    ControllerComponent.prototype.ngOnInit = function () {
    };
    ControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-controller',
            template: __webpack_require__(/*! ./controller.component.html */ "./src/app/controller/controller.component.html"),
            styles: [__webpack_require__(/*! ./controller.component.scss */ "./src/app/controller/controller.component.scss")]
        }),
        __metadata("design:paramtypes", [_battle_ship_service__WEBPACK_IMPORTED_MODULE_1__["BattleShipService"]])
    ], ControllerComponent);
    return ControllerComponent;
}());



/***/ }),

/***/ "./src/app/display/display.component.html":
/*!************************************************!*\
  !*** ./src/app/display/display.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\">{{ playerName }}</h2>\r\n<app-ships [player]=\"player\" class=\"d-flex flex-column\"></app-ships>"

/***/ }),

/***/ "./src/app/display/display.component.scss":
/*!************************************************!*\
  !*** ./src/app/display/display.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 15px; }\n\n@media (max-width: 576px) {\n  :host {\n    padding: 5px 10px; } }\n\n.title {\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayComponent = /** @class */ (function () {
    function DisplayComponent() {
    }
    DisplayComponent.prototype.ngOnInit = function () {
        this.playerName = this.player === 'me' ? 'Your Field' : ' Enemy Field';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplayComponent.prototype, "player", void 0);
    DisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/display/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.scss */ "./src/app/display/display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/field/field.component.html":
/*!********************************************!*\
  !*** ./src/app/field/field.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"field\">\r\n  <app-cell *ngFor=\"let cell of cells; index as i\" [changeable]=\"player !== 'me'\" [cellInfo]=\"cell\"></app-cell>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/field/field.component.scss":
/*!********************************************!*\
  !*** ./src/app/field/field.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 400px;\n  height: 400px; }\n\n@media (max-width: 576px) {\n  :host {\n    width: 300px; } }\n\n.field {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 5px 10px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.field {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n"

/***/ }),

/***/ "./src/app/field/field.component.ts":
/*!******************************************!*\
  !*** ./src/app/field/field.component.ts ***!
  \******************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _battle_ship_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../battle-ship.service */ "./src/app/battle-ship.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldComponent = /** @class */ (function () {
    function FieldComponent(battleShipService) {
        this.battleShipService = battleShipService;
        this.cells = [];
    }
    FieldComponent.prototype.ngOnInit = function () {
        this.cells = (this.player === 'me') ? this.battleShipService.myField.cells : this.battleShipService.enemyField.cells;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "player", void 0);
    FieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.scss */ "./src/app/field/field.component.scss")]
        }),
        __metadata("design:paramtypes", [_battle_ship_service__WEBPACK_IMPORTED_MODULE_1__["BattleShipService"]])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/fire.service.ts":
/*!*********************************!*\
  !*** ./src/app/fire.service.ts ***!
  \*********************************/
/*! exports provided: FireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireService", function() { return FireService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _helper_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/position */ "./src/app/helper/position.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FieldService } from './field.service'


var FireService = /** @class */ (function () {
    function FireService(websocketService) {
        this.websocketService = websocketService;
    }
    FireService.prototype.fire = function (cell) {
        this.websocketService.send('fire', {
            position: new _helper_position__WEBPACK_IMPORTED_MODULE_2__["Position"](cell.x, cell.y)
        });
    };
    FireService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], FireService);
    return FireService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row d-flex justify-content-end\">\r\n      <p class=\"m-0\">\r\n        Copyright © Lav Palkin, 2018. Все права защищены.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  position: absolute;\n  bottom: 0;\n  background-color: #a7a755; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"mb-4\">\r\n  <div class=\"container\">\r\n    <div class=\"row d-flex justify-content-between align-content-center ml-2\">\r\n      <div class=\"d-flex\">\r\n        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"60px\"\r\n            height=\"60px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\r\n        <g id=\"Bounding_Boxes\">\r\n          <g id=\"ui_x5F_spec_x5F_header_copy_3\" display=\"none\">\r\n          </g>\r\n          <path fill=\"none\" d=\"M0,0h24v24H0V0z\"/>\r\n        </g>\r\n        <g id=\"Outline\">\r\n          <g id=\"ui_x5F_spec_x5F_header\" display=\"none\">\r\n          </g>\r\n          <path fill=\"#880e0e\" d=\"M17,16.99c-1.35,0-2.2,0.42-2.95,0.8c-0.65,0.33-1.18,0.6-2.05,0.6c-0.9,0-1.4-0.25-2.05-0.6c-0.75-0.38-1.57-0.8-2.95-0.8\r\n            s-2.2,0.42-2.95,0.8c-0.65,0.33-1.17,0.6-2.05,0.6v1.95c1.35,0,2.2-0.42,2.95-0.8c0.65-0.33,1.17-0.6,2.05-0.6s1.4,0.25,2.05,0.6\r\n            c0.75,0.38,1.57,0.8,2.95,0.8s2.2-0.42,2.95-0.8c0.65-0.33,1.18-0.6,2.05-0.6c0.9,0,1.4,0.25,2.05,0.6c0.75,0.38,1.58,0.8,2.95,0.8\r\n            v-1.95c-0.9,0-1.4-0.25-2.05-0.6C19.2,17.41,18.35,16.99,17,16.99z M17,12.54c-1.35,0-2.2,0.43-2.95,0.8\r\n            c-0.65,0.32-1.18,0.6-2.05,0.6c-0.9,0-1.4-0.25-2.05-0.6c-0.75-0.38-1.57-0.8-2.95-0.8s-2.2,0.43-2.95,0.8\r\n            c-0.65,0.32-1.17,0.6-2.05,0.6v1.95c1.35,0,2.2-0.43,2.95-0.8c0.65-0.35,1.15-0.6,2.05-0.6s1.4,0.25,2.05,0.6\r\n            c0.75,0.38,1.57,0.8,2.95,0.8s2.2-0.43,2.95-0.8c0.65-0.35,1.15-0.6,2.05-0.6s1.4,0.25,2.05,0.6c0.75,0.38,1.58,0.8,2.95,0.8v-1.95\r\n            c-0.9,0-1.4-0.25-2.05-0.6C19.2,12.96,18.35,12.54,17,12.54z M19.95,4.46c-0.75-0.38-1.58-0.8-2.95-0.8s-2.2,0.42-2.95,0.8\r\n            c-0.65,0.32-1.18,0.6-2.05,0.6c-0.9,0-1.4-0.25-2.05-0.6C9.2,4.09,8.38,3.66,7,3.66s-2.2,0.42-2.95,0.8C3.4,4.79,2.88,5.06,2,5.06\r\n            v1.93c1.35,0,2.2-0.43,2.95-0.8C5.6,5.86,6.12,5.59,7,5.59s1.4,0.25,2.05,0.6c0.75,0.38,1.57,0.8,2.95,0.8s2.2-0.43,2.95-0.8\r\n            c0.65-0.32,1.18-0.6,2.05-0.6c0.9,0,1.4,0.25,2.05,0.6c0.75,0.38,1.58,0.8,2.95,0.8V5.04C21.1,5.04,20.6,4.79,19.95,4.46z M17,8.09\r\n            c-1.35,0-2.2,0.43-2.95,0.8C13.4,9.24,12.9,9.49,12,9.49s-1.4-0.25-2.05-0.6C9.2,8.51,8.38,8.09,7,8.09s-2.2,0.43-2.95,0.8\r\n            C3.4,9.24,2.9,9.49,2,9.49v1.95c1.35,0,2.2-0.43,2.95-0.8c0.65-0.32,1.18-0.6,2.05-0.6s1.4,0.25,2.05,0.6\r\n            c0.75,0.38,1.57,0.8,2.95,0.8s2.2-0.43,2.95-0.8c0.65-0.32,1.18-0.6,2.05-0.6c0.9,0,1.4,0.25,2.05,0.6c0.75,0.38,1.58,0.8,2.95,0.8\r\n            V9.49c-0.9,0-1.4-0.25-2.05-0.6C19.2,8.51,18.35,8.09,17,8.09z\"/>\r\n        </g>\r\n        </svg>\r\n        <p class=\"game-name d-flex align-items-center\">BattleShip</p>\r\n      </div>\r\n    \r\n      <app-controller></app-controller>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  width: 100%;\n  min-height: 60px;\n  background: #d6d664; }\n\n.icon {\n  width: 60px;\n  height: 60px; }\n\n.game-name {\n  font-size: 30px;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/helper/position.ts":
/*!************************************!*\
  !*** ./src/app/helper/position.ts ***!
  \************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Position.prototype.setPosition = function (pos) {
        this.x = pos.x;
        this.y = pos.y;
    };
    Position.prototype.getСoordinate = function (coordinate) {
        return this[coordinate];
    };
    Position.prototype.setСoordinate = function (coordinate, value) {
        this[coordinate] = value;
    };
    Position.equal = function (pos1, pos2) {
        return (pos1.x === pos2.x && pos1.y === pos2.y) ? true : false;
    };
    Position.prototype.increment = function (coordinate) {
        this[coordinate]++;
    };
    Position.prototype.decrement = function (coordinate) {
        this[coordinate]--;
    };
    return Position;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\r\n  <app-battle-ship class=\"row d-flex ju\"></app-battle-ship>\r\n</main>"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _battle_ship_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../battle-ship.service */ "./src/app/battle-ship.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(battleShipService) {
        this.battleShipService = battleShipService;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.gamerWillTurn = function () {
        return this.battleShipService.whoWillTurn === "gamer";
    };
    MainComponent.prototype.computerWillTurn = function () {
        return this.battleShipService.whoWillTurn === "computer";
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_battle_ship_service__WEBPACK_IMPORTED_MODULE_1__["BattleShipService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-field [player]=\"player\"></app-field>\r\n<app-display [player]=\"player\"></app-display>"

/***/ }),

/***/ "./src/app/player/player.component.scss":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "player", void 0);
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/ship/ship.component.html":
/*!******************************************!*\
  !*** ./src/app/ship/ship.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ship\" [ngClass]=\"{ ship_explosed:shipInfo.explosed }\">\r\n  <div *ngFor=\"let part of length\" class=\"ship__part\" [ngClass]=\"{'ship__part_equel-ship': length.length === 1}\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/ship/ship.component.scss":
/*!******************************************!*\
  !*** ./src/app/ship/ship.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ship {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  .ship__part {\n    width: 20px;\n    height: 20px;\n    margin-bottom: 10px;\n    background: #acaaaa; }\n  .ship__part:first-child {\n      border-radius: 5px 0 0 5px; }\n  .ship__part:last-child {\n      border-radius: 0 5px 5px 0; }\n  .ship__part_equel-ship:first-child {\n      border-radius: 5px; }\n  .ship_explosed > .ship__part {\n    background: #880e0e; }\n  @media (max-width: 576px) {\n  .ship__part {\n    width: 15px;\n    height: 15px; } }\n"

/***/ }),

/***/ "./src/app/ship/ship.component.ts":
/*!****************************************!*\
  !*** ./src/app/ship/ship.component.ts ***!
  \****************************************/
/*! exports provided: ShipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipComponent", function() { return ShipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShipComponent = /** @class */ (function () {
    function ShipComponent() {
    }
    ShipComponent.prototype.ngOnInit = function () {
        this.length = new Array(this.shipInfo.length);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShipComponent.prototype, "shipInfo", void 0);
    ShipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ship',
            template: __webpack_require__(/*! ./ship.component.html */ "./src/app/ship/ship.component.html"),
            styles: [__webpack_require__(/*! ./ship.component.scss */ "./src/app/ship/ship.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShipComponent);
    return ShipComponent;
}());



/***/ }),

/***/ "./src/app/ships/ships.component.html":
/*!********************************************!*\
  !*** ./src/app/ships/ships.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ship *ngFor=\"let ship of ships\" [shipInfo]=\"ship\"></app-ship>\r\n"

/***/ }),

/***/ "./src/app/ships/ships.component.scss":
/*!********************************************!*\
  !*** ./src/app/ships/ships.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ships/ships.component.ts":
/*!******************************************!*\
  !*** ./src/app/ships/ships.component.ts ***!
  \******************************************/
/*! exports provided: ShipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsComponent", function() { return ShipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _battle_ship_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../battle-ship.service */ "./src/app/battle-ship.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShipsComponent = /** @class */ (function () {
    function ShipsComponent(battleShipService) {
        this.battleShipService = battleShipService;
    }
    ShipsComponent.prototype.ngOnInit = function () {
        this.ships = (this.player === 'me') ? this.battleShipService.myField.ships : this.battleShipService.enemyField.ships;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShipsComponent.prototype, "player", void 0);
    ShipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ships',
            template: __webpack_require__(/*! ./ships.component.html */ "./src/app/ships/ships.component.html"),
            styles: [__webpack_require__(/*! ./ships.component.scss */ "./src/app/ships/ships.component.scss")]
        }),
        __metadata("design:paramtypes", [_battle_ship_service__WEBPACK_IMPORTED_MODULE_1__["BattleShipService"]])
    ], ShipsComponent);
    return ShipsComponent;
}());



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        this.ws = new WebSocket("ws://localhost:5000");
        this.events = {};
    }
    WebsocketService.prototype.on = function (event, func) {
        this.events[event] = func;
        var events = this.events;
        this.ws.onmessage = function (e) {
            var data = JSON.parse(e.data);
            for (var key in events) {
                if (data.event === key)
                    events[key](data.data);
            }
        }.bind(this.ws);
    };
    WebsocketService.prototype.send = function (event, object) {
        var output = Object.assign({ event: event }, { data: object });
        this.ws.send(JSON.stringify(output));
    };
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


// import { environment } from './environments/environment';
// if (environment.production) {
// enableProdMode();
// }
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\levpa\Documents\projects\battle-ship\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map