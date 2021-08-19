(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{estabelecimento?.nome}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"visitas-card\">\n          <p>Visitas na Página</p>\n          <p class=\"numero\" *ngIf=\"estabelecimento\">{{estabelecimento.visitas}} <span>Visitas</span></p>\n<!--          <p class=\"numero\" *ngIf=\"!estabelecimento.visitas\"><span>Esta página ainda não possui nenhuma visita.</span></p>-->\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <app-validacao-cupom></app-validacao-cupom>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _cupons_cupons_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cupons/cupons.module */ "iEC3");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _cupons_cupons_module__WEBPACK_IMPORTED_MODULE_7__["CuponsPageModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".visitas-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\np {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\n.numero {\n  text-align: center;\n  font-size: 77px;\n  color: #bea063;\n  font-weight: medium;\n  margin: 25px 0px;\n}\n\n.numero span {\n  font-size: 11px;\n  color: #7c7b7b;\n  font-weight: normal;\n}\n\n.cupom-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.adicionar-button {\n  margin-top: 50px;\n  padding: 15px;\n  color: #f2f2f2;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\np {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\nion-input {\n  border: 1px solid #b3b3b3;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 5px 15px !important;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSUo7O0FBS0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQUZGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQURGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlzaXRhcy1jYXJke1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLDAsMCwwLjI5KTtcbn1cbnB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgY29sb3I6ICM3YzdiN2I7XG59XG4ubnVtZXJve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzdweDtcbiAgY29sb3I6ICNiZWEwNjM7XG4gIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gIG1hcmdpbjogMjVweCAwcHg7XG4gIHNwYW57XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjN2M3YjdiO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuXG5cblxuXG4vL2N1cG9tXG4uY3Vwb20tY2FyZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG59XG4uYWRpY2lvbmFyLWJ1dHRvbntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmMmYyZjI7XG59XG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxucHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbWVkaXVtO1xuICBjb2xvcjogIzdjN2I3Yjtcbn1cblxuaW9uLWlucHV0e1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjNiM2IzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4IWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../estabelecimento/shared/estabelecimento.service */ "uNXI");





let HomePage = class HomePage {
    constructor(estabelecimentoService) {
        this.estabelecimentoService = estabelecimentoService;
    }
    ngOnInit() {
        this.carregarDados();
        this.load();
    }
    carregarDados() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const key = this.estabelecimentoService.getEstalebelicimentoKey();
            const estabelecimentoSub = yield this.estabelecimentoService.getByKey(key).subscribe((estabelecimento) => {
                estabelecimentoSub.unsubscribe();
                this.estabelecimento = estabelecimento;
            });
        });
    }
    load() {
        //Session storage salva os dados como string
        (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
        sessionStorage.refresh = false;
    }
    doRefresh(event) {
        location.reload();
        // this.ngOnInit();
        // setTimeout(() => {
        //   // console.log('Async operation has ended');
        //   event.target.complete();
        // }, 2000);
    }
};
HomePage.ctorParameters = () => [
    { type: _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_4__["EstabelecimentoService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map