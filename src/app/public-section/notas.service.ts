import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private httpClient:HttpClient) { 
  }

  getPublicacionesByCategoria():Promise<any>{
  }
}
