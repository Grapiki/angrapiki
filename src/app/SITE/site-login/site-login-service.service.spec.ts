import { TestBed } from '@angular/core/testing';

import { SiteLoginServiceService } from './site-login-service.service';

describe('SiteLoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteLoginServiceService = TestBed.get(SiteLoginServiceService);
    expect(service).toBeTruthy();
  });
});
