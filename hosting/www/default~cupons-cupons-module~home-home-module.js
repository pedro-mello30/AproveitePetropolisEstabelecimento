(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cupons-cupons-module~home-home-module"],{

/***/ "4Yb6":
/*!***************************************!*\
  !*** ./src/app/cupons/cupons.page.ts ***!
  \***************************************/
/*! exports provided: CuponsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponsPage", function() { return CuponsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cupons_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cupons.page.html */ "EcaX");
/* harmony import */ var _cupons_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cupons.page.scss */ "YC/K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_cupons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/cupons.service */ "O0cC");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/toast.service */ "Olgc");
/* harmony import */ var _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../estabelecimento/shared/estabelecimento.service */ "uNXI");







let CuponsPage = class CuponsPage {
    constructor(estabelecimentoService, cuponsService, toast) {
        this.estabelecimentoService = estabelecimentoService;
        this.cuponsService = cuponsService;
        this.toast = toast;
    }
    ngOnInit() {
        this.estabelecimentoKey = this.estabelecimentoService.getEstalebelicimentoKey();
        const cuponsSub = this.cuponsService.getByField('estabelecimentoKey', this.estabelecimentoKey).subscribe((cupons) => {
            cuponsSub.unsubscribe();
            this.cupons = cupons;
        });
    }
};
CuponsPage.ctorParameters = () => [
    { type: _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentoService"] },
    { type: _shared_cupons_service__WEBPACK_IMPORTED_MODULE_4__["CupomService"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
CuponsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cupons',
        template: _raw_loader_cupons_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cupons_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CuponsPage);



/***/ }),

/***/ "EcaX":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cupons/cupons.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>cupons</ion-title>\n    <ion-buttons class=\"adicionar-button\" routerLink=\"/tabs/cupons/adicionar\" slot=\"end\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-validacao-cupom></app-validacao-cupom>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5 class=\"title ion-margin-bottom\">Cupons</h5>\n        <div class=\"cupom-list\">\n<!--          <p *ngIf=\"cupons.length === 0\">Não existe cupom cadastrado</p>-->\n          <div class=\"cupom-item\" *ngFor=\"let cupom of cupons\">\n            <ion-thumbnail slot=\"start\">\n              <img *ngIf=\"cupom.imagem\" src=\"{{cupom.imagem}}\">\n              <img *ngIf=\"!cupom.imagem\" src=\"assets/no_image.jpg\">\n            </ion-thumbnail>\n            <div class=\"content\">\n              <ion-row>\n                <p class=\"title\">{{cupom.nome}}</p>\n                <a class=\"cupomLink ion-float-right\" [routerLink]=\"['adicionar', cupom.key]\">Gerenciar</a>\n              </ion-row>\n              <ion-row>\n                <span *ngIf=\"cupom.status\" class=\"ativo\"></span>\n                <p *ngIf=\"cupom.status\" class=\"tags\">Ativo</p>\n\n                <span *ngIf=\"cupom.status == 0\" class=\"desativado\"></span>\n                <p *ngIf=\"cupom.status == 0\" class=\"tags\">Desativado</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"description\">{{cupom.descricao}}</p>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "IZy+":
/*!***********************************************************************!*\
  !*** ./src/app/cupons/validacao-cupom/validacao-cupom.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cupom-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.adicionar-button {\n  margin-top: 50px;\n  padding: 15px;\n  color: #f2f2f2;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\np {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\nion-input {\n  border: 1px solid #b3b3b3;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 5px 15px !important;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhbGlkYWNhby1jdXBvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFJRiIsImZpbGUiOiJ2YWxpZGFjYW8tY3Vwb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vwb20tY2FyZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG59XG4uYWRpY2lvbmFyLWJ1dHRvbntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmMmYyZjI7XG59XG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxucHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbWVkaXVtO1xuICBjb2xvcjogIzdjN2I3Yjtcbn1cblxuaW9uLWlucHV0e1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjNiM2IzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4IWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "O0cC":
/*!*************************************************!*\
  !*** ./src/app/cupons/shared/cupons.service.ts ***!
  \*************************************************/
/*! exports provided: CupomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CupomService", function() { return CupomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/firebase-path */ "Fpbh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let CupomService = class CupomService {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        this.cuponsRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].CUPONS);
    }
    getByKey(key) {
        const path = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].CUPONS}${key}`;
        return this.db.object(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(change => {
            return Object.assign({ key: change.payload.key }, change.payload.val());
        }));
    }
    getByField(field, value) {
        const cuponsRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].CUPONS, query => query
            .orderByChild(field)
            .equalTo(value));
        return cuponsRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    insert(cupom) {
        return new Promise(resolve => {
            this.cuponsRef.push(cupom)
                .then((result) => resolve(result.key));
        });
    }
    update(key, cupom) {
        return new Promise((resolve, reject) => {
            this.cuponsRef.update(key, cupom)
                .then(() => resolve(key))
                .catch(() => reject());
        });
    }
    remove(key) {
        return this.cuponsRef.remove(key);
    }
    uploadImg(key, file) {
        const filePath = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].CUPONS}${key}/${file.name}`;
        const ref = this.storage.ref(filePath);
        const task = ref.put(file);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            ref.getDownloadURL().subscribe((url => {
                this.cuponsRef.update(key, { imagem: url, filePath: filePath });
            }));
        })).subscribe();
    }
    removeImg(filePath, key, atualizarCupom = true) {
        const ref = this.storage.ref(filePath);
        ref.delete();
        if (atualizarCupom) {
            this.cuponsRef.update(key, { imagem: '', filePath: '' });
        }
    }
    getGeneratedByToken(estabelecimentoKey, token) {
        // const path = `${FirebasePath.CUPONS_GERADOS}${estabelecimentoKey}`;
        const path = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].CUPONS_GERADOS}`;
        const cuponsRef = this.db.list(path, query => query
            .orderByChild('token')
            .equalTo(token)
            .limitToFirst(1));
        return cuponsRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    validateCupom(estabelecimentoKey, token) {
        // const path = `${FirebasePath.CUPONS_GERADOS}${estabelecimentoKey}`;
        const path = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].CUPONS_GERADOS}`;
        const cuponsGRef = this.db.list(path);
        const sub = this.getGeneratedByToken(estabelecimentoKey, token).subscribe((cupom) => {
            sub.unsubscribe();
            const cupomUp = { status: true, token: "" };
            return new Promise((resolve, reject) => {
                cuponsGRef.update(cupom[0].key, cupomUp)
                    .then(() => resolve(cupom[0].key))
                    .catch(() => reject());
            });
        });
    }
};
CupomService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
];
CupomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CupomService);



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

