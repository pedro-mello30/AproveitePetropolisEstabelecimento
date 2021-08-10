(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipe-equipe-module"],{

/***/ "5RU7":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equipe/equipe.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>equipe</ion-title>\n    <ion-back-button slot=\"start\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <div class=\"equipe-card\">\n      <ion-row>\n        <ion-col>\n            <p>Adicionar Membro</p>\n            <form class=\"form-edit\">\n              <ion-input type=\"email\" placeholder=\"E-mail\"></ion-input>\n            </form>\n            <ion-col size=\"8\" offset=\"2\">\n              <ion-button expand=\"block\">\n                Adicionar Membro\n              </ion-button>\n            </ion-col>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-list-header>Membros</ion-list-header>\n            <ion-item class=\"ion-no-padding\">\n              membro@membro.com\n              <ion-button class=\"delete-btn\" slot=\"end\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "GBke":
/*!*************************************************!*\
  !*** ./src/app/equipe/equipe-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EquipePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipePageRoutingModule", function() { return EquipePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _equipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipe.page */ "cj6c");




const routes = [
    {
        path: '',
        component: _equipe_page__WEBPACK_IMPORTED_MODULE_3__["EquipePage"]
    }
];
let EquipePageRoutingModule = class EquipePageRoutingModule {
};
EquipePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EquipePageRoutingModule);



/***/ }),

/***/ "cTod":
/*!*****************************************!*\
  !*** ./src/app/equipe/equipe.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".equipe-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.adicionar-button {\n  margin-top: 50px;\n  padding: 15px;\n  color: #f2f2f2;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\np, ion-list-header {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\nion-input {\n  border: 1px solid #b3b3b3;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 5px 15px !important;\n  font-size: 14px;\n}\n\nion-list, ion-item, ion-list-header {\n  padding-left: 0px;\n}\n\nion-list {\n  border-top: 1px solid #b3b3b3;\n}\n\n.delete-btn {\n  --background: transparent;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VxdWlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUlGOztBQURBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsNkJBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFJRiIsImZpbGUiOiJlcXVpcGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVxdWlwZS1jYXJke1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLDAsMCwwLjI5KTtcbn1cbi5hZGljaW9uYXItYnV0dG9ue1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogI2YyZjJmMjtcbn1cbmlvbi1idXR0b257XG4gIC0tYm9yZGVyLXJhZGl1czogMzVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5wLCBpb24tbGlzdC1oZWFkZXJ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgY29sb3I6ICM3YzdiN2I7XG59XG5cbmlvbi1pbnB1dHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTVweCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWxpc3QsIGlvbi1pdGVtLCBpb24tbGlzdC1oZWFkZXJ7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tbGlzdHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiM2IzYjM7XG59XG5cbi5kZWxldGUtYnRue1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "cj6c":
/*!***************************************!*\
  !*** ./src/app/equipe/equipe.page.ts ***!
  \***************************************/
/*! exports provided: EquipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipePage", function() { return EquipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_equipe_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./equipe.page.html */ "5RU7");
/* harmony import */ var _equipe_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipe.page.scss */ "cTod");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EquipePage = class EquipePage {
    constructor() { }
    ngOnInit() {
    }
};
EquipePage.ctorParameters = () => [];
EquipePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-equipe',
        template: _raw_loader_equipe_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_equipe_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EquipePage);



/***/ }),

/***/ "hzO+":
/*!*****************************************!*\
  !*** ./src/app/equipe/equipe.module.ts ***!
  \*****************************************/
/*! exports provided: EquipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipePageModule", function() { return EquipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _equipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipe-routing.module */ "GBke");
/* harmony import */ var _equipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipe.page */ "cj6c");







let EquipePageModule = class EquipePageModule {
};
EquipePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _equipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipePageRoutingModule"]
        ],
        declarations: [_equipe_page__WEBPACK_IMPORTED_MODULE_6__["EquipePage"]]
    })
], EquipePageModule);



/***/ })

}]);
//# sourceMappingURL=equipe-equipe-module.js.map