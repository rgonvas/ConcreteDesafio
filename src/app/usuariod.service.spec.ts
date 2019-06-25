import { TestBed, inject } from '@angular/core/testing';

import { UsuariodService } from './usuariod.service';

describe('UsuariodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuariodService]
    });
  });

  it('should be created', inject([UsuariodService], (service: UsuariodService) => {
    expect(service).toBeTruthy();
  }));
});
