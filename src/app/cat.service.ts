import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContendersCoupleDto } from './Models/ContendersCoupleDto';

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

    getContenders() : Observable<ContendersCoupleDto> {
      return this._httpClient
        .get<ContendersCoupleDto>("https://localhost:5001/Cat/GetContenders", httpOptions);
    }
}
