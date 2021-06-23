import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastService} from '../../core/services/toast.service';
import {CupomService} from '../shared/cupons.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  form: FormGroup;
  key: string;
  private file: File = null;
  imagemUrl: string = '';
  filePath: string = '';

  constructor(
    private cuponsService: CupomService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: [''],
      status: [''],
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
      cupom.estabelecimentoKey = '-MafQrPR4t4_2Ccq_KCw';

      if (this.key) {
        result = this.cuponsService.update(cupom, this.key);
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
      this.toast.showSuccess('Cupom inserido com sucesso');
      this.router.navigate(['/tabs/cupons']);
    }
  }

}
