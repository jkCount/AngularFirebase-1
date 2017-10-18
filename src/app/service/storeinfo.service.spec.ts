import { TestBed, inject } from '@angular/core/testing';

import { StoreinfoService } from './storeinfo.service';

describe('StoreinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreinfoService]
    });
  });

  it('should be created', inject([StoreinfoService], (service: StoreinfoService) => {
    expect(service).toBeTruthy();
  }));
});
