import { TestBed } from '@angular/core/testing';

import { RuteoComponentesService } from './ruteo-componentes.service';

describe('RuteoComponentesService', () => {
  let service: RuteoComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuteoComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
