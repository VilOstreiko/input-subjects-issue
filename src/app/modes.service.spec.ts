import { TestBed } from '@angular/core/testing';

import { ModesService } from './modes.service';

describe('ModesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModesService = TestBed.get(ModesService);
    expect(service).toBeTruthy();
  });
});
