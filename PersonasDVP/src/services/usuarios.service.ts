import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoInterface } from 'src/models/userinfo.class';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient, 
             
               private router: Router
  ) { }

  url_api = 'https://localhost:7265'

  async LoginUsers(userInfoInterface: UserInfoInterface): Promise<Observable<any>>{

    console.log(userInfoInterface);

    return await this.http.post<any>(`${this.url_api}/api/Account/Login`, userInfoInterface, httpOptions)
    }

    
}
