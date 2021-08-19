(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~estabelecimento-estabelecimentos-form-estabelecimentos-form-module~estabelecimentos-form-est~825c94d4"],{

/***/ "3bQO":
/*!******************************************************************************!*\
  !*** ./src/app/estabelecimento/shared/estabelecimentos-enderecos.service.ts ***!
  \******************************************************************************/
/*! exports provided: EstabelecimentosEnderecosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosEnderecosService", function() { return EstabelecimentosEnderecosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/firebase-path */ "Fpbh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let EstabelecimentosEnderecosService = class EstabelecimentosEnderecosService {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        this.enderecosRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].ESTABELECIMENTOS_ENDERECOS);
    }
    getAll() {
        return this.enderecosRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    getByKey(key) {
        const path = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].ESTABELECIMENTOS_ENDERECOS}${key}`;
        return this.db.object(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(change => {
            return Object.assign({ key: change.payload.key }, change.payload.val());
        }));
    }
    getByField(field, value) {
        const enderecosRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].ESTABELECIMENTOS_ENDERECOS, query => query
            .orderByChild(field)
            .equalTo(value));
        return enderecosRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    insert(endereco) {
        return new Promise(resolve => {
            this.enderecosRef.push(endereco)
                .then((result) => resolve(result.key));
        });
    }
    update(key, endereco) {
        return new Promise((resolve, reject) => {
            this.enderecosRef.update(key, endereco)
                .then(() => resolve(key))
                .catch(() => reject());
        });
    }
    remove(key) {
        return this.enderecosRef.remove(key);
    }
};
EstabelecimentosEnderecosService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
];
EstabelecimentosEnderecosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EstabelecimentosEnderecosService);



/***/ }),

/***/ "5j3W":
/*!****************************************************************************!*\
  !*** ./src/app/estabelecimento/shared/estabelecimentos-imagens.service.ts ***!
  \****************************************************************************/
/*! exports provided: EstabelecimentosImagensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosImagensService", function() { return EstabelecimentosImagensService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/firebase-path */ "Fpbh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");






let EstabelecimentosImagensService = class EstabelecimentosImagensService {
    constructor(
    // keyEstabelecimento: string,
    db, storage) {
        this.db = db;
        this.storage = storage;
        this.path = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_3__["FirebasePath"].ESTABELECIMENTOS_IMAGENS}`;
        // this.setPath(keyEstabelecimento);
        this.imagensRef = this.db.list(this.path);
    }
    insert(imagem) {
        return new Promise(resolve => {
            this.imagensRef.push(imagem)
                .then((result) => resolve(result.key));
        });
    }
    update(imagem) {
    }
    getAll() {
        return this.imagensRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    getByKey(key) {
    }
    remove(key, filePath) {
        const ref = this.storage.ref(filePath);
        ref.delete();
        this.imagensRef.remove(key);
    }
    getByField(field, value) {
        const imagensRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_3__["FirebasePath"].ESTABELECIMENTOS_IMAGENS, query => query
            .orderByChild(field)
            .equalTo(value));
        return imagensRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    uploadImg(keyEstabelecimento, file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const filePath = `${this.path}/${keyEstabelecimento}/${file.name}`;
            const ref = this.storage.ref(filePath);
            const task = ref.put(file);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
                ref.getDownloadURL().subscribe((url => {
                    const img = {
                        estabelecimentoKey: keyEstabelecimento,
                        imagem: url,
                        filePath: filePath
                    };
                    this.insert(img);
                    // return { imagem: url, filePath: filePath };
                }));
            })).subscribe();
        });
    }
};
EstabelecimentosImagensService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
];
EstabelecimentosImagensService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EstabelecimentosImagensService);



/***/ }),

/***/ "F2LV":
/*!**********************************************************!*\
  !*** ./src/app/estabelecimento/shared/dias.type.enum.ts ***!
  \**********************************************************/
/*! exports provided: DiasTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiasTypeEnum", function() { return DiasTypeEnum; });
var DiasTypeEnum;
(function (DiasTypeEnum) {
    DiasTypeEnum[DiasTypeEnum["Segunda"] = 0] = "Segunda";
    DiasTypeEnum[DiasTypeEnum["Terca"] = 1] = "Terca";
    DiasTypeEnum[DiasTypeEnum["Quarta"] = 2] = "Quarta";
    DiasTypeEnum[DiasTypeEnum["Quinta"] = 3] = "Quinta";
    DiasTypeEnum[DiasTypeEnum["Sexta"] = 4] = "Sexta";
    DiasTypeEnum[DiasTypeEnum["Sabado"] = 5] = "Sabado";
    DiasTypeEnum[DiasTypeEnum["Domingo"] = 6] = "Domingo";
})(DiasTypeEnum || (DiasTypeEnum = {}));


/***/ }),

