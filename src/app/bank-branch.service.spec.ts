import { TestBed, inject } from '@angular/core/testing';

import { BankBranchService } from './bank-branch.service';

describe('BankBranchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankBranchService]
    });
  });

  it('should be created', inject([BankBranchService], (service: BankBranchService) => {
    expect(service).toBeTruthy();
  }));
});
