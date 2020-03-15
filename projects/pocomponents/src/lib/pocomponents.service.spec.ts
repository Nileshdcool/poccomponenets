import { TestBed } from '@angular/core/testing';

import { POComponentsService } from './pocomponents.service';

describe('POComponentsService', () => {
  let service: POComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(POComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
