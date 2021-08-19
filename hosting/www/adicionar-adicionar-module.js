(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adicionar-adicionar-module"],{

/***/ "IqYh":
/*!**************************************************************!*\
  !*** ./src/app/cupons/adicionar/adicionar-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AdicionarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarPageRoutingModule", function() { return AdicionarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adicionar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adicionar.page */ "VsA/");




const routes = [
    {
        path: '',
        component: _adicionar_page__WEBPACK_IMPORTED_MODULE_3__["AdicionarPage"]
    }
];
let AdicionarPageRoutingModule = class AdicionarPageRoutingModule {
};
AdicionarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdicionarPageRoutingModule);



/***/ }),

/***/ "S/xQ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cupons/adicionar/adicionar.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons *ngIf=\"key\" class=\"menu-button\"  slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical-sharp\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"adicionar-card\">\n          <p>Cupom</p>\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"form-edit\">\n<!--            <ion-toggle [checked]=\"status\" (ionChange)=\"toggleChange($event)\" slot=\"end\"></ion-toggle>-->\n            <ion-thumbnail slot=\"start\" *ngIf=\"imagemUrl ==''\" (click)=\"imagemInput.click()\">\n              <img src=\"assets/insert_image.png\">\n              <input type=\"file\" #imagemInput formControlName=\"imagem\" (change)=\"uploadImagem($event)\">\n            </ion-thumbnail>\n\n            <ion-thumbnail slot=\"start\" *ngIf=\"imagemUrl !=''\">\n              <img [src]=\"imagemUrl\">\n            </ion-thumbnail>\n\n\n\n            <ion-item>\n              <ion-label>Ativo</ion-label>\n              <ion-checkbox slot=\"end\" [formControl]=\"status\"></ion-checkbox>\n            </ion-item>\n\n\n            <ion-input formControlName=\"nome\" type=\"text\" placeholder=\"Nome\"></ion-input>\n            <ion-textarea rows=\"6\" formControlName=\"descricao\" placeholder=\"Descrição\"></ion-textarea>\n\n            <ion-col size=\"8\" offset=\"2\">\n              <ion-button type=\"submit\" expand=\"block\">\n                Salvar\n              </ion-button>\n            </ion-col>\n          </form>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "VsA/":
/*!****************************************************!*\
  !*** ./src/app/cupons/adicionar/adicionar.page.ts ***!
  \****************************************************/
/*! exports provided: AdicionarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarPage", function() { return AdicionarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adicionar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adicionar.page.html */ "S/xQ");
/* harmony import */ var _adicionar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adicionar.page.scss */ "ZFwi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");
/* harmony import */ var _shared_cupons_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/cupons.service */ "O0cC");
/* harmony import */ var _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../estabelecimento/shared/estabelecimento.service */ "uNXI");









let AdicionarPage = class AdicionarPage {
    constructor(estabelecimentoService, cuponsService, formBuilder, route, router, toast) {
        this.estabelecimentoService = estabelecimentoService;
        this.cuponsService = cuponsService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.title = "Adicionar";
        this.file = null;
        this.imagemUrl = '';
        this.filePath = '';
    }
    ngOnInit() {
        this.estabelecimentoKey = this.estabelecimentoService.getEstalebelicimentoKey();
        this.criarFormulario();
        const key = this.route.snapshot.paramMap.get('key');
        if (key) {
            this.title = "Gerenciar";
            const subscribe = this.cuponsService.getByKey(key).subscribe((cupom) => {
                subscribe.unsubscribe();
                this.key = cupom.key;
                this.form.patchValue({
                    nome: cupom.nome,
                    descricao: cupom.descricao,
                    status: cupom.status,
                    imagem: cupom.imagem
                });
                this.imagemUrl = cupom.imagem || '';
                this.filePath = cupom.filePath || '';
            });
        }
    }
    criarFormulario() {
        this.form = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            descricao: [''],
            status: [true],
            imagem: [''],
        });
        this.file = null;
        this.imagemUrl = '';
        this.filePath = '';
    }
    get status() { return this.form.get('status'); }
    uploadImagem(event) {
        if (event.target.files.length) {
            this.file = event.target.files[0];
            this.form.get('imagem').updateValueAndValidity();
            const reader = new FileReader();
            reader.onload = () => {
                this.imagemUrl = reader.result.toString();
            };
            reader.readAsDataURL(this.file);
        }
        else {
            this.file = null;
        }
    }
    removeImagem() {
        if (this.key)
            this.cuponsService.removeImg(this.filePath, this.key);
        this.imagemUrl = '';
        this.filePath = '';
    }
    toggleChange(event) {
        console.log(event.value);
        this.form.get('status').setValue(event.value);
    }
    onSubmit() {
        if (this.form.valid) {
            let result;
            const cupom = this.form.value;
            cupom.estabelecimentoKey = this.estabelecimentoKey;
            if (this.key) {
                result = this.cuponsService.update(this.key, cupom);
            }
            else {
                result = this.cuponsService.insert(cupom);
            }
            if (this.file) {
                result.then((key) => {
                    this.cuponsService.uploadImg(key, this.file);
                    this.criarFormulario();
                });
            }
            else {
                this.criarFormulario();
            }
            this.toast.showSuccess('Cupom salvo com sucesso');
            this.router.navigate(['/tabs/cupons']);
        }
    }
};
AdicionarPage.ctorParameters = () => [
    { type: _estabelecimento_shared_estabelecimento_service__WEBPACK_IMPORTED_MODULE_8__["EstabelecimentoService"] },
    { type: _shared_cupons_service__WEBPACK_IMPORTED_MODULE_7__["CupomService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
AdicionarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-adicionar',
        template: _raw_loader_adicionar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adicionar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdicionarPage);



/***/ }),

/***/ "ZFwi":
/*!******************************************************!*\
  !*** ./src/app/cupons/adicionar/adicionar.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".adicionar-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\nion-toggle {\n  position: absolute;\n  right: 15px;\n  top: 25px;\n}\n\nion-thumbnail {\n  width: 100%;\n  height: 160px;\n  --border-radius: 5px;\n  margin-top: 20px;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\np {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\nion-input, ion-textarea {\n  border: 1px solid #b3b3b3;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 5px 15px !important;\n  font-size: 14px;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkaWNpb25hci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFFQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJhZGljaW9uYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkaWNpb25hci1jYXJke1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLDAsMCwwLjI5KTtcbn1cblxuaW9uLXRvZ2dsZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAyNXB4O1xuXG59XG5pb24tdGh1bWJuYWlse1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbn1cbmlvbi1idXR0b257XG4gIC0tYm9yZGVyLXJhZGl1czogMzVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5we1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gIGNvbG9yOiAjN2M3YjdiO1xufVxuXG5pb24taW5wdXQsIGlvbi10ZXh0YXJlYXtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTVweCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG5pbnB1dFt0eXBlPWZpbGVde1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "gmvn":
/*!******************************************************!*\
  !*** ./src/app/cupons/adicionar/adicionar.module.ts ***!
  \******************************************************/
/*! exports provided: AdicionarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarPageModule", function() { return AdicionarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _adicionar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adicionar-routing.module */ "IqYh");
/* harmony import */ var _adicionar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adicionar.page */ "VsA/");







let AdicionarPageModule = class AdicionarPageModule {
};
AdicionarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _adicionar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdicionarPageRoutingModule"]
        ],
        declarations: [_adicionar_page__WEBPACK_IMPORTED_MODULE_6__["AdicionarPage"]]
    })
], AdicionarPageModule);



/***/ })

}]);
//# sourceMappingURL=adicionar-adicionar-module.js.map