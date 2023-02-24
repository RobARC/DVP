import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PersonasInterface } from 'src/components/personas/personas.class';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url_api = 'https://localhost:7265'

  constructor(private http: HttpClient) { }

  async PostPersonas(data: PersonasInterface) {
    console.table(data);
    return await this.http.post(`${this.url_api}/api/Personas`, data).subscribe();
}
}
