import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApp } from 'src/models/api.class';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url_api = "https://api.github.com/search/users?q=Roberth"

  constructor(private http: HttpClient) { }

  async getApi(): Promise<Observable<any>> {
    return this.http.get<any>(this.url_api)
  }
}


