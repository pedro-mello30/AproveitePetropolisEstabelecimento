(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estabelecimento-estabelecimento-module"],{

/***/ "0gtV":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estabelecimento/estabelecimento.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>estabelecimentos</ion-title>\n    <ion-buttons class=\"adicionar-button\" routerLink=\"/estabelecimento/adicionar\" slot=\"end\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item *ngFor=\"let estabelecimento of estabelecimentos | async\">\n          <ion-thumbnail slot=\"start\">\n            <img *ngIf=\"estabelecimento.logo\" src=\"{{estabelecimento.logo}}\">\n            <img *ngIf=\"!estabelecimento.logo\" src=\"assets/no_image.jpg\">\n          </ion-thumbnail>\n          <ion-label>\n            <h2>{{estabelecimento.nome}}</h2>\n            <h3>{{ estabelecimento.categoriaNome }} - {{ estabelecimento.subcategoriaNome }}</h3>\n          </ion-label>\n          <ion-button slot=\"end\" color=\"primary\" (click)=\"gerenciarEstabelecimento(estabelecimento.key)\">\n            <ion-icon name=\"analytics-outline\"></ion-icon>\n             Gerenciar\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "I3+h":
/*!*********************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimento.page.ts ***!
  \*********************************************************/
/*! exports provided: EstabelecimentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentoPage", function() { return EstabelecimentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estabelecimento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estabelecimento.page.html */ "0gtV");
/* harmony import */ var _estabelecimento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estabelecimento.page.scss */ "QzQY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/estabelecimento.service */ "uNXI");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/toast.service */ "Olgc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let EstabelecimentoPage = class EstabelecimentoPage {
    constructor(estabelecimentoService, router, toast) {
        this.estabelecimentoService = estabelecimentoService;
        this.router = router;
        this.toast = toast;
    }
    ngOnInit() {
        this.estabelecimentos = this.estabelecimentoService.getAll();
    }
    gerenciarEstabelecimento(estabelecimentoKey) {
        this.estabelecimentoService.setEstalebelicimentoKey(estabelecimentoKey);
        this.router.navigate(['/tabs/home']);
    }
};
EstabelecimentoPage.ctorParameters = () => [
    { type: _shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_4__["EstabelecimentoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
EstabelecimentoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-estabelecimento',
        template: _raw_loader_estabelecimento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estabelecimento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EstabelecimentoPage);



/***/ }),

/***/ "Olgc":
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showSuccess(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // //forma sem o async
            // return this.toast.create({
            //   message: message,
            //   duration: 2000;
            //   color: 'success',
            //   position: 'bottom'
            // }).then(toastResult => {
            //   toastResult.present();
            // });
            const toastResult = yield this.toast.create({
                message: message,
                duration: 2000,
                color: 'success',
                position: 'bottom'
            });
            toastResult.present();
        });
    }
    showError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toastResult = yield this.toast.create({
                message: message,
                duration: 2000,
                color: 'danger',
                position: 'bottom'
            });
            toastResult.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "QzQY":
/*!***********************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimento.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".adicionar-button {\n  margin-top: 50px;\n  padding: 15px;\n  color: #f2f2f2;\n}\n\nion-item {\n  --background: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzdGFiZWxlY2ltZW50by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImVzdGFiZWxlY2ltZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRpY2lvbmFyLWJ1dHRvbntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmMmYyZjI7XG59XG5cbmlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4iXX0= */");

/***/ }),

/***/ "Xr8j":
/*!***********************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimento.module.ts ***!
  \***********************************************************/
/*! exports provided: EstabelecimentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentoPageModule", function() { return EstabelecimentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _estabelecimento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estabelecimento-routing.module */ "YxcS");
/* harmony import */ var _estabelecimento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estabelecimento.page */ "I3+h");







let EstabelecimentoPageModule = class EstabelecimentoPageModule {
};
EstabelecimentoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _estabelecimento_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstabelecimentoPageRoutingModule"]
        ],
        declarations: [_estabelecimento_page__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentoPage"]]
    })
], EstabelecimentoPageModule);



/***/ }),

/***/ "YxcS":
/*!*******************************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimento-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EstabelecimentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentoPageRoutingModule", function() { return EstabelecimentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estabelecimento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estabelecimento.page */ "I3+h");




const routes = [
    {
        path: '',
        component: _estabelecimento_page__WEBPACK_IMPORTED_MODULE_3__["EstabelecimentoPage"]
    },
    {
        path: 'adicionar',
        loadChildren: () => __webpack_require__.e(/*! import() | estabelecimentos-form-estabelecimentos-form-module */ "default~estabelecimento-estabelecimentos-form-estabelecimentos-form-module~estabelecimentos-form-est~825c94d4").then(__webpack_require__.bind(null, /*! ./estabelecimentos-form/estabelecimentos-form.module */ "SzLe")).then(m => m.EstabelecimentosFormPageModule)
    },
];
let EstabelecimentoPageRoutingModule = class EstabelecimentoPageRoutingModule {
};
EstabelecimentoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstabelecimentoPageRoutingModule);



/***/ }),

/***/ "uNXI":
/*!*******************************************************************!*\
  !*** ./src/app/estabelecimento/shared/estabelecimento.service.ts ***!
  \*******************************************************************/
/*! exports provided: EstabelecimentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentoService", function() { return EstabelecimentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/firebase-path */ "Fpbh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../login/shared/usuario-auth.service */ "E+93");







let EstabelecimentoService = class EstabelecimentoService {
    constructor(db, storage, usuarioService) {
        this.db = db;
        this.storage = storage;
        this.usuarioService = usuarioService;
        console.log(this.usuarioService.getUser());
        const user = this.usuarioService.getUser();
        console.log(user);
        // this.proprietariosUid = user.uid;
        // this.proprietariosEmail = user.email;
        this.loadUser();
    }
    loadUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = this.usuarioService.getUser();
            this.proprietariosUid = user.uid;
            this.proprietariosEmail = user.email;
        });
    }
    getAll() {
        // return this.estabelecimentosRef.snapshotChanges().pipe(
        //   map(changes => {
        //     return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
        //   })
        // );
        const estabelecimentosRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].ESTABELECIMENTOS, query => query
            .orderByChild('proprietariosUid')
            .equalTo(this.proprietariosUid));
        return estabelecimentosRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    getByKey(key) {
        const path = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].ESTABELECIMENTOS}${key}`;
        return this.db.object(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(change => {
            return Object.assign({ key: change.payload.key }, change.payload.val());
        }));
    }
    setEstalebelicimentoKey(token) {
        localStorage.setItem('estabelecimentoKey', token);
    }
    removeEstalebelicimentoKey() {
        localStorage.removeItem('estabelecimentoKey');
    }
    getEstalebelicimentoKey() {
        return localStorage.getItem('estabelecimentoKey');
    }
};
EstabelecimentoService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioAuthService"] }
];
EstabelecimentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EstabelecimentoService);



/***/ })

}]);
//# sourceMappingURL=estabelecimento-estabelecimento-module.js.map