/***/ "QlEu":
/*!*********************************************************************!*\
  !*** ./src/app/cupons/validacao-cupom/validacao-cupom.component.ts ***!
  \*********************************************************************/
/*! exports provided: ValidacaoCupomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidacaoCupomComponent", function() { return ValidacaoCupomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_validacao_cupom_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./validacao-cupom.component.html */ "kuqs");
/* harmony import */ var _validacao_cupom_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validacao-cupom.component.scss */ "IZy+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../estabelecimento/shared/estabelecimento.service */ "uNXI");
/* harmony import */ var _shared_cupons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/cupons.service */ "O0cC");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");








let ValidacaoCupomComponent = class ValidacaoCupomComponent {
    constructor(estabelecimentoService, cuponsService, formBuilder, toast) {
        this.estabelecimentoService = estabelecimentoService;
        this.cuponsService = cuponsService;
        this.formBuilder = formBuilder;
        this.toast = toast;
    }
    ngOnInit() {
        this.criarFormulario();
        this.estabelecimentoKey = this.estabelecimentoService.getEstalebelicimentoKey();
    }
    onSubmit() {
        const update = this.cuponsService.validateCupom(this.estabelecimentoKey, this.form.get('token').value);
        this.toast.showSuccess("Cupom válidado com sucesso.");
    }
    criarFormulario() {
        this.form = this.formBuilder.group({
            token: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
};
ValidacaoCupomComponent.ctorParameters = () => [
    { type: _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_5__["EstabelecimentoService"] },
    { type: _shared_cupons_service__WEBPACK_IMPORTED_MODULE_6__["CupomService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
ValidacaoCupomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-validacao-cupom',
        template: _raw_loader_validacao_cupom_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_validacao_cupom_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ValidacaoCupomComponent);



/***/ }),

/***/ "YC/K":
/*!*****************************************!*\
  !*** ./src/app/cupons/cupons.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cupom-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.adicionar-button {\n  margin-top: 50px;\n  padding: 15px;\n  color: #f2f2f2;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\np {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\nion-input {\n  border: 1px solid #b3b3b3;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 5px 15px !important;\n  font-size: 14px;\n}\n\n.title {\n  font-size: 14px;\n  color: #333333;\n}\n\n.cupom-list ion-card {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.cupom-list .cupom-item {\n  border-radius: 5px;\n  min-height: 80px;\n  margin-bottom: 15px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.cupom-list .cupom-item ion-thumbnail {\n  float: left;\n  height: 80px;\n  width: 120px;\n}\n\n.cupom-list .cupom-item ion-thumbnail img {\n  border-radius: 5px 0px 0px 5px;\n}\n\n.cupom-list .cupom-item p {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.cupom-list .cupom-item .content {\n  margin-left: 120px;\n  padding: 10px;\n}\n\n.cupom-list .cupom-item .content .title {\n  font-size: 14px;\n  float: left;\n  color: #333333;\n  margin-botton: 8px;\n}\n\n.cupom-list .cupom-item .content .cupomLink {\n  position: absolute;\n  right: 15px;\n  font-size: 12px;\n  color: #bea063;\n}\n\n.cupom-list .cupom-item .content .description {\n  float: left;\n  color: #bcbcbc;\n  font-size: 11px;\n  margin-top: 10px;\n}\n\n.cupom-list .cupom-item .content span {\n  width: 12px;\n  height: 12px;\n  border-radius: 10px;\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.cupom-list .cupom-item .content .tags {\n  margin-top: 5px;\n}\n\n.cupom-list .cupom-item .content .ativo {\n  background-color: green;\n}\n\n.cupom-list .cupom-item .content .desativado {\n  background-color: darkred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2N1cG9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUlGOztBQURBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBSUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFFSjs7QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVOOztBQURNO0VBQ0UsOEJBQUE7QUFHUjs7QUFBSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBRU47O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDTjs7QUFBTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVSOztBQUFNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFUjs7QUFBTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFFUjs7QUFBTTtFQUNFLGVBQUE7QUFFUjs7QUFBTTtFQUNFLHVCQUFBO0FBRVI7O0FBQU07RUFDRSx5QkFBQTtBQUVSIiwiZmlsZSI6ImN1cG9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vwb20tY2FyZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG59XG4uYWRpY2lvbmFyLWJ1dHRvbntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmMmYyZjI7XG59XG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxucHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbWVkaXVtO1xuICBjb2xvcjogIzdjN2I3Yjtcbn1cblxuaW9uLWlucHV0e1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjNiM2IzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4IWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5cbi50aXRsZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmN1cG9tLWxpc3R7XG4gIGlvbi1jYXJke1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmN1cG9tLWl0ZW17XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogIDE1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG5cbiAgICBpb24tdGh1bWJuYWlse1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgcHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIG1hcmdpbi1ib3R0b246IDhweDtcbiAgICAgIH1cbiAgICAgIC5jdXBvbUxpbmt7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNiZWEwNjM7XG4gICAgICB9XG4gICAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjb2xvcjogI2JjYmNiYztcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgICAgc3BhbntcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICAgIC50YWdze1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgICAuYXRpdm97XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgfVxuICAgICAgLmRlc2F0aXZhZG97XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "hwDU":
/*!*************************************************!*\
  !*** ./src/app/cupons/cupons-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CuponsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponsPageRoutingModule", function() { return CuponsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cupons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cupons.page */ "4Yb6");




const routes = [
    {
        path: '',
        component: _cupons_page__WEBPACK_IMPORTED_MODULE_3__["CuponsPage"]
    },
    {
        path: 'adicionar',
        loadChildren: () => __webpack_require__.e(/*! import() | adicionar-adicionar-module */ "adicionar-adicionar-module").then(__webpack_require__.bind(null, /*! ./adicionar/adicionar.module */ "gmvn")).then(m => m.AdicionarPageModule)
    },
    {
        path: 'adicionar/:key',
        loadChildren: () => __webpack_require__.e(/*! import() | adicionar-adicionar-module */ "adicionar-adicionar-module").then(__webpack_require__.bind(null, /*! ./adicionar/adicionar.module */ "gmvn")).then(m => m.AdicionarPageModule)
    },
    {
        path: 'gerenciar',
        loadChildren: () => __webpack_require__.e(/*! import() | gerenciar-gerenciar-module */ "gerenciar-gerenciar-module").then(__webpack_require__.bind(null, /*! ./gerenciar/gerenciar.module */ "U5Fk")).then(m => m.GerenciarPageModule)
    }
];
let CuponsPageRoutingModule = class CuponsPageRoutingModule {
};
CuponsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CuponsPageRoutingModule);



/***/ }),

