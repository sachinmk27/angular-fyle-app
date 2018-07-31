import { Component, OnInit } from '@angular/core';
import { BankBranchService } from '../bank-branch.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-bank-branches',
  templateUrl: './bank-branches.component.html',
  styleUrls: ['./bank-branches.component.css']
})
export class BankBranchesComponent implements OnInit {

  bankBranches: any;

  selectedCity: string = 'BANGALORE';

  cities: string[] = ['BANGALORE', 'CHENNAI', 'HYDERABAD', 'MYSORE', 'MUMBAI'];

  displayedColumns: string[] = ['bank_id', 'bank_name', 'ifsc', 'branch', 'address', 'city', 'district', 'state'];

  constructor(
    private bankBranchService: BankBranchService
  ) { }

  ngOnInit() {
    this.getBankBranches();
  }

  getBankBranches(): void {
    this.bankBranchService.getBankBranches(this.selectedCity)
      .subscribe( bankBranches => {
        this.bankBranches = new MatTableDataSource(bankBranches);
        console.log(this.bankBranches);
      });
  }

  onCityChange(){
    this.getBankBranches()
  }
  applyFilter(filterValue: string) {
    this.bankBranches.filter = filterValue.trim().toLowerCase();
  }
}
