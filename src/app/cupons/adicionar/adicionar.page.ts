import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastService} from '../../core/services/toast.service';
import {CupomService} from '../shared/cupons.service';
import {EstabelecimentoService} from '../../estabelecimento/shared/estabelecimento.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  title: string = "Adicionar";
  form: FormGroup;
  key: string;
  private file: File = null;
  imagemUrl: string = '';
  filePath: string = '';

  estabelecimentoKey: string;

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private cuponsService: CupomService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) { }


  ngOnInit() {
    this.estabelecimentoKey = this.estabelecimentoService.getEstalebelicimentoKey();
    this.criarFormulario();
    const key = this.route.snapshot.paramMap.get('key');

    if (key){
      this.title = "Gerenciar";
      const subscribe = this.cuponsService.getByKey(key).subscribe((cupom : any) => {
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

  criarFormulario(){
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: [''],
      status: [true],
      imagem: [''],
    });

    this.file = null;
    this.imagemUrl = '';
    this.filePath = '';
  }

  get status() { return this.form.get('status'); }

  uploadImagem(event: any){
    if (event.target.files.length){
      this.file = event.target.files[0];
      this.form.get('imagem').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemUrl = reader.result.toString();
      };
      reader.readAsDataURL(this.file);
    }else{
      this.file = null;
    }
  }

  removeImagem(){
    if (this.key) this.cuponsService.removeImg(this.filePath, this.key);

    this.imagemUrl = '';
    this.filePath = '';
  }

  toggleChange(event){
    console.log(event.value);
    this.form.get('status').setValue(event.value);
  }

  onSubmit(){
    if(this.form.valid){
      let result: Promise<{}>;

      const cupom = this.form.value;
      cupom.estabelecimentoKey = this.estabelecimentoKey;

      if (this.key) {
        result = this.cuponsService.update(this.key, cupom);
      } else {
        result = this.cuponsService.insert(cupom);
      }

      if (this.file) {
        result.then((key: string) => {
          this.cuponsService.uploadImg(key, this.file);
          this.criarFormulario();
        });
      } else {
        this.criarFormulario();
      }
      this.toast.showSuccess('Cupom salvo com sucesso');
      this.router.navigate(['/tabs/cupons']);
    }
  }

}