/***/ "iEC3":
/*!*****************************************!*\
  !*** ./src/app/cupons/cupons.module.ts ***!
  \*****************************************/
/*! exports provided: CuponsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponsPageModule", function() { return CuponsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cupons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cupons-routing.module */ "hwDU");
/* harmony import */ var _cupons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cupons.page */ "4Yb6");
/* harmony import */ var _validacao_cupom_validacao_cupom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validacao-cupom/validacao-cupom.component */ "QlEu");








let CuponsPageModule = class CuponsPageModule {
};
CuponsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cupons_routing_module__WEBPACK_IMPORTED_MODULE_5__["CuponsPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_cupons_page__WEBPACK_IMPORTED_MODULE_6__["CuponsPage"], _validacao_cupom_validacao_cupom_component__WEBPACK_IMPORTED_MODULE_7__["ValidacaoCupomComponent"]],
        exports: [_validacao_cupom_validacao_cupom_component__WEBPACK_IMPORTED_MODULE_7__["ValidacaoCupomComponent"]]
    })
], CuponsPageModule);



/***/ }),

/***/ "kuqs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cupons/validacao-cupom/validacao-cupom.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cupom-card\">\n  <p>Validar Cupom</p>\n  <form [formGroup]=\"form\" class=\"form-edit\" (ngSubmit)=\"onSubmit()\">\n    <ion-input type=\"text\" formControlName=\"token\" placeholder=\"Código\"></ion-input>\n    <ion-col size=\"8\" offset=\"2\">\n      <ion-button type=\"submit\" expand=\"block\">\n        Validar\n      </ion-button>\n    </ion-col>\n  </form>\n</div>\n");

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
//# sourceMappingURL=default~cupons-cupons-module~home-home-module.js.map