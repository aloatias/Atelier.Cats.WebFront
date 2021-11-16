import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatsCouple } from './Models/ICatsCouple';
import { IChallengeResult } from './Models/IChallengeResult';
import { IWinner } from './Models/IWinner';
import { environment } from './../environments/environment';
import { GLobalUrls } from './common/GlobalUrls';

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

  getContenders(): Observable<ICatsCouple> {
    return this._httpClient
      .get<ICatsCouple>(environment.apiUrl + GLobalUrls.getContenders, httpOptions);
  }

  getVotes() : Observable<IWinner[]> {
    return this._httpClient
      .get<IWinner[]>(environment.apiUrl + GLobalUrls.getVotes, httpOptions);
  }

  getVotesCount(): Observable<number> {
    return this._httpClient
      .get<number>(environment.apiUrl + GLobalUrls.getVotesCount, httpOptions);
  }

  setChallengeResult(challengeResult: IChallengeResult) {
    return this._httpClient
      .post(environment.apiUrl + GLobalUrls.setChallengeResult, challengeResult, httpOptions);
  }
}