/***/ "L2KS":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estabelecimento/estabelecimentos-form/estabelecimentos-form.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"formEstabelecimento\" (ngSubmit)=\"onSubmit()\">\n\n          <ion-list>\n            <ion-list-header>Informações do Estabelecimento</ion-list-header>\n            <ion-item *ngIf=\"logoUrl ==''\">\n<!--              <ion-label position=\"stacked\">Foto</ion-label>-->\n              <ion-button color=\"primary\" (click)=\"logoInput.click()\">Adicionar Logo</ion-button>\n              <input type=\"file\" #logoInput formControlName=\"logo\" (change)=\"uploadLogo($event)\">\n            </ion-item>\n\n            <ion-item *ngIf=\"logoUrl !=''\">\n\n              <ion-thumbnail slot=\"start\">\n                <img [src]=\"logoUrl\">\n              </ion-thumbnail>\n              <ion-button color=\"danger\" (click)=\"removeLogo()\">Remover Logo</ion-button>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Nome</ion-label>\n              <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Categoria</ion-label>\n\n              <ion-select placeholder=\"Escolher\" formControlName=\"categoriaKey\" [selectedText]=\"formEstabelecimento.get('categoriaNome').value\" (ionChange)=\"setCategoriaNome($event.target.value)\">\n                <ion-select-option *ngFor=\"let categoria of categorias | async\" value=\"{{categoria.key}}\">{{categoria.nome}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item *ngIf=\"(subcategorias | async)?.length > 0\">\n              <ion-label position=\"stacked\">Subcategoria</ion-label>\n\n              <ion-select placeholder=\"Escolher\" formControlName=\"subcategoriaKey\" [selectedText]=\"formEstabelecimento.get('subcategoriaNome').value\" (ionChange)=\"setSubcategoriaNome($event.target.value)\">\n                <ion-select-option *ngFor=\"let subcategoria of subcategorias | async\" value=\"{{subcategoria.key}}\">{{subcategoria.nome}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-label position=\"stacked\">CNPJ</ion-label>\n              <ion-input type=\"text\" formControlName=\"cnpj\" ></ion-input>\n            </ion-item>\n          </ion-list>\n\n<!--          <ion-item>-->\n<!--            <ion-label position=\"stacked\">Proprietários</ion-label>-->\n\n<!--            <ion-select placeholder=\"Escolher\" formControlName=\"proprietariosUid\" multiple=\"true\" (ionChange)=\"setProprietariosEmail($event.target.value)\">-->\n<!--              <ion-select-option *ngFor=\"let membro of membros | async\" value=\"{{membro.uid}}\" >{{membro.email}}</ion-select-option>-->\n<!--            </ion-select>-->\n<!--          </ion-item>-->\n\n\n\n<!--          <div class=\"enderecos-content\">-->\n<!--            <div formArrayName=\"enderecos\" *ngFor=\"let endereco of formEstabelecimento.get('enderecos')['controls']; let i = index;\">-->\n<!--              <ion-list  [formGroupName]=\"i\" >-->\n<!--                <ion-list-header>Endereço {{ i+1 }}</ion-list-header>-->\n<!--&lt;!&ndash;                <ion-button color=\"danger\" (click)=\"removeEndereco(i)\">Remover Endereço</ion-button>&ndash;&gt;-->\n<!--                <ion-item>-->\n<!--                  <ion-label position=\"stacked\">Cep</ion-label>-->\n<!--                  <ion-input type=\"text\" formControlName=\"cep\"></ion-input>-->\n<!--                </ion-item>-->\n\n\n                <ion-list formGroupName=\"contato\">\n                  <ion-list-header>Contato</ion-list-header>\n                  <ion-item>\n                    <ion-label position=\"stacked\">Telefone</ion-label>\n      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                    <ion-input type=\"text\" formControlName=\"telefone\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">E-mail</ion-label>\n                    <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Site</ion-label>\n                    <ion-input type=\"text\" formControlName=\"site\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Facebook</ion-label>\n                    <ion-input type=\"text\" formControlName=\"facebook\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Instagram</ion-label>\n                    <ion-input type=\"text\" formControlName=\"instagram\"></ion-input>\n                  </ion-item>\n                </ion-list>\n<!--              </ion-list>-->\n<!--            </div>-->\n<!--          </div>-->\n\n          <ion-list-header>Endereços</ion-list-header>\n          <ion-button class=\"btn-add-end ion-margin-start\" color=\"primary\" (click)=\"addEndereco()\">Adicionar Endereco</ion-button>\n          <div class=\"enderecos-content\">\n            <div formArrayName=\"enderecos\" *ngFor=\"let endereco of formEstabelecimento.get('enderecos')['controls']; let i = index;\">\n              <ion-list  [formGroupName]=\"i\" >\n                <ion-button *ngIf=\"i != 0\" class=\"btn-rmv-end\" color=\"danger\" (click)=\"removeEndereco(i)\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n                <ion-list-header>Endereço {{ i+1 }}</ion-list-header>\n                <ion-item>\n                  <ion-label position=\"stacked\">Cep</ion-label>\n                  <ion-input type=\"text\" formControlName=\"cep\" (ionBlur)=\"buscaCEP(i)\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Estado</ion-label>\n                  <ion-input type=\"text\" formControlName=\"estado\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Cidade</ion-label>\n                  <ion-input type=\"text\" formControlName=\"cidade\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Rua</ion-label>\n                  <ion-input type=\"text\" formControlName=\"rua\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Numero</ion-label>\n                  <ion-input type=\"text\" formControlName=\"numero\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Complemento</ion-label>\n                  <ion-input type=\"text\" formControlName=\"complemento\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </div>\n          </div>\n\n\n\n          <ion-list formArrayName=\"formasPagamento\">\n            <ion-list-header>Formas de Pagamento</ion-list-header>\n            <ion-item *ngFor=\"let forma of formasPagamento.controls; let i = index\" formGroupName=\"{{ i }}\">\n              <ion-label>{{ forma.get('nome').value }}</ion-label>\n              <ion-checkbox slot=\"end\" [formControl]=\"forma.get('isChecked')\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n\n<!--          <ion-list formGroupName=\"horario\">-->\n<!--            <ion-list-header>Horário de funcionamento</ion-list-header>-->\n\n<!--            <ion-item *ngFor=\"let dia of dias\">-->\n<!--              <ion-label>{{dia.nome}}</ion-label>-->\n<!--              <ion-checkbox slot=\"end\" [value]=\"dia.value\" (ionChange)=\"onCheckHorarioChange($event)\"></ion-checkbox>-->\n<!--            </ion-item>-->\n<!--          </ion-list>-->\n\n          <div class=\"enderecos-content\">\n<!--            <div formArrayName=\"imagens\" *ngFor=\"let imagem of formEstabelecimento.get('imagens')['controls']; let i = index;\">-->\n            <div formArrayName=\"imagens\">\n              <ion-list [formGroupName]=\"0\">\n                <ion-list-header>Imagens</ion-list-header>\n\n                <ion-item>\n<!--                <ion-item *ngFor=\"let imagem of imagens.controls; let i=index\">-->\n                  <ion-button color=\"primary\" (click)=\"imagemInput.click()\">Adicionar Imagem</ion-button>\n                  <input type=\"file\" multiple #imagemInput  (change)=\"uploadImagem($event)\">\n                </ion-item>\n              </ion-list>\n            </div>\n\n            <ion-item *ngFor=\"let file of imagensEstabelecimento; let i = index\">\n\n              <ion-thumbnail slot=\"start\">\n                <img [src]=\"file.imagem\">\n              </ion-thumbnail>\n              <ion-button color=\"danger\" (click)=\"removeImagem(i, file.key)\">Remover Imagem</ion-button>\n            </ion-item>\n          </div>\n\n\n\n          <ion-list formGroupName=\"horario\">\n            <ion-list-header>Horário</ion-list-header>\n\n            <div formGroupName=\"segunda\">\n              <p class=\"sub-title\">Segunda-feira</p>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Abre às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Fecha às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n            <div formGroupName=\"terca\">\n              <p class=\"sub-title\">Terça-feira</p>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Abre às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Fecha às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n            <div formGroupName=\"quarta\">\n              <p class=\"sub-title\">Quarta-feira</p>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Abre às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Fecha às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n            <div formGroupName=\"quinta\">\n              <p class=\"sub-title\">Quinta-feira</p>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Abre às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Fecha às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n            <div formGroupName=\"sexta\">\n              <p class=\"sub-title\">Sexta-feira</p>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Abre às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Fecha às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n            <div formGroupName=\"sabado\">\n              <p class=\"sub-title\">Sábado</p>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Abre às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Fecha às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n            <div formGroupName=\"domingo\">\n              <p class=\"sub-title\">Domingo</p>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Abre às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item>\n                      <ion-label position=\"stacked\">Fecha às:</ion-label>\n                      <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                      <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n\n\n\n          </ion-list>\n\n\n          <div margin-vertical>\n            <ion-button color=\"primary\" expand=\"block\" type=\"submit\" [disabled]=\"formEstabelecimento.invalid\">Salvar</ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "OIE2":
/*!*****************************************************************!*\
  !*** ./src/app/estabelecimento/shared/subcategorias.service.ts ***!
  \*****************************************************************/
