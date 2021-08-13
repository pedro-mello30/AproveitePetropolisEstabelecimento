import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriasService} from '../shared/categorias.service';
import {ToastService} from '../../core/services/toast.service';
import {EstabelecimentosService} from '../shared/estabelecimentos.service';
import {from, Observable} from 'rxjs';
import {SubcategoriasService} from '../shared/subcategorias.service';
import {EstabelecimentosEnderecosService} from '../shared/estabelecimentos-enderecos.service';
import {EstabelecimentosImagensService} from '../shared/estabelecimentos-imagens.service';

import { NgxViacepService } from "@brunoc/ngx-viacep";
import {DiasTypeEnum} from '../shared/dias.type.enum';
import {FormaPagamentoTypeEnum} from '../shared/forma-pagamento.type.enum';
import {AngularFireAuth} from "@angular/fire/auth";
import {UsuarioAuthService} from "../../login/shared/usuario-auth.service";

@Component({
  selector: 'app-estabelecimentos-form',
  templateUrl: './estabelecimentos-form.page.html',
  styleUrls: ['./estabelecimentos-form.page.scss'],
})
export class EstabelecimentosFormPage implements OnInit {

  public title = 'Novo Estabelecimento';

  formEstabelecimento: FormGroup;
  // enderecos: FormArray;

  key: string;

  private fileLogo: File = null;
  logoUrl: string = '';
  fileLogoPath: string = '';

  categorias: Observable<any[]>;
  subcategorias: Observable<any[]>;
  membros: Observable<any[]>;
  proprietarios: string[] = [];

  // formaPagamentos = [
  //   {nome: 'Dinheiro', value: FormaPagamentoTypeEnum.Dinheiro, isChecked: false},
  //   {nome: 'Cartão de crédito', value: FormaPagamentoTypeEnum.Credito, isChecked: false},
  //   {nome: 'Cartão de débito', value: FormaPagamentoTypeEnum.Debito, isChecked: false},
  //   {nome: 'Ticket', value: FormaPagamentoTypeEnum.Ticket, isChecked: false},
  //   {nome: 'Pix', value: FormaPagamentoTypeEnum.Pix, isChecked: false},
  //   ];

  dias = [
    {nome: 'Segunda-feira', value: DiasTypeEnum.Segunda},
    {nome: 'Terça-feira', value: DiasTypeEnum.Terca},
    {nome: 'Quarta-feira', value: DiasTypeEnum.Quarta},
    {nome: 'Quinta-feira', value: DiasTypeEnum.Quinta},
    {nome: 'Sexta-feira', value: DiasTypeEnum.Sexta},
    {nome: 'Sábado', value: DiasTypeEnum.Sabado},
    {nome: 'Domingo', value: DiasTypeEnum.Domingo},
  ];

