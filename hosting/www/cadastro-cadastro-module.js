(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"],{

/***/ "2xf1":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-routing.module */ "Iv4U");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "AYIN");







let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
    })
], CadastroPageModule);



/***/ }),

/***/ "AYIN":
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.page.html */ "whE1");
/* harmony import */ var _cadastro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.page.scss */ "j0Tv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "bhdO");







let CadastroPage = class CadastroPage {
    constructor(formBuilder, route, router, 
    // private estabelecimentosService: EstabelecimentosService,
    // private estabelecimentosImagensService: EstabelecimentosImagensService,
    // private estabelecimentosEnderecosService: EstabelecimentosEnderecosService,
    // private categoriaService: CategoriasService,
    // private subcategoriaService: SubcategoriasService,
    // private usuarioService: UsuarioService,
    // private toast: ToastService,
    viacep) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
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
        this.files = [];
        this.filesUrl = [];
        this.filesPath = [];
        this.imagensEstabelecimento = [];
    }
    ngOnInit() {
        this.criarFormulario();
        this.criarGroupFormLogo();
        // this.categorias = this.categoriaService.getAll();
        //
        // const key = this.route.snapshot.paramMap.get('key');
        // if (key){
        //   this.title = 'Editar Estabelecimento';
        //   const subscribe = this.estabelecimentosService.getByKey(key).subscribe((estabelecimento: any) => {
        //     subscribe.unsubscribe();
        //     console.log(estabelecimento);
        //     this.key = estabelecimento.key;
        //     this.formEstabelecimento.patchValue({
        //       nome: estabelecimento.nome,
        //       logo: '',
        //
        //       categoriaKey: estabelecimento.categoriaKey,
        //       categoriaNome: estabelecimento.categoriaNome,
        //       subcategoriaKey: estabelecimento.subcategoriaKey,
        //       subcategoriaNome: estabelecimento.subcategoriaNome,
        //
        //       proprietariosUid: estabelecimento.proprietariosUid,
        //       proprietariosEmail: estabelecimento.proprietariosEmail,
        //
        //       cnpj: estabelecimento.cnpj,
        //
        //       contato: {
        //         telefone: estabelecimento.contato.telefone,
        //         email: estabelecimento.contato.email,
        //         site: estabelecimento.contato.site,
        //         facebook: estabelecimento.contato.facebook,
        //         instagram: estabelecimento.contato.instagram,
        //       },
        //
        //       formasPagamento: estabelecimento.formasPagamento,
        //
        //       horario: {
        //         segunda: {
        //           de: estabelecimento.horario.segunda.de,
        //           as: estabelecimento.horario.segunda.as
        //         },
        //         terca: {
        //           de: estabelecimento.horario.terca.de,
        //           as: estabelecimento.horario.terca.as
        //         },
        //         quarta: {
        //           de: estabelecimento.horario.quarta.de,
        //           as: estabelecimento.horario.quarta.as
        //         },
        //         quinta: {
        //           de: estabelecimento.horario.quinta.de,
        //           as: estabelecimento.horario.quinta.as
        //         },
        //         sexta: {
        //           de: estabelecimento.horario.sexta.de,
        //           as: estabelecimento.horario.sexta.as
        //         },
        //         sabado: {
        //           de: estabelecimento.horario.sabado.de,
        //           as: estabelecimento.horario.sabado.as
        //         },
        //         domingo: {
        //           de: estabelecimento.horario.domingo.de,
        //           as: estabelecimento.horario.domingo.as
        //         }
        //       }
        //     });
        //
        //
        //     const sub = this.estabelecimentosEnderecosService.getByField('estabelecimentoKey', this.key).subscribe((enderecos: any) => {
        //       sub.unsubscribe();
        //       var i;
        //       for (i = 0; i< enderecos.length; i++){
        //         if (i != 0)
        //           this.addEndereco();
        //
        //         this.enderecos.at(i).patchValue({
        //           keyEndereco: enderecos[i].key,
        //           cep: enderecos[i].cep,
        //           estado: enderecos[i].estado,
        //           cidade: enderecos[i].cidade,
        //           rua: enderecos[i].rua,
        //           numero: enderecos[i].numero,
        //           complemento: enderecos[i].complemento
        //         });
        //       }
        //     });
        //
        //     const subi = this.estabelecimentosImagensService.getByField('estabelecimentoKey', this.key).subscribe((imagens: any) => {
        //       subi.unsubscribe();
        //       this.imagensEstabelecimento = imagens;
        //       imagens.forEach((imagem) => {
        //         this.filesUrl.push(imagem.imagem);
        //         this.filesPath.push(imagem.filePath);
        //       });
        //     });
        //
        //     this.logoUrl = estabelecimento.logo || '';
        //     this.fileLogoPath = estabelecimento.fileLogoPath || '';
        //     this.formEstabelecimento.updateValueAndValidity();
        //   });
        // }
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
            this.formBuilder.group({ id: 0, nome: 'Dinheiro', isChecked: false }),
            this.formBuilder.group({ id: 1, nome: 'Cartão de crédito', isChecked: false }),
            this.formBuilder.group({ id: 2, nome: 'Cartão de débito', isChecked: false }),
            this.formBuilder.group({ id: 3, nome: 'Ticket', isChecked: false }),
            this.formBuilder.group({ id: 4, nome: 'Pix', isChecked: false }),
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
        // if (this.key) this.estabelecimentosService.removeLogo(this.fileLogoPath, this.key);
        this.logoUrl = '';
        this.fileLogoPath = '';
    }
    // setCategoriaNome(categoriaKey: string){
    //   const categ = this.categoriaService.getByKey(categoriaKey).subscribe((categoria: any) => {
    //     categ.unsubscribe();
    //     this.setSubcategoriasByCategoria(categoriaKey);
    //     this.categoriaNome.setValue(categoria.nome);
    //   });
    // }
    //
    // setSubcategoriasByCategoria(categoriaKey: string){
    //   this.subcategorias =  this.subcategoriaService.getByCategoriaKey(categoriaKey);
    // }
    //
    // setSubcategoriaNome(subcategoriaKey: string){
    //   const subcateg = this.subcategoriaService.getByKey(subcategoriaKey).subscribe((subcategoria: any) => {
    //     subcateg.unsubscribe();
    //     this.subcategoriaNome.setValue(subcategoria.nome);
    //   });
    // }
    //
    // setProprietariosEmail(event){
    //   if (event){
    //     this.proprietariosUid.patchValue(event);
    //     const nomes = [];
    //     this.proprietariosUid.value.forEach(id => {
    //       const sub = this.usuarioService.getById(id).subscribe((user: any) => {
    //         sub.unsubscribe();
    //         nomes.push(user.email);
    //       });
    //     });
    //     this.proprietariosEmail.patchValue(nomes);
    //   }
    // }
    //
    addEndereco() {
        // this .enderecos = this.formEstabelecimento.get('enderecos') as FormArray;
        this.enderecos.push(this.criarFormularioEndereco());
    }
    removeEndereco(i) {
        // if(this.key)
        // this.estabelecimentosEnderecosService.remove(this.enderecos.at(i).get('keyEndereco').value);
        this.enderecos.removeAt(i);
    }
    // buscaCEP(i: number){
    //   // this.enderecos = this.formEstabelecimento.get('enderecos') as FormArray;
    //   const endereco = this.enderecos.at(i).value;
    //   this.viacep
    //     .buscarPorCep(endereco.cep)
    //     .subscribe((response: any) => {
    //       console.log(response);
    //       this.enderecos.at(i).patchValue({
    //         estado: response.uf,
    //         cidade: response.localidade,
    //         rua: response.logradouro,
    //       });
    //     });
    // }
    //
    // uploadImagem(event: any){
    //   if (event.target.files.length == 1){
    //     this.files.push(event.target.files[0]);
    //
    //     this.formEstabelecimento.get('imagens').updateValueAndValidity();
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       this.imagensEstabelecimento.push({ imagem: reader.result.toString() });
    //     };
    //     reader.readAsDataURL(this.files[this.files.length-1]);
    //   }else{
    //     Array.prototype.forEach.call(event.target.files, file => {
    //       this.files.push(file);
    //
    //       this.formEstabelecimento.get('imagens').updateValueAndValidity();
    //       const reader = new FileReader();
    //       reader.onload = () => {
    //         const fileImg = {
    //           imagem: reader.result.toString()
    //         };
    //         this.imagensEstabelecimento.push(fileImg);
    //       };
    //       reader.readAsDataURL(this.files[this.files.length-1]);
    //     });
    //   }
    // }
    //
    // removeImagem(i: number, key: string){
    //   // if (this.key) this.estabelecimentosService.removeLogo(this.fileLogoPath, this.key);
    //   if (key){
    //     this.estabelecimentosImagensService.remove(key, this.filesPath[i]);
    //   }
    //   this.filesUrl.splice(i, 1);
    //   this.filesPath.splice(i, 1);
    //   this.imagensEstabelecimento.splice(i, 1);
    // }
    //
    //
    //
    // onCheckHorarioChange(event) {
    //   const formArray: FormArray = this.formEstabelecimento.get('formasPagamento') as FormArray;
    //
    //   if (event.target.checked) {
    //     formArray.push(this.formBuilder.control(event.target.value));
    //   }else{
    //     let i = 0;
    //
    //     formArray.controls.forEach((ctrl: FormControl) => {
    //       if(ctrl.value === event.target.value) {
    //         formArray.removeAt(i);
    //         return;
    //       }
    //       i++;
    //     });
    //   }
    // }
    onSubmit() {
        // if (this.formEstabelecimento.valid){
        //   let result: Promise<{}>;
        //   const estabelecimentoObj = this.formEstabelecimento.value;
        //   delete estabelecimentoObj.logo;
        //
        //   if (this.key) {
        //     result = this.estabelecimentosService.update(this.key, estabelecimentoObj);
        //   } else {
        //     result = this.estabelecimentosService.insert(estabelecimentoObj);
        //   }
        //
        //   const enderecos = this.formEstabelecimento.get('enderecos').value;
        //   result.then((key: string) => {
        //     var i;
        //     for (i = 0; i< enderecos.length; i++){
        //       console.log(enderecos[i]);
        //       const keyEndereco = enderecos[i].keyEndereco;
        //       enderecos[i].estabelecimentoKey = key;
        //       delete enderecos[i].keyEndereco;
        //
        //       if(keyEndereco){
        //         this.estabelecimentosEnderecosService.update(keyEndereco, enderecos[i]);
        //       }else{
        //         this.estabelecimentosEnderecosService.insert(enderecos[i]);
        //       }
        //     }
        //   });
        //
        //
        //   if (this.fileLogo) {
        //     result.then((key: string) => {
        //       this.estabelecimentosService.uploadLogo(key, this.fileLogo);
        //       this.criarGroupFormLogo();
        //     });
        //   }
        //
        //   if (this.files.length) {
        //     result.then((key: string) => {
        //       this.files.forEach(file => this.estabelecimentosImagensService.uploadImg(key, file));
        //     });
        //   }
        //
        //   this.criarFormulario();
        //
        //
        //   this.toast.showSuccess('Estabelecimento salvo');
        //   this.router.navigate(['/estabelecimentos']);
        // }
    }
};
CadastroPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__["NgxViacepService"] }
];
CadastroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cadastro',
        template: _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CadastroPage);



