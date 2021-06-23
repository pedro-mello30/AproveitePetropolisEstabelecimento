import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CupomService} from './shared/cupons.service';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {

  cupons;

  constructor(
    private cuponsService: CupomService
  ) { }

  ngOnInit() {
    const estabelecimentoKey = '-MafQrPR4t4_2Ccq_KCw';
    const cuponsSub = this.cuponsService.getByField('estabelecimentoKey', estabelecimentoKey).subscribe((cupons) => {
      cuponsSub.unsubscribe();
      this.cupons = cupons;
    });
  }

}