/*! exports provided: SubcategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriasService", function() { return SubcategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/firebase-path */ "Fpbh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let SubcategoriasService = class SubcategoriasService {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        this.subcategoriasRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].SUBCATEGORIAS);
    }
    insert(subcategoria) {
        return this.save(subcategoria, null);
    }
    update(subcategoria, key) {
        return this.save(subcategoria, key);
    }
    save(subcategoria, key) {
        return new Promise((resolve, reject) => {
            const subcategoriaRef = {
                nome: subcategoria.nome,
                categoriaKey: subcategoria.categoriaKey,
                categoriaNome: subcategoria.categoriaNome,
            };
            if (key) {
                this.subcategoriasRef.update(key, subcategoriaRef)
                    .then(() => resolve(key))
                    .catch(() => reject());
            }
            else {
                this.subcategoriasRef.push(subcategoriaRef)
                    .then((result) => resolve(result.key));
            }
        });
    }
    getAll() {
        return this.subcategoriasRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    getByKey(key) {
        const path = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].SUBCATEGORIAS}${key}`;
        return this.db.object(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(change => {
            return (Object.assign({ key: change.key }, change.payload.val()));
        }));
    }
    getByCategoriaKey(categoriaKey) {
        const subcategoriasRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].SUBCATEGORIAS, query => query
            .orderByChild('categoriaKey')
            .equalTo(categoriaKey));
        return subcategoriasRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    remove(key, filePath) {
        this.subcategoriasRef.remove(key);
        if (filePath)
            this.removeImg(filePath, key, false);
    }
    uploadImg(key, file) {
        const filePath = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].SUBCATEGORIAS}${key}/${file.name}`;
        const ref = this.storage.ref(filePath);
        const task = ref.put(file);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            ref.getDownloadURL().subscribe((url => {
                this.subcategoriasRef.update(key, { imagem: url, filePath: filePath });
            }));
        })).subscribe();
    }
    removeImg(filePath, key, atualizarSubcategoria = true) {
        const ref = this.storage.ref(filePath);
        ref.delete();
        if (atualizarSubcategoria) {
            this.subcategoriasRef.update(key, { imagem: '', filePath: '' });
        }
    }
};
SubcategoriasService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
];
SubcategoriasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubcategoriasService);



/***/ }),

