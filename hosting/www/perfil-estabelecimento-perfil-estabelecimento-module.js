(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-estabelecimento-perfil-estabelecimento-module"],{

/***/ "+gha":
/*!*********************************************************************************!*\
  !*** ./src/app/perfil-estabelecimento/perfil-estabelecimento-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PerfilEstabelecimentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilEstabelecimentoPageRoutingModule", function() { return PerfilEstabelecimentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _perfil_estabelecimento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-estabelecimento.page */ "yzP7");




const routes = [
    {
        path: '',
        component: _perfil_estabelecimento_page__WEBPACK_IMPORTED_MODULE_3__["PerfilEstabelecimentoPage"]
    }
];
let PerfilEstabelecimentoPageRoutingModule = class PerfilEstabelecimentoPageRoutingModule {
};
PerfilEstabelecimentoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilEstabelecimentoPageRoutingModule);



/***/ }),

/***/ "8Qjl":
/*!*************************************************************************!*\
  !*** ./src/app/perfil-estabelecimento/perfil-estabelecimento.module.ts ***!
  \*************************************************************************/
/*! exports provided: PerfilEstabelecimentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilEstabelecimentoPageModule", function() { return PerfilEstabelecimentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_estabelecimento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-estabelecimento-routing.module */ "+gha");
/* harmony import */ var _perfil_estabelecimento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-estabelecimento.page */ "yzP7");







let PerfilEstabelecimentoPageModule = class PerfilEstabelecimentoPageModule {
};
PerfilEstabelecimentoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_estabelecimento_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilEstabelecimentoPageRoutingModule"]
        ],
        declarations: [_perfil_estabelecimento_page__WEBPACK_IMPORTED_MODULE_6__["PerfilEstabelecimentoPage"]]
    })
], PerfilEstabelecimentoPageModule);



/***/ }),

/***/ "Ppiz":
/*!*************************************************************************!*\
  !*** ./src/app/perfil-estabelecimento/perfil-estabelecimento.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".perfil-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.perfil-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100px;\n}\n\n.perfil-avatar ion-avatar {\n  height: 80px;\n  width: 80px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.perfil-avatar p {\n  text-align: center;\n  font-size: 12px;\n  color: #bea063;\n  margin-top: 15px;\n}\n\n.perfil-list-links {\n  margin-top: 50px;\n}\n\n.perfil-list-links .subtitle {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\n.perfil-list-links ion-button {\n  --background: none;\n  --color: #7c7b7b;\n  --color-activated: #f2f2f2;\n  border-bottom: 1px solid #b3b3b3;\n  --border-radius: 0px;\n}\n\n.perfil-list-links ion-button span {\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  font-size: 14px;\n  text-align: left;\n  width: 100%;\n}\n\n.estabelecimento-list {\n  margin-top: 25px;\n}\n\n.logout-list {\n  margin-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BlcmZpbC1lc3RhYmVsZWNpbWVudG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUFBRjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFDSTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ047O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRiIsImZpbGUiOiJwZXJmaWwtZXN0YWJlbGVjaW1lbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBlcmZpbC1jYXJke1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLDAsMCwwLjI5KTtcbn1cblxuXG4ucGVyZmlsLWF2YXRhcntcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMHB4O1xuICBpb24tYXZhdGFye1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYmVhMDYzO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbn1cblxuLnBlcmZpbC1saXN0LWxpbmtze1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICAuc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gICAgY29sb3I6ICM3YzdiN2JcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAtLWNvbG9yOiAjN2M3YjdiO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZjJmMmYyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjNiM2IzO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHNwYW57XG4gICAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICB9XG59XG4uZXN0YWJlbGVjaW1lbnRvLWxpc3R7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubG9nb3V0LWxpc3R7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "bSD8":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil-estabelecimento/perfil-estabelecimento.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"perfil-card\">\n          <div class=\"perfil-avatar\">\n            <ion-avatar>\n              <img src=\"assets/Untitled.png\">\n            </ion-avatar>\n            <p class=\"ion-no-margin\">Fulano da Jabulani</p>\n          </div>\n\n\n          <div class=\"perfil-list-links\">\n            <h5 class=\"subtitle\">Configurações da conta</h5>\n            <ion-button expand=\"block\" routerLink=\"/tabs/perfil/editar\">\n              <span>\n                Informações Pessoais\n              </span>\n              <ion-icon slot=\"end\"  name=\"person-outline\"></ion-icon>\n            </ion-button>\n            <ion-button expand=\"block\">\n              <span>\n                Senha\n              </span>\n              <ion-icon slot=\"end\"  name=\"lock-closed-outline\"></ion-icon>\n            </ion-button>\n            <ion-button expand=\"block\">\n              <span>\n                Navegar\n              </span>\n              <ion-icon name=\"grid-outline\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div class=\"perfil-list-links estabelecimento-list\">\n            <h5 class=\"subtitle\">Estabelecimento</h5>\n            <ion-button expand=\"block\" routerLink=\"/cadastro\">\n              <span>\n                Informações do Estabelecimento\n              </span>\n              <ion-icon slot=\"end\"  name=\"storefront-outline\"></ion-icon>\n            </ion-button>\n            <ion-button expand=\"block\" routerLink=\"/tabs/equipe\">\n              <span>\n                Equipe\n              </span>\n              <ion-icon name=\"people-outline\"></ion-icon>\n            </ion-button>\n\n          </div>\n\n          <div class=\"perfil-list-links logout-list\">\n            <!--            <h5 class=\"subtitle\">Estabelecimento</h5>-->\n            <ion-button expand=\"block\" routerLink=\"/login\">\n              <span>\n                Sair\n              </span>\n              <ion-icon slot=\"end\"  name=\"log-out-outline\"></ion-icon>\n            </ion-button>\n\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "yzP7":
/*!***********************************************************************!*\
  !*** ./src/app/perfil-estabelecimento/perfil-estabelecimento.page.ts ***!
  \***********************************************************************/
/*! exports provided: PerfilEstabelecimentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilEstabelecimentoPage", function() { return PerfilEstabelecimentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_estabelecimento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil-estabelecimento.page.html */ "bSD8");
/* harmony import */ var _perfil_estabelecimento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil-estabelecimento.page.scss */ "Ppiz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PerfilEstabelecimentoPage = class PerfilEstabelecimentoPage {
    constructor() { }
    ngOnInit() {
    }
};
PerfilEstabelecimentoPage.ctorParameters = () => [];
PerfilEstabelecimentoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil-estabelecimento',
        template: _raw_loader_perfil_estabelecimento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_estabelecimento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilEstabelecimentoPage);



/***/ })

}]);
//# sourceMappingURL=perfil-estabelecimento-perfil-estabelecimento-module.js.map