  private files: File[] = [];
  filesUrl: string[] = [];
  filesPath: string[] = [];
  imagensEstabelecimento = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private estabelecimentosService: EstabelecimentosService,
    private estabelecimentosImagensService: EstabelecimentosImagensService,
    private estabelecimentosEnderecosService: EstabelecimentosEnderecosService,
    private categoriaService: CategoriasService,
    private subcategoriaService: SubcategoriasService,
    private afAuth: AngularFireAuth,
    private usuariosService: UsuarioAuthService,
    private toast: ToastService,
    private viacep: NgxViacepService
  ) { }

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


    if (key){
      this.title = 'Editar Estabelecimento';
      const subscribe = this.estabelecimentosService.getByKey(key).subscribe((estabelecimento: any) => {
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


        const sub = this.estabelecimentosEnderecosService.getByField('estabelecimentoKey', this.key).subscribe((enderecos: any) => {
          sub.unsubscribe();
          var i;
          for (i = 0; i< enderecos.length; i++){
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

        const subi = this.estabelecimentosImagensService.getByField('estabelecimentoKey', this.key).subscribe((imagens: any) => {
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
  get enderecos() { return this.formEstabelecimento.get('enderecos') as FormArray; }
  get formasPagamento() { return this.formEstabelecimento.get('formasPagamento') as FormArray; }
  get imagens() { return this.formEstabelecimento.get('imagens') as FormArray; }

  criarFormulario(){
    this.formEstabelecimento = this.formBuilder.group({
      nome: ['', Validators.required],
      logo: [''],
      categoriaKey: ['', Validators.required],
      categoriaNome: ['', Validators.required],
      subcategoriaKey: [''],
      subcategoriaNome: [''],
      proprietariosUid: [''],
      proprietariosEmail: [''],
      cnpj: ['', Validators.required],
      contato: this.formBuilder.group({
        telefone: ['', Validators.required],
        // email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        email: ['', [Validators.required, Validators.email]],
        site: [''],
        facebook: [''],
        instagram: [''],
      }),
      enderecos: this.formBuilder.array([ this.criarFormularioEndereco() ]),
      imagens: this.formBuilder.array([ this.criarFormularioImagem() ]),
      formasPagamento: this.criarFormularioPagamento(),
      horario: this.formBuilder.group(this.criarFormularioHorario()),
    });


  }

  criarGroupFormLogo(){
    this.fileLogo = null;
    this.logoUrl = '';
    this.fileLogoPath = '';
  }

  criarFormularioEndereco(): FormGroup{
    return this.formBuilder.group({
      keyEndereco: [''],
      cep: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['']
    });
  }



  criarFormularioPagamento() {
    return this.formBuilder.array([
      this.formBuilder.group({id: FormaPagamentoTypeEnum.Dinheiro, nome: 'Dinheiro', isChecked: false}),
      this.formBuilder.group({id: FormaPagamentoTypeEnum.Credito, nome: 'Cartão de crédito', isChecked: false}),
      this.formBuilder.group({id: FormaPagamentoTypeEnum.Debito, nome: 'Cartão de débito', isChecked: false}),
      this.formBuilder.group({id: FormaPagamentoTypeEnum.Ticket, nome: 'Ticket', isChecked: false}),
      this.formBuilder.group({id: FormaPagamentoTypeEnum.Pix, nome: 'Pix', isChecked: false}),
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

  criarFormularioImagem(): FormGroup{
    return this.formBuilder.group({
      imagem: ['']
    });
  }

  uploadLogo(event: any){
    if (event.target.files.length){
      this.fileLogo = event.target.files[0];
      this.formEstabelecimento.get('logo').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.logoUrl = reader.result.toString();
      };
      reader.readAsDataURL(this.fileLogo);
    }else{
      this.fileLogo = null;
    }
  }

  removeLogo(){
    if (this.key) this.estabelecimentosService.removeLogo(this.fileLogoPath, this.key);

    this.logoUrl = '';
    this.fileLogoPath = '';
  }

  setCategoriaNome(categoriaKey: string){
    const categ = this.categoriaService.getByKey(categoriaKey).subscribe((categoria: any) => {
      categ.unsubscribe();
      this.setSubcategoriasByCategoria(categoriaKey);
      this.categoriaNome.setValue(categoria.nome);
    });
  }

  setSubcategoriasByCategoria(categoriaKey: string){
    this.subcategorias =  this.subcategoriaService.getByCategoriaKey(categoriaKey);
  }

  setSubcategoriaNome(subcategoriaKey: string){
    const subcateg = this.subcategoriaService.getByKey(subcategoriaKey).subscribe((subcategoria: any) => {
      subcateg.unsubscribe();
      this.subcategoriaNome.setValue(subcategoria.nome);
    });
  }

  setProprietariosEmail(event){
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

  addEndereco(){
    // this.enderecos = this.formEstabelecimento.get('enderecos') as FormArray;
    this.enderecos.push(this.criarFormularioEndereco());
  }

  removeEndereco(i: number){
    if(this.key)
      this.estabelecimentosEnderecosService.remove(this.enderecos.at(i).get('keyEndereco').value);

    this.enderecos.removeAt(i);
  }

  buscaCEP(i: number){
    // this.enderecos = this.formEstabelecimento.get('enderecos') as FormArray;
    const endereco = this.enderecos.at(i).value;
    this.viacep
      .buscarPorCep(endereco.cep)
      .subscribe((response: any) => {
        console.log(response);
        this.enderecos.at(i).patchValue({
          estado: response.uf,
          cidade: response.localidade,
          rua: response.logradouro,
        });
      });
  }

  uploadImagem(event: any){
    if (event.target.files.length == 1){
      this.files.push(event.target.files[0]);

      this.formEstabelecimento.get('imagens').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagensEstabelecimento.push({ imagem: reader.result.toString() });
      };
      reader.readAsDataURL(this.files[this.files.length-1]);
    }else{
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
        reader.readAsDataURL(this.files[this.files.length-1]);
      });
    }
  }

  removeImagem(i: number, key: string){
    // if (this.key) this.estabelecimentosService.removeLogo(this.fileLogoPath, this.key);
    if (key){
      this.estabelecimentosImagensService.remove(key, this.filesPath[i]);
    }
    this.filesUrl.splice(i, 1);
    this.filesPath.splice(i, 1);
    this.imagensEstabelecimento.splice(i, 1);
  }



  onCheckHorarioChange(event) {
    const formArray: FormArray = this.formEstabelecimento.get('formasPagamento') as FormArray;

    if (event.target.checked) {
      formArray.push(this.formBuilder.control(event.target.value));
    }else{
      let i = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value === event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit(){
    if (this.formEstabelecimento.valid){
      let result: Promise<{}>;
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
      } else {
        result = this.estabelecimentosService.insert(estabelecimentoObj);
      }

      const enderecos = this.formEstabelecimento.get('enderecos').value;
      result.then((key: string) => {
        var i;
        for (i = 0; i< enderecos.length; i++){
          console.log(enderecos[i]);
          const keyEndereco = enderecos[i].keyEndereco;
          enderecos[i].estabelecimentoKey = key;
          delete enderecos[i].keyEndereco;

          if(keyEndereco){
            this.estabelecimentosEnderecosService.update(keyEndereco, enderecos[i]);
          }else{
            this.estabelecimentosEnderecosService.insert(enderecos[i]);
          }
        }
      });


      if (this.fileLogo) {
        result.then((key: string) => {
          this.estabelecimentosService.uploadLogo(key, this.fileLogo);
          this.criarGroupFormLogo();
        });
      }

      if (this.files.length) {
        result.then((key: string) => {
          this.files.forEach(file => this.estabelecimentosImagensService.uploadImg(key, file));
        });
      }

      this.criarFormulario();


      this.toast.showSuccess('Estabelecimento salvo');
      this.router.navigate(['/estabelecimentos']);
    }
  }

}
