import { TestBed, inject } from '@angular/core/testing';

import { StuDataService } from './stu-data.service';

describe('StuDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StuDataService]
    });
  });

  it('should be created', inject([StuDataService], (service: StuDataService) => {
    expect(service).toBeTruthy();
  }));
});
