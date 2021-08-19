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
/* harmony default export */ __webpack_exports__["default"] = (".perfil-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.perfil-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100px;\n}\n\n.perfil-avatar ion-avatar {\n  height: 80px;\n  width: 80px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.perfil-avatar p {\n  text-align: center;\n  font-size: 12px;\n  color: #bea063;\n  margin-top: 15px;\n}\n\n.perfil-list-links {\n  margin-top: 50px;\n}\n\n.perfil-list-links .subtitle {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\n.perfil-list-links ion-button {\n  --background: none;\n  --color: #7c7b7b;\n  --color-activated: #f2f2f2;\n  border-bottom: 1px solid #b3b3b3;\n  --border-radius: 0px;\n}\n\n.perfil-list-links ion-button span {\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  font-size: 14px;\n  text-align: left;\n  width: 100%;\n}\n\n.estabelecimento-list {\n  margin-top: 25px;\n}\n\n.logout-list {\n  margin-top: 80px;\n}\n\ninput[type=file] {\n  display: none;\n}\n\nion-button {\n  --box-shadow: none;\n}\n\n.md ion-button {\n  --background-activated: #d6b46a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BlcmZpbC1lc3RhYmVsZWNpbWVudG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUFBRjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFDSTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ047O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtBQURGIiwiZmlsZSI6InBlcmZpbC1lc3RhYmVsZWNpbWVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucGVyZmlsLWNhcmR7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xufVxuXG5cbi5wZXJmaWwtYXZhdGFye1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwcHg7XG4gIGlvbi1hdmF0YXJ7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNiZWEwNjM7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxufVxuXG4ucGVyZmlsLWxpc3QtbGlua3N7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIC5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgICBjb2xvcjogIzdjN2I3YlxuICB9XG4gIGlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIC0tY29sb3I6ICM3YzdiN2I7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmMmYyZjI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiM2IzYjM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgc3BhbntcbiAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gIH1cbn1cbi5lc3RhYmVsZWNpbWVudG8tbGlzdHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5sb2dvdXQtbGlzdHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuXG5pbnB1dFt0eXBlPWZpbGVde1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tYnV0dG9ue1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tZCBpb24tYnV0dG9ue1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDZiNDZhO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "bSD8":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil-estabelecimento/perfil-estabelecimento.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"perfil-card\">\n          <div class=\"perfil-avatar\">\n            <ion-avatar (click)=\"imagemInput.click()\">\n              <img *ngIf=\"usuario.photoUrl\" src=\"{{usuario.photoUrl}}\">\n              <img *ngIf=\"!usuario.photoUrl\" src=\"assets/no_profile.png\">\n            </ion-avatar>\n            <input type=\"file\" #imagemInput (change)=\"uploadImg($event)\">\n            <p class=\"ion-no-margin\">{{usuario.name}}</p>\n          </div>\n\n          <div class=\"perfil-list-links\">\n            <h5 class=\"subtitle\">Configurações da conta</h5>\n            <ion-button expand=\"block\" routerLink=\"/tabs/perfil/editar\">\n              <span>\n                Informações Pessoais\n              </span>\n              <ion-icon slot=\"end\"  name=\"person-outline\"></ion-icon>\n            </ion-button>\n<!--            <ion-button expand=\"block\">-->\n<!--              <span>-->\n<!--                Senha-->\n<!--              </span>-->\n<!--              <ion-icon slot=\"end\"  name=\"lock-closed-outline\"></ion-icon>-->\n<!--            </ion-button>-->\n          </div>\n\n          <div class=\"perfil-list-links estabelecimento-list\">\n            <h5 class=\"subtitle\">Estabelecimento</h5>\n            <ion-button expand=\"block\" [routerLink]=\"['/tabs/estabelecimento/editar/', estabelecimentoKey]\">\n              <span>\n                Informações do Estabelecimento\n              </span>\n              <ion-icon slot=\"end\"  name=\"storefront-outline\"></ion-icon>\n            </ion-button>\n<!--            <ion-button expand=\"block\" routerLink=\"/tabs/equipe\">-->\n<!--              <span>-->\n<!--                Equipe-->\n<!--              </span>-->\n<!--              <ion-icon name=\"people-outline\"></ion-icon>-->\n<!--            </ion-button>-->\n            <ion-button expand=\"block\" (click)=\"redirectMeusEstab()\">\n              <span>\n                Meus Estabelecimentos\n              </span>\n              <ion-icon name=\"grid-outline\"></ion-icon>\n            </ion-button>\n\n\n          </div>\n\n          <div class=\"perfil-list-links logout-list\">\n            <!--            <h5 class=\"subtitle\">Estabelecimento</h5>-->\n            <ion-button expand=\"block\" routerLink=\"/login\" (click)=\"logout()\">\n              <span>\n                Sair\n              </span>\n              <ion-icon slot=\"end\"  name=\"log-out-outline\"></ion-icon>\n            </ion-button>\n\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

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
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/shared/usuario-auth.service */ "E+93");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../estabelecimento/shared/estabelecimento.service */ "uNXI");







let PerfilEstabelecimentoPage = class PerfilEstabelecimentoPage {
    constructor(usuarioAuthService, estabelecimentoService, router) {
        this.usuarioAuthService = usuarioAuthService;
        this.estabelecimentoService = estabelecimentoService;
        this.router = router;
    }
    ngOnInit() {
        this.usuario = this.usuarioAuthService.getUser();
        this.estabelecimentoKey = this.estabelecimentoService.getEstalebelicimentoKey();
        console.log(this.usuario);
    }
    uploadImg(event) {
        if (event.target.files.length) {
            this.usuarioAuthService.uploadImg(event.target.files[0]);
            const reader = new FileReader();
            reader.onload = () => {
                this.usuario.photoUrl = reader.result.toString();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    doRefresh(event) {
        location.reload();
        // this.ngOnInit();
        // setTimeout(() => {
        //   // console.log('Async operation has ended');
        //   event.target.complete();
        // }, 2000);
    }
    redirectMeusEstab() {
        this.estabelecimentoService.setEstalebelicimentoKey('');
        this.router.navigate(['/estabelecimento']);
    }
    logout() {
        this.usuarioAuthService.logout()
            .then(() => {
            this.router.navigate(['/login']);
        });
    }
};
PerfilEstabelecimentoPage.ctorParameters = () => [
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioAuthService"] },
    { type: _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
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