/***/ }),

/***/ "Iv4U":
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CadastroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageRoutingModule", function() { return CadastroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.page */ "AYIN");




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_3__["CadastroPage"]
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CadastroPageRoutingModule);



/***/ }),

/***/ "j0Tv":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cadastro-estabelecimento-card {\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n}\n\n.adicionar-button {\n  margin-top: 50px;\n  padding: 15px;\n  color: #f2f2f2;\n}\n\nion-button {\n  --border-radius: 35px;\n  margin-top: 15px;\n  border-radius: 35px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: normal;\n  color: #333333;\n}\n\np, .sub-title, ion-list-header {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n}\n\n.sub-title {\n  padding-left: 21px;\n  margin-bottom: 0px;\n}\n\nion-item, ion-list-header, .sub-title {\n  --padding-start: 0px;\n  padding-left: 0px;\n}\n\n.btn-add-end {\n  font-size: 12px;\n}\n\n.btn-rmv-end {\n  position: absolute;\n  right: 0px;\n  font-size: 10px;\n  margin-top: 10px;\n  z-index: 100;\n}\n\n.enderecos-content {\n  max-height: 750px;\n  overflow-y: auto;\n  padding: 10px;\n}\n\n.enderecos-content::-webkit-scrollbar {\n  width: 4px;\n}\n\n.enderecos-content::-webkit-scrollbar-thumb {\n  background-color: #d6b46a;\n  outline: 1px solid #ccccc;\n  border-radius: 3px;\n}\n\nhr {\n  width: 100%;\n  height: 1px;\n  background-color: #b3b3b3;\n  margin: 20px 0px;\n}\n\nion-label {\n  font-size: 12px;\n  font-weight: medium;\n  color: #7c7b7b;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\nion-checkbox {\n  border-bottom: 1px solid #f1f1f1;\n  --border-radius: 0px;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0FBQUY7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUdGOztBQUZFO0VBQ0UsVUFBQTtBQUlKOztBQUdFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQVRGOztBQWFBO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtBQVZGIiwiZmlsZSI6ImNhZGFzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY3Vwb21cbi5jYWRhc3Ryby1lc3RhYmVsZWNpbWVudG8tY2FyZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwwLDAsMC4yOSk7XG59XG4uYWRpY2lvbmFyLWJ1dHRvbntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmMmYyZjI7XG59XG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMjkpO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxucCwgLnN1Yi10aXRsZSwgaW9uLWxpc3QtaGVhZGVye1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gIGNvbG9yOiAjN2M3YjdiO1xufVxuXG4uc3ViLXRpdGxle1xuICBwYWRkaW5nLWxlZnQ6IDIxcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaW9uLWl0ZW0sIGlvbi1saXN0LWhlYWRlciwgLnN1Yi10aXRsZXtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uYnRuLWFkZC1lbmR7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ0bi1ybXYtZW5ke1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uZW5kZXJlY29zLWNvbnRlbnR7XG4gIG1heC1oZWlnaHQ6IDc1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICAmOjotd2Via2l0LXNjcm9sbGJhcntcbiAgICB3aWR0aDogNHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC8vYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2YjQ2YTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2NjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxufVxuLy9pb24taW5wdXR7XG4vLyAgYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcbi8vICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgbWFyZ2luLXRvcDogMTBweDtcbi8vICBwYWRkaW5nOiA1cHggMTVweCFpbXBvcnRhbnQ7XG4vLyAgZm9udC1zaXplOiAxNHB4O1xuLy99XG5cbmhye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2IzYjM7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbmlvbi1sYWJlbHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbWVkaXVtO1xuICBjb2xvcjogIzdjN2I3YjtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuXG59XG5cbmlvbi1jaGVja2JveHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG5pbnB1dFt0eXBlPWZpbGVde1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "whE1":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>cadastro</ion-title>\n    <ion-back-button slot=\"start\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"cadastro-estabelecimento-card\">\n          <form [formGroup]=\"formEstabelecimento\" (ngSubmit)=\"onSubmit()\">\n\n            <ion-list>\n              <ion-list-header>Informações do Estabelecimento</ion-list-header>\n              <ion-item *ngIf=\"logoUrl ==''\">\n                <!--              <ion-label position=\"stacked\">Foto</ion-label>-->\n                <ion-button color=\"primary\" (click)=\"logoInput.click()\">Adicionar Logo</ion-button>\n                <input type=\"file\" #logoInput formControlName=\"logo\" (change)=\"uploadLogo($event)\">\n              </ion-item>\n\n              <ion-item *ngIf=\"logoUrl !=''\">\n\n                <ion-thumbnail slot=\"start\">\n                  <img [src]=\"logoUrl\">\n                </ion-thumbnail>\n                <ion-button color=\"danger\" (click)=\"removeLogo()\">Remover Logo</ion-button>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Nome</ion-label>\n                <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Categoria</ion-label>\n\n                <ion-select placeholder=\"Escolher\" formControlName=\"categoriaKey\" [selectedText]=\"formEstabelecimento.get('categoriaNome').value\" (ionChange)=\"setCategoriaNome($event.target.value)\">\n                  <ion-select-option *ngFor=\"let categoria of categorias | async\" value=\"{{categoria.key}}\">{{categoria.nome}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item *ngIf=\"(subcategorias | async)?.length > 0\">\n                <ion-label position=\"stacked\">Subcategoria</ion-label>\n\n                <ion-select placeholder=\"Escolher\" formControlName=\"subcategoriaKey\" [selectedText]=\"formEstabelecimento.get('subcategoriaNome').value\" (ionChange)=\"setSubcategoriaNome($event.target.value)\">\n                  <ion-select-option *ngFor=\"let subcategoria of subcategorias | async\" value=\"{{subcategoria.key}}\">{{subcategoria.nome}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n\n              <ion-item>\n                <ion-label position=\"stacked\">CNPJ</ion-label>\n                <ion-input type=\"text\" formControlName=\"cnpj\" ></ion-input>\n              </ion-item>\n            </ion-list>\n\n<!--            <ion-item>-->\n<!--              <ion-label position=\"stacked\">Proprietários</ion-label>-->\n\n<!--              <ion-select placeholder=\"Escolher\" formControlName=\"proprietariosUid\" multiple=\"true\" (ionChange)=\"setProprietariosEmail($event.target.value)\">-->\n<!--                <ion-select-option *ngFor=\"let membro of membros | async\" value=\"{{membro.uid}}\" >{{membro.email}}</ion-select-option>-->\n<!--              </ion-select>-->\n<!--            </ion-item>-->\n\n\n\n            <!--          <div class=\"enderecos-content\">-->\n            <!--            <div formArrayName=\"enderecos\" *ngFor=\"let endereco of formEstabelecimento.get('enderecos')['controls']; let i = index;\">-->\n            <!--              <ion-list  [formGroupName]=\"i\" >-->\n            <!--                <ion-list-header>Endereço {{ i+1 }}</ion-list-header>-->\n            <!--&lt;!&ndash;                <ion-button color=\"danger\" (click)=\"removeEndereco(i)\">Remover Endereço</ion-button>&ndash;&gt;-->\n            <!--                <ion-item>-->\n            <!--                  <ion-label position=\"stacked\">Cep</ion-label>-->\n            <!--                  <ion-input type=\"text\" formControlName=\"cep\"></ion-input>-->\n            <!--                </ion-item>-->\n\n\n            <ion-list formGroupName=\"contato\">\n              <ion-list-header>Contato</ion-list-header>\n              <ion-item>\n                <ion-label position=\"stacked\">Telefone</ion-label>\n                <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                <ion-input type=\"text\" formControlName=\"telefone\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">E-mail</ion-label>\n                <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Site</ion-label>\n                <ion-input type=\"text\" formControlName=\"site\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Facebook</ion-label>\n                <ion-input type=\"text\" formControlName=\"facebook\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Instagram</ion-label>\n                <ion-input type=\"text\" formControlName=\"instagram\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <!--              </ion-list>-->\n            <!--            </div>-->\n            <!--          </div>-->\n\n            <ion-list-header>Endereços</ion-list-header>\n            <ion-button class=\"btn-add-end\" color=\"primary\" (click)=\"addEndereco()\">Adicionar Endereco</ion-button>\n            <div class=\"enderecos-content\">\n              <div formArrayName=\"enderecos\" *ngFor=\"let endereco of formEstabelecimento.get('enderecos')['controls']; let i = index;\">\n                <ion-list  [formGroupName]=\"i\" >\n                  <ion-button *ngIf=\"i != 0\" class=\"btn-rmv-end\" color=\"danger\" (click)=\"removeEndereco(i)\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n                  <ion-list-header>Endereço {{ i+1 }}</ion-list-header>\n                  <ion-item>\n                    <ion-label position=\"stacked\">Cep</ion-label>\n                    <ion-input type=\"text\" formControlName=\"cep\" (ionBlur)=\"buscaCEP(i)\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Estado</ion-label>\n                    <ion-input type=\"text\" formControlName=\"estado\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Cidade</ion-label>\n                    <ion-input type=\"text\" formControlName=\"cidade\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Rua</ion-label>\n                    <ion-input type=\"text\" formControlName=\"rua\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Numero</ion-label>\n                    <ion-input type=\"text\" formControlName=\"numero\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\">Complemento</ion-label>\n                    <ion-input type=\"text\" formControlName=\"complemento\"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </div>\n            </div>\n\n\n\n            <ion-list formArrayName=\"formasPagamento\">\n              <ion-list-header>Formas de Pagamento</ion-list-header>\n              <ion-item *ngFor=\"let forma of formasPagamento.controls; let i = index\" formGroupName=\"{{ i }}\">\n                <ion-label>{{ forma.get('nome').value }}</ion-label>\n                <ion-checkbox slot=\"end\" [formControl]=\"forma.get('isChecked')\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n\n            <!--          <ion-list formGroupName=\"horario\">-->\n            <!--            <ion-list-header>Horário de funcionamento</ion-list-header>-->\n\n            <!--            <ion-item *ngFor=\"let dia of dias\">-->\n            <!--              <ion-label>{{dia.nome}}</ion-label>-->\n            <!--              <ion-checkbox slot=\"end\" [value]=\"dia.value\" (ionChange)=\"onCheckHorarioChange($event)\"></ion-checkbox>-->\n            <!--            </ion-item>-->\n            <!--          </ion-list>-->\n\n            <div class=\"enderecos-content\">\n              <!--            <div formArrayName=\"imagens\" *ngFor=\"let imagem of formEstabelecimento.get('imagens')['controls']; let i = index;\">-->\n              <div formArrayName=\"imagens\">\n                <ion-list [formGroupName]=\"0\">\n                  <ion-list-header>Imagens</ion-list-header>\n\n                  <ion-item>\n                    <!--                <ion-item *ngFor=\"let imagem of imagens.controls; let i=index\">-->\n                    <ion-button color=\"primary\" (click)=\"imagemInput.click()\">Adicionar Imagem</ion-button>\n                    <input type=\"file\" multiple #imagemInput  (change)=\"uploadImagem($event)\">\n                  </ion-item>\n                </ion-list>\n              </div>\n\n              <ion-item *ngFor=\"let file of imagensEstabelecimento; let i = index\">\n\n                <ion-thumbnail slot=\"start\">\n                  <img [src]=\"file.imagem\">\n                </ion-thumbnail>\n                <ion-button color=\"danger\" (click)=\"removeImagem(i, file.key)\">Remover Imagem</ion-button>\n              </ion-item>\n            </div>\n\n\n\n            <ion-list formGroupName=\"horario\">\n              <ion-list-header>Horário</ion-list-header>\n\n              <div formGroupName=\"segunda\">\n                <p class=\"sub-title\">Segunda-feira</p>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Abre às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Fecha às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n\n              <div formGroupName=\"terca\">\n                <p class=\"sub-title\">Terça-feira</p>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Abre às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Fecha às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n\n              <div formGroupName=\"quarta\">\n                <p class=\"sub-title\">Quarta-feira</p>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Abre às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Fecha às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n\n              <div formGroupName=\"quinta\">\n                <p class=\"sub-title\">Quinta-feira</p>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Abre às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Fecha às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n\n              <div formGroupName=\"sexta\">\n                <p class=\"sub-title\">Sexta-feira</p>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Abre às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Fecha às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n\n              <div formGroupName=\"sabado\">\n                <p class=\"sub-title\">Sábado</p>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Abre às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Fecha às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n\n              <div formGroupName=\"domingo\">\n                <p class=\"sub-title\">Domingo</p>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Abre às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"de\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-label position=\"stacked\">Fecha às:</ion-label>\n                        <!--              <input type=\"text\" formControlName=\"telefone\" mask=\"(000) 000-0000\">-->\n                        <ion-input type=\"text\" formControlName=\"as\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n\n\n\n\n            </ion-list>\n\n\n            <div margin-vertical>\n              <ion-button color=\"primary\" expand=\"block\" type=\"submit\" [disabled]=\"formEstabelecimento.invalid\">Salvar</ion-button>\n            </div>\n          </form>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=cadastro-cadastro-module.js.map