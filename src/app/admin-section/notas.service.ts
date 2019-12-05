import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private httpClient:HttpClient) { }
  getCategoriasPublicion():Promise<any> {
    const url = "https://zona-docs-api.herokuapp.com/categoriasPublicacion";
    return this.httpClient.get(url).toPromise();
  }

}
