import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankBranchService {

  constructor(
    private http: HttpClient
  ) { }

  private BANK_BRANCHES_API_URL = `https://app.fyle.in/api/bank_branches`;

  getBankBranches(city: string, offset: number = 0, limit : number = 10): Observable<any> {
    return this.http.get<any>(this.BANK_BRANCHES_API_URL, {
      params: new HttpParams()
        .set('city', city)
        .set('offset', offset.toString())
        .set('limit', limit.toString())
    })
  }
}
