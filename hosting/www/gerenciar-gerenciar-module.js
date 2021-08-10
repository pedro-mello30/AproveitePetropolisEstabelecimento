(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gerenciar-gerenciar-module"],{

/***/ "/mw/":
/*!**************************************************************!*\
  !*** ./src/app/cupons/gerenciar/gerenciar-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: GerenciarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerenciarPageRoutingModule", function() { return GerenciarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gerenciar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gerenciar.page */ "r58h");




const routes = [
    {
        path: '',
        component: _gerenciar_page__WEBPACK_IMPORTED_MODULE_3__["GerenciarPage"]
    }
];
let GerenciarPageRoutingModule = class GerenciarPageRoutingModule {
};
GerenciarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GerenciarPageRoutingModule);



/***/ }),

/***/ "LABM":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cupons/gerenciar/gerenciar.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>gerenciar</ion-title>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-buttons class=\"menu-button\"  slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical-sharp\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"gerenciar-card\">\n          <p>Cupom</p>\n          <ion-toggle checked slot=\"end\"></ion-toggle>\n          <ion-thumbnail slot=\"start\" [routerLink]=\"['feed/:idCategoria']\">\n            <img src=\"assets/Untitled.png\">\n          </ion-thumbnail>\n          <form class=\"form-edit\">\n            <ion-input type=\"email\" placeholder=\"Nome\"></ion-input>\n            <ion-textarea rows=\"6\" placeholder=\"Descrição\"></ion-textarea>\n          </form>\n          <ion-col size=\"8\" offset=\"2\">\n            <ion-button expand=\"block\">\n              Adicionar\n            </ion-button>\n          </ion-col>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "U5Fk":
/*!******************************************************!*\
  !*** ./src/app/cupons/gerenciar/gerenciar.module.ts ***!
  \******************************************************/
/*! exports provided: GerenciarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerenciarPageModule", function() { return GerenciarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _gerenciar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gerenciar-routing.module */ "/mw/");
/* harmony import */ var _gerenciar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gerenciar.page */ "r58h");







let GerenciarPageModule = class GerenciarPageModule {
};
GerenciarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gerenciar_routing_module__WEBPACK_IMPORTED_MODULE_5__["GerenciarPageRoutingModule"]
        ],
        declarations: [_gerenciar_page__WEBPACK_IMPORTED_MODULE_6__["GerenciarPage"]]
    })
], GerenciarPageModule);



/***/ }),

/***/ "mpb9":
/*!******************************************************!*\
  !*** ./src/app/cupons/gerenciar/gerenciar.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-button {\n  margin-top: 50px;\n  padding: 15px;\n  color: #f2f2f2;\n}\n\n.gerenciar-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\nion-toggle {\n  position: absolute;\n  right: 15px;\n  top: 25px;\n}\n\nion-thumbnail {\n  width: 100%;\n  height: 160px;\n  --border-radius: 5px;\n  margin-top: 20px;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\np {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\nion-input, ion-textarea {\n  border: 1px solid #b3b3b3;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 5px 15px !important;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dlcmVuY2lhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFHRiIsImZpbGUiOiJnZXJlbmNpYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYnV0dG9ue1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogI2YyZjJmMjtcbn1cbi5nZXJlbmNpYXItY2FyZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG59XG5cbmlvbi10b2dnbGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMjVweDtcblxufVxuaW9uLXRodW1ibmFpbHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTYwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG59XG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxucHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbWVkaXVtO1xuICBjb2xvcjogIzdjN2I3Yjtcbn1cblxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogNXB4IDE1cHghaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "r58h":
/*!****************************************************!*\
  !*** ./src/app/cupons/gerenciar/gerenciar.page.ts ***!
  \****************************************************/
/*! exports provided: GerenciarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerenciarPage", function() { return GerenciarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gerenciar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gerenciar.page.html */ "LABM");
/* harmony import */ var _gerenciar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gerenciar.page.scss */ "mpb9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GerenciarPage = class GerenciarPage {
    constructor() { }
    ngOnInit() {
    }
};
GerenciarPage.ctorParameters = () => [];
GerenciarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gerenciar',
        template: _raw_loader_gerenciar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gerenciar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GerenciarPage);



/***/ })

}]);
//# sourceMappingURL=gerenciar-gerenciar-module.js.map