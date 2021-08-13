import { TestBed } from '@angular/core/testing';

import { EstabelecimentosImagensService } from './estabelecimentos-imagens.service';

describe('EstabelecimentosImagensService', () => {
  let service: EstabelecimentosImagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstabelecimentosImagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
