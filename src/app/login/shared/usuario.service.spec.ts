import { TestBed } from '@angular/core/testing';

import { UsuarioAuthService } from './usuario-auth.service';

describe('UsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioAuthService = TestBed.get(UsuarioAuthService);
    expect(service).toBeTruthy();
  });
});