/***/ "PBcO":
/*!***************************************************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimentos-form/estabelecimentos-form.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list-header {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.enderecos-content {\n  max-height: 750px;\n  overflow-y: auto;\n  padding: 10px;\n}\n\n.enderecos-content::-webkit-scrollbar {\n  width: 4px;\n}\n\n.enderecos-content::-webkit-scrollbar-thumb {\n  background-color: #d6b46a;\n  outline: 1px solid #ccccc;\n  border-radius: 3px;\n}\n\nion-list-header {\n  width: 80%;\n}\n\n.btn-add-end {\n  font-size: 10px;\n}\n\n.btn-rmv-end {\n  float: right;\n  font-size: 10px;\n}\n\n.sub-title {\n  margin-bottom: 0px;\n  font-size: 13px;\n  padding-left: 16px;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzdGFiZWxlY2ltZW50b3MtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQUU7RUFDRSxVQUFBO0FBRUo7O0FBS0U7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNFLFVBQUE7QUFIRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtBQUZGIiwiZmlsZSI6ImVzdGFiZWxlY2ltZW50b3MtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXJ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG5cbn1cbi5lbmRlcmVjb3MtY29udGVudHtcbiAgbWF4LWhlaWdodDogNzUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgIHdpZHRoOiA0cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLy9ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZiNDZhO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjY2NjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG59XG5pb24tbGlzdC1oZWFkZXJ7XG4gIHdpZHRoOiA4MCU7XG59XG4uYnRuLWFkZC1lbmR7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5idG4tcm12LWVuZHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zdWItdGl0bGV7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cblxuaW5wdXRbdHlwZT1maWxlXXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuIl19 */");

/***/ }),

