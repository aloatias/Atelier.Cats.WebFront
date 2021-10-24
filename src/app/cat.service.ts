import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatsCouple } from './Models/ICatsCouple';
import { IChallengeResult } from './Models/IChallengeResult';
import { IWinner } from './Models/IWinner';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(
    private _httpClient: HttpClient) { }
    getContenders() : Observable<ICatsCouple> {
      return this._httpClient
        .get<ICatsCouple>("https://localhost:5001/Cat/GetContenders", httpOptions);
    }

    getVotes() {
      return this._httpClient
      .get<IWinner[]>("https://localhost:5001/Cat/GetWinners", httpOptions);
    }

    getVotesCount() {
      return this._httpClient
      .get<number>("https://localhost:5001/Challenge/GetTotalVotes", httpOptions);
    }

    setChallengeResult(challengeResult: IChallengeResult ) {
      return this._httpClient
        .post<ICatsCouple>("https://localhost:5001/Challenge/Add", challengeResult, httpOptions);
    }
}
