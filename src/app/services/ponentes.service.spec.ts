import { TestBed } from '@angular/core/testing';

import { PonentesService } from './ponentes.service';

describe('PonentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PonentesService = TestBed.get(PonentesService);
    expect(service).toBeTruthy();
  });
});
