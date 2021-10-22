import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContendersCoupleDto } from './Models/ContendersCoupleDto';
import { IChallengeResult } from './Models/IChallengeResult';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  constructor(
    private _httpClient: HttpClient) { }

    getVotes() {
      return this._httpClient
      .get<number>("https://localhost:5001/Challenge/GetTotalVotes", httpOptions);
    }

    setChallengeResult(challengeResult: IChallengeResult ) {
      return this._httpClient
        .post<ContendersCoupleDto>("https://localhost:5001/Challenge/Add", challengeResult, httpOptions);
    }
}
