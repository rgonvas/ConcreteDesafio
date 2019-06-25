import { TestBed, inject } from '@angular/core/testing';

import { ReposusuarioService } from './reposusuario.service';

describe('ReposusuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReposusuarioService]
    });
  });

  it('should be created', inject([ReposusuarioService], (service: ReposusuarioService) => {
    expect(service).toBeTruthy();
  }));
});
