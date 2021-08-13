import { TestBed } from '@angular/core/testing';

import { EstabelecimentosEnderecosService } from './estabelecimentos-enderecos.service';

describe('EstabelecimentosEnderecosService', () => {
  let service: EstabelecimentosEnderecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstabelecimentosEnderecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
