import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient:HttpClient) { }

  getCategorias():Promise<any>{
    return this.httpClient.get(environment.apiUrl+"public/categoriasPublicacion").toPromise();
  }
}