/***/ "RQdK":
/*!**************************************************************!*\
  !*** ./src/app/estabelecimento/shared/categorias.service.ts ***!
  \**************************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/firebase-path */ "Fpbh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let CategoriasService = class CategoriasService {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        this.categoriasRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].CATEGORIAS);
    }
    insert(categoria) {
        return new Promise((resolve, reject) => {
            this.categoriasRef.push(categoria)
                .then((result) => resolve(result.key));
        });
    }
    update(categoria, key) {
        return new Promise((resolve, reject) => {
            const categoriaObj = {
                nome: categoria.nome
            };
            // updateObj[pathCategoria] = categoria;
            // const pathCategoria = `${FirebasePath.CATEGORIAS}${key}`;
            const subcategoriaUpdates = {};
            const subcribe = this.getSubcategoriaByCategoria(key).subscribe(subcategorias => {
                subcribe.unsubscribe();
                subcategorias.forEach(subcategoria => {
                    const pathSubategoria = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].SUBCATEGORIAS}${subcategoria.key}/categoriaNome`;
                    subcategoriaUpdates[pathSubategoria] = categoria.nome;
                });
                this.db.object('/').update(subcategoriaUpdates);
            });
            this.categoriasRef.update(key, categoriaObj)
                .then(() => resolve(key))
                .catch(() => reject());
        });
    }
    getSubcategoriaByCategoria(key) {
        return this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].SUBCATEGORIAS, q => q.orderByChild('categoriaKey').equalTo(key))
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(m => ({ key: m.key }));
        }));
    }
    getAll() {
        return this.categoriasRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(m => (Object.assign({ key: m.payload.key }, m.payload.val())));
        }));
    }
    getByKey(key) {
        const path = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].CATEGORIAS}${key}`;
        return this.db.object(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(change => {
            return (Object.assign({ key: change.key }, change.payload.val()));
        }));
    }
    remove(key, filePath) {
        this.categoriasRef.remove(key);
        if (filePath)
            this.removeImg(filePath, key, false);
    }
    uploadImg(key, file) {
        const filePath = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].CATEGORIAS}${key}/${file.name}`;
        const ref = this.storage.ref(filePath);
        const task = ref.put(file);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            ref.getDownloadURL().subscribe((url => {
                this.categoriasRef.update(key, { imagem: url, filePath: filePath });
            }));
        })).subscribe();
    }
    removeImg(filePath, key, atualizarCategoria = true) {
        const ref = this.storage.ref(filePath);
        ref.delete();
        if (atualizarCategoria) {
            this.categoriasRef.update(key, { imagem: '', filePath: '' });
        }
    }
};
CategoriasService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
];
CategoriasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriasService);



/***/ }),

/***/ "SzLe":
/*!***************************************************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimentos-form/estabelecimentos-form.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EstabelecimentosFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosFormPageModule", function() { return EstabelecimentosFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _estabelecimentos_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estabelecimentos-form-routing.module */ "ka+j");
/* harmony import */ var _estabelecimentos_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estabelecimentos-form.page */ "vq6I");







// import {SharedModule} from '../../core/shared.module';
let EstabelecimentosFormPageModule = class EstabelecimentosFormPageModule {
};
EstabelecimentosFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            // SharedModule,
            _estabelecimentos_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstabelecimentosFormPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_estabelecimentos_form_page__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentosFormPage"]],
    })
], EstabelecimentosFormPageModule);



/***/ }),

/***/ "ka+j":
/*!***********************************************************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimentos-form/estabelecimentos-form-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: EstabelecimentosFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosFormPageRoutingModule", function() { return EstabelecimentosFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estabelecimentos_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estabelecimentos-form.page */ "vq6I");




const routes = [
    {
        path: '',
        component: _estabelecimentos_form_page__WEBPACK_IMPORTED_MODULE_3__["EstabelecimentosFormPage"]
    }
];
let EstabelecimentosFormPageRoutingModule = class EstabelecimentosFormPageRoutingModule {
};
EstabelecimentosFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstabelecimentosFormPageRoutingModule);



/***/ }),

/***/ "q5as":
/*!*********************************************************************!*\
  !*** ./src/app/estabelecimento/shared/forma-pagamento.type.enum.ts ***!
  \*********************************************************************/
/*! exports provided: FormaPagamentoTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormaPagamentoTypeEnum", function() { return FormaPagamentoTypeEnum; });
var FormaPagamentoTypeEnum;
(function (FormaPagamentoTypeEnum) {
    FormaPagamentoTypeEnum[FormaPagamentoTypeEnum["Dinheiro"] = 0] = "Dinheiro";
    FormaPagamentoTypeEnum[FormaPagamentoTypeEnum["Credito"] = 1] = "Credito";
    FormaPagamentoTypeEnum[FormaPagamentoTypeEnum["Debito"] = 2] = "Debito";
    FormaPagamentoTypeEnum[FormaPagamentoTypeEnum["Ticket"] = 3] = "Ticket";
    FormaPagamentoTypeEnum[FormaPagamentoTypeEnum["Pix"] = 4] = "Pix";
})(FormaPagamentoTypeEnum || (FormaPagamentoTypeEnum = {}));


/***/ }),

/***/ "vpJb":
/*!********************************************************************!*\
  !*** ./src/app/estabelecimento/shared/estabelecimentos.service.ts ***!
  \********************************************************************/
/*! exports provided: EstabelecimentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosService", function() { return EstabelecimentosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/firebase-path */ "Fpbh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../login/shared/usuario-auth.service */ "E+93");








let EstabelecimentosService = class EstabelecimentosService {
    constructor(db, storage, afAuth, usuarioService) {
        this.db = db;
        this.storage = storage;
        this.afAuth = afAuth;
        this.usuarioService = usuarioService;
        this.estabelecimentosRef = this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].ESTABELECIMENTOS);
        console.log(this.usuarioService.getUser());
        const user = this.usuarioService.getUser();
        this.proprietariosUid = user.uid;
        this.proprietariosEmail = user.email;
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
    insert(estabelecimento) {
        return new Promise(resolve => {
            this.estabelecimentosRef.push(estabelecimento)
                .then((result) => resolve(result.key));
        });
    }
    update(key, estabelecimento) {
        return new Promise((resolve, reject) => {
            this.estabelecimentosRef.update(key, estabelecimento)
                .then(() => resolve(key))
                .catch(() => reject());
        });
    }
    remove(key, filePath) {
        return this.estabelecimentosRef.remove(key);
        if (filePath)
            this.removeLogo(filePath, key, false);
    }
    uploadLogo(key, file) {
        const filePath = `${_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].ESTABELECIMENTOS}${key}/${file.name}`;
        const ref = this.storage.ref(filePath);
        const task = ref.put(file);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            ref.getDownloadURL().subscribe((url => {
                this.estabelecimentosRef.update(key, { logo: url, fileLogoPath: filePath });
            }));
        })).subscribe();
    }
    removeLogo(filePath, key, atualizarEstabelecimento = true) {
        const ref = this.storage.ref(filePath);
        ref.delete();
        if (atualizarEstabelecimento) {
            this.estabelecimentosRef.update(key, { logo: '', fileLogoPath: '' });
        }
    }
};
EstabelecimentosService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioAuthService"] }
];
EstabelecimentosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EstabelecimentosService);



/***/ }),

/***/ "vq6I":
/*!*************************************************************************************!*\
  !*** ./src/app/estabelecimento/estabelecimentos-form/estabelecimentos-form.page.ts ***!
  \*************************************************************************************/
/*! exports provided: EstabelecimentosFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosFormPage", function() { return EstabelecimentosFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estabelecimentos_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estabelecimentos-form.page.html */ "L2KS");
/* harmony import */ var _estabelecimentos_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estabelecimentos-form.page.scss */ "PBcO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_categorias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/categorias.service */ "RQdK");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");
/* harmony import */ var _shared_estabelecimentos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/estabelecimentos.service */ "vpJb");
/* harmony import */ var _shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/subcategorias.service */ "OIE2");
/* harmony import */ var _shared_estabelecimentos_enderecos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/estabelecimentos-enderecos.service */ "3bQO");
/* harmony import */ var _shared_estabelecimentos_imagens_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/estabelecimentos-imagens.service */ "5j3W");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "bhdO");
/* harmony import */ var _shared_dias_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/dias.type.enum */ "F2LV");
/* harmony import */ var _shared_forma_pagamento_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/forma-pagamento.type.enum */ "q5as");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../login/shared/usuario-auth.service */ "E+93");

















let EstabelecimentosFormPage = class EstabelecimentosFormPage {
    constructor(formBuilder, route, router, estabelecimentosService, estabelecimentosImagensService, estabelecimentosEnderecosService, categoriaService, subcategoriaService, afAuth, usuariosService, toast, viacep) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.estabelecimentosService = estabelecimentosService;
        this.estabelecimentosImagensService = estabelecimentosImagensService;
        this.estabelecimentosEnderecosService = estabelecimentosEnderecosService;
        this.categoriaService = categoriaService;
        this.subcategoriaService = subcategoriaService;
        this.afAuth = afAuth;
        this.usuariosService = usuariosService;
        this.toast = toast;
        this.viacep = viacep;
        this.title = 'Novo Estabelecimento';
        this.fileLogo = null;
        this.logoUrl = '';
        this.fileLogoPath = '';
        this.proprietarios = [];
        // formaPagamentos = [
        //   {nome: 'Dinheiro', value: FormaPagamentoTypeEnum.Dinheiro, isChecked: false},
        //   {nome: 'Cartão de crédito', value: FormaPagamentoTypeEnum.Credito, isChecked: false},
        //   {nome: 'Cartão de débito', value: FormaPagamentoTypeEnum.Debito, isChecked: false},
        //   {nome: 'Ticket', value: FormaPagamentoTypeEnum.Ticket, isChecked: false},
        //   {nome: 'Pix', value: FormaPagamentoTypeEnum.Pix, isChecked: false},
        //   ];
        this.dias = [
            { nome: 'Segunda-feira', value: _shared_dias_type_enum__WEBPACK_IMPORTED_MODULE_13__["DiasTypeEnum"].Segunda },
            { nome: 'Terça-feira', value: _shared_dias_type_enum__WEBPACK_IMPORTED_MODULE_13__["DiasTypeEnum"].Terca },
            { nome: 'Quarta-feira', value: _shared_dias_type_enum__WEBPACK_IMPORTED_MODULE_13__["DiasTypeEnum"].Quarta },
            { nome: 'Quinta-feira', value: _shared_dias_type_enum__WEBPACK_IMPORTED_MODULE_13__["DiasTypeEnum"].Quinta },
            { nome: 'Sexta-feira', value: _shared_dias_type_enum__WEBPACK_IMPORTED_MODULE_13__["DiasTypeEnum"].Sexta },
            { nome: 'Sábado', value: _shared_dias_type_enum__WEBPACK_IMPORTED_MODULE_13__["DiasTypeEnum"].Sabado },
            { nome: 'Domingo', value: _shared_dias_type_enum__WEBPACK_IMPORTED_MODULE_13__["DiasTypeEnum"].Domingo },
        ];
        this.files = [];
        this.filesUrl = [];
        this.filesPath = [];
        this.imagensEstabelecimento = [];
    }
    ngOnInit() {
        this.criarFormulario();
        this.criarGroupFormLogo();
        this.categorias = this.categoriaService.getAll();
        // this.membros = from(this.usuarioService.getAll());
        const key = this.route.snapshot.paramMap.get('key');
        const user = this.usuariosService.getUser();
        this.formEstabelecimento.patchValue({
            proprietariosUid: user.uid,
            proprietariosEmail: user.email
        });
        if (key) {
            this.title = 'Editar Estabelecimento';
            const subscribe = this.estabelecimentosService.getByKey(key).subscribe((estabelecimento) => {
                subscribe.unsubscribe();
                console.log(estabelecimento);
                this.key = estabelecimento.key;
                this.formEstabelecimento.patchValue({
                    nome: estabelecimento.nome,
                    logo: '',
                    categoriaKey: estabelecimento.categoriaKey,
                    categoriaNome: estabelecimento.categoriaNome,
                    subcategoriaKey: estabelecimento.subcategoriaKey,
                    subcategoriaNome: estabelecimento.subcategoriaNome,
                    proprietariosUid: estabelecimento.proprietariosUid,
                    proprietariosEmail: estabelecimento.proprietariosEmail,
                    cnpj: estabelecimento.cnpj,
                    contato: {
                        telefone: estabelecimento.contato.telefone,
                        email: estabelecimento.contato.email,
                        site: estabelecimento.contato.site,
                        facebook: estabelecimento.contato.facebook,
                        instagram: estabelecimento.contato.instagram,
                    },
                    formasPagamento: estabelecimento.formasPagamento,
                    horario: {
                        segunda: {
                            de: estabelecimento.horario.segunda.de,
                            as: estabelecimento.horario.segunda.as
                        },
                        terca: {
                            de: estabelecimento.horario.terca.de,
                            as: estabelecimento.horario.terca.as
                        },
                        quarta: {
                            de: estabelecimento.horario.quarta.de,
                            as: estabelecimento.horario.quarta.as
                        },
                        quinta: {
                            de: estabelecimento.horario.quinta.de,
                            as: estabelecimento.horario.quinta.as
                        },
                        sexta: {
                            de: estabelecimento.horario.sexta.de,
                            as: estabelecimento.horario.sexta.as
                        },
                        sabado: {
                            de: estabelecimento.horario.sabado.de,
                            as: estabelecimento.horario.sabado.as
                        },
                        domingo: {
                            de: estabelecimento.horario.domingo.de,
                            as: estabelecimento.horario.domingo.as
                        }
                    }
                });
                const sub = this.estabelecimentosEnderecosService.getByField('estabelecimentoKey', this.key).subscribe((enderecos) => {
                    sub.unsubscribe();
                    var i;
                    for (i = 0; i < enderecos.length; i++) {
                        if (i != 0)
                            this.addEndereco();
                        this.enderecos.at(i).patchValue({
                            keyEndereco: enderecos[i].key,
                            cep: enderecos[i].cep,
                            estado: enderecos[i].estado,
                            cidade: enderecos[i].cidade,
                            rua: enderecos[i].rua,
                            numero: enderecos[i].numero,
                            complemento: enderecos[i].complemento
                        });
                    }
                });
                const subii = this.afAuth.user.subscribe(userCredential => {
                    subii.unsubscribe();
                    this.proprietariosUid.patchValue(userCredential.uid);
                    this.proprietariosEmail.patchValue(userCredential.email);
                });
                const subi = this.estabelecimentosImagensService.getByField('estabelecimentoKey', this.key).subscribe((imagens) => {
                    subi.unsubscribe();
                    this.imagensEstabelecimento = imagens;
                    imagens.forEach((imagem) => {
                        this.filesUrl.push(imagem.imagem);
                        this.filesPath.push(imagem.filePath);
                    });
                });
                this.logoUrl = estabelecimento.logo || '';
                this.fileLogoPath = estabelecimento.fileLogoPath || '';
                this.formEstabelecimento.updateValueAndValidity();
            });
        }
    }
    get nome() { return this.formEstabelecimento.get('nome'); }
    get categoriaNome() { return this.formEstabelecimento.get('categoriaNome'); }
    get categoriaKey() { return this.formEstabelecimento.get('categoriaKey'); }
    get subcategoriaNome() { return this.formEstabelecimento.get('subcategoriaNome'); }
    get subcategoriaKey() { return this.formEstabelecimento.get('subcategoriaKey'); }
    get proprietariosUid() { return this.formEstabelecimento.get('proprietariosUid'); }
    get proprietariosEmail() { return this.formEstabelecimento.get('proprietariosEmail'); }
    get enderecos() { return this.formEstabelecimento.get('enderecos'); }
    get formasPagamento() { return this.formEstabelecimento.get('formasPagamento'); }
    get imagens() { return this.formEstabelecimento.get('imagens'); }
    criarFormulario() {
        this.formEstabelecimento = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            logo: [''],
            categoriaKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            categoriaNome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subcategoriaKey: [''],
            subcategoriaNome: [''],
            proprietariosUid: [''],
            proprietariosEmail: [''],
            cnpj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            contato: this.formBuilder.group({
                telefone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                // email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
                site: [''],
                facebook: [''],
                instagram: [''],
            }),
            enderecos: this.formBuilder.array([this.criarFormularioEndereco()]),
            imagens: this.formBuilder.array([this.criarFormularioImagem()]),
            formasPagamento: this.criarFormularioPagamento(),
            horario: this.formBuilder.group(this.criarFormularioHorario()),
        });
    }
    criarGroupFormLogo() {
        this.fileLogo = null;
        this.logoUrl = '';
        this.fileLogoPath = '';
    }
    criarFormularioEndereco() {
        return this.formBuilder.group({
            keyEndereco: [''],
            cep: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rua: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numero: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            complemento: ['']
        });
    }
    criarFormularioPagamento() {
        return this.formBuilder.array([
            this.formBuilder.group({ id: _shared_forma_pagamento_type_enum__WEBPACK_IMPORTED_MODULE_14__["FormaPagamentoTypeEnum"].Dinheiro, nome: 'Dinheiro', isChecked: false }),
            this.formBuilder.group({ id: _shared_forma_pagamento_type_enum__WEBPACK_IMPORTED_MODULE_14__["FormaPagamentoTypeEnum"].Credito, nome: 'Cartão de crédito', isChecked: false }),
            this.formBuilder.group({ id: _shared_forma_pagamento_type_enum__WEBPACK_IMPORTED_MODULE_14__["FormaPagamentoTypeEnum"].Debito, nome: 'Cartão de débito', isChecked: false }),
            this.formBuilder.group({ id: _shared_forma_pagamento_type_enum__WEBPACK_IMPORTED_MODULE_14__["FormaPagamentoTypeEnum"].Ticket, nome: 'Ticket', isChecked: false }),
            this.formBuilder.group({ id: _shared_forma_pagamento_type_enum__WEBPACK_IMPORTED_MODULE_14__["FormaPagamentoTypeEnum"].Pix, nome: 'Pix', isChecked: false }),
        ]);
    }
    criarFormularioHorario() {
        return {
            segunda: this.formBuilder.group({
                de: [''],
                as: ['']
            }),
            terca: this.formBuilder.group({
                de: [''],
                as: ['']
            }),
            quarta: this.formBuilder.group({
                de: [''],
                as: ['']
            }),
            quinta: this.formBuilder.group({
                de: [''],
                as: ['']
            }),
            sexta: this.formBuilder.group({
                de: [''],
                as: ['']
            }),
            sabado: this.formBuilder.group({
                de: [''],
                as: ['']
            }),
            domingo: this.formBuilder.group({
                de: [''],
                as: ['']
            })
        };
    }
    criarFormularioImagem() {
        return this.formBuilder.group({
            imagem: ['']
        });
    }
    uploadLogo(event) {
        if (event.target.files.length) {
            this.fileLogo = event.target.files[0];
            this.formEstabelecimento.get('logo').updateValueAndValidity();
            const reader = new FileReader();
            reader.onload = () => {
                this.logoUrl = reader.result.toString();
            };
            reader.readAsDataURL(this.fileLogo);
        }
        else {
            this.fileLogo = null;
        }
    }
    removeLogo() {
        if (this.key)
            this.estabelecimentosService.removeLogo(this.fileLogoPath, this.key);
        this.logoUrl = '';
        this.fileLogoPath = '';
    }
    setCategoriaNome(categoriaKey) {
        const categ = this.categoriaService.getByKey(categoriaKey).subscribe((categoria) => {
            categ.unsubscribe();
            this.setSubcategoriasByCategoria(categoriaKey);
            this.categoriaNome.setValue(categoria.nome);
        });
    }
    setSubcategoriasByCategoria(categoriaKey) {
        this.subcategorias = this.subcategoriaService.getByCategoriaKey(categoriaKey);
    }
    setSubcategoriaNome(subcategoriaKey) {
        const subcateg = this.subcategoriaService.getByKey(subcategoriaKey).subscribe((subcategoria) => {
            subcateg.unsubscribe();
            this.subcategoriaNome.setValue(subcategoria.nome);
        });
    }
    setProprietariosEmail(event) {
        // if (event){
        //   this.proprietariosUid.patchValue(event);
        //   const nomes = [];
        //   this.proprietariosUid.value.forEach(id => {
        //     const sub = this.usuarioService.getById(id).subscribe((user: any) => {
        //       sub.unsubscribe();
        //       nomes.push(user.email);
        //     });
        //   });
        //   this.proprietariosEmail.patchValue(nomes);
        // }
    }
    addEndereco() {
        // this.enderecos = this.formEstabelecimento.get('enderecos') as FormArray;
        this.enderecos.push(this.criarFormularioEndereco());
    }
    removeEndereco(i) {
        if (this.key)
            this.estabelecimentosEnderecosService.remove(this.enderecos.at(i).get('keyEndereco').value);
        this.enderecos.removeAt(i);
    }
    buscaCEP(i) {
        // this.enderecos = this.formEstabelecimento.get('enderecos') as FormArray;
        const endereco = this.enderecos.at(i).value;
        this.viacep
            .buscarPorCep(endereco.cep)
            .subscribe((response) => {
            console.log(response);
            this.enderecos.at(i).patchValue({
                estado: response.uf,
                cidade: response.localidade,
                rua: response.logradouro,
            });
        });
    }
    uploadImagem(event) {
        if (event.target.files.length == 1) {
            this.files.push(event.target.files[0]);
            this.formEstabelecimento.get('imagens').updateValueAndValidity();
            const reader = new FileReader();
            reader.onload = () => {
                this.imagensEstabelecimento.push({ imagem: reader.result.toString() });
            };
            reader.readAsDataURL(this.files[this.files.length - 1]);
        }
        else {
            Array.prototype.forEach.call(event.target.files, file => {
                this.files.push(file);
                this.formEstabelecimento.get('imagens').updateValueAndValidity();
                const reader = new FileReader();
                reader.onload = () => {
                    const fileImg = {
                        imagem: reader.result.toString()
                    };
                    this.imagensEstabelecimento.push(fileImg);
                };
                reader.readAsDataURL(this.files[this.files.length - 1]);
            });
        }
    }
    removeImagem(i, key) {
        // if (this.key) this.estabelecimentosService.removeLogo(this.fileLogoPath, this.key);
        if (key) {
            this.estabelecimentosImagensService.remove(key, this.filesPath[i]);
        }
        this.filesUrl.splice(i, 1);
        this.filesPath.splice(i, 1);
        this.imagensEstabelecimento.splice(i, 1);
    }
    onCheckHorarioChange(event) {
        const formArray = this.formEstabelecimento.get('formasPagamento');
        if (event.target.checked) {
            formArray.push(this.formBuilder.control(event.target.value));
        }
        else {
            let i = 0;
            formArray.controls.forEach((ctrl) => {
                if (ctrl.value === event.target.value) {
                    formArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    onSubmit() {
        if (this.formEstabelecimento.valid) {
            let result;
            const estabelecimentoObj = this.formEstabelecimento.value;
            delete estabelecimentoObj.logo;
            // const user = this.usuarioAuthService.getUser();
            // estabelecimentoObj.proprietariosUid = user.uid;
            // estabelecimentoObj.proprietariosEmail = user.email;
            // this.afAuth.authState.subscribe(user => {
            //   if (user) {
            //     estabelecimentoObj.proprietariosUid = user.uid;
            //     estabelecimentoObj.proprietariosEmail = user.email;
            //   }
            // });
            if (this.key) {
                result = this.estabelecimentosService.update(this.key, estabelecimentoObj);
            }
            else {
                result = this.estabelecimentosService.insert(estabelecimentoObj);
            }
            const enderecos = this.formEstabelecimento.get('enderecos').value;
            result.then((key) => {
                var i;
                for (i = 0; i < enderecos.length; i++) {
                    console.log(enderecos[i]);
                    const keyEndereco = enderecos[i].keyEndereco;
                    enderecos[i].estabelecimentoKey = key;
                    delete enderecos[i].keyEndereco;
                    if (keyEndereco) {
                        this.estabelecimentosEnderecosService.update(keyEndereco, enderecos[i]);
                    }
                    else {
                        this.estabelecimentosEnderecosService.insert(enderecos[i]);
                    }
                }
            });
            if (this.fileLogo) {
                result.then((key) => {
                    this.estabelecimentosService.uploadLogo(key, this.fileLogo);
                    this.criarGroupFormLogo();
                });
            }
            if (this.files.length) {
                result.then((key) => {
                    this.files.forEach(file => this.estabelecimentosImagensService.uploadImg(key, file));
                });
            }
            this.criarFormulario();
            this.toast.showSuccess('Estabelecimento salvo');
            this.router.navigate(['/estabelecimentos']);
        }
    }
};
EstabelecimentosFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_estabelecimentos_service__WEBPACK_IMPORTED_MODULE_8__["EstabelecimentosService"] },
    { type: _shared_estabelecimentos_imagens_service__WEBPACK_IMPORTED_MODULE_11__["EstabelecimentosImagensService"] },
    { type: _shared_estabelecimentos_enderecos_service__WEBPACK_IMPORTED_MODULE_10__["EstabelecimentosEnderecosService"] },
    { type: _shared_categorias_service__WEBPACK_IMPORTED_MODULE_6__["CategoriasService"] },
    { type: _shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_9__["SubcategoriasService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuth"] },
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_16__["UsuarioAuthService"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_12__["NgxViacepService"] }
];
EstabelecimentosFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-estabelecimentos-form',
        template: _raw_loader_estabelecimentos_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estabelecimentos_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EstabelecimentosFormPage);



/***/ })

}]);
//# sourceMappingURL=default~estabelecimento-estabelecimentos-form-estabelecimentos-form-module~estabelecimentos-form-est~825c94d4.js.map