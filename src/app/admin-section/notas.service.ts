import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { Nota } from './nota';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidGlwb1VzdWFyaW8iOjAsImlhdCI6MTU3NTczOTQyMX0.Ri6QS1me34lnkC5b7lu7NLv_oSScOD0vGRO5rP1tOAM';

@Injectable({
  providedIn: 'root'
})

export class NotasService {

  constructor(private httpClient: HttpClient) {
    }

  getCategoriasPublicacion(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    };
    const url = environment.apiUrl + 'categoriasPublicacion';
    return this.httpClient.get(url, httpOptions).toPromise();
  }

  getNotas(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    };
    const url = environment.apiUrl + 'publicaciones';
    return this.httpClient.get(url, httpOptions).toPromise();
  }

  getNotasByUser(usuarioId: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    };
    const url = environment.apiUrl + 'publicaciones?usuarioId=' + usuarioId;
    return this.httpClient.get(url, httpOptions).toPromise();
  }

  getNotaDetail(id: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    };
    const url = `${environment.apiUrl}publicaciones/${id}`;
    return this.httpClient.get(url, httpOptions).toPromise();
  }

  filterNota(fechaInicio: string,
             fechaFin: string,
             usuarioId: number,
             categoriaId: number,
             orderBy: number,
             Limit: number,
             Offset: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    };
    let parametros = '';
    parametros = ('?' + fechaInicio != null ? 'fechaInicio=' + fechaInicio + '&' : '')
                      + (fechaFin != null ? 'fechaFin=' + fechaFin + '&' : '')
                      + (usuarioId != null ? 'usuarioId=' + usuarioId + '&' : '')
                      + (categoriaId != null ? 'categoriaId=' + categoriaId + '&' : '')
                      + (orderBy != null ? 'orderBy=' + orderBy + '&' : '')
                      + (Limit != null ? 'Limit=' + Limit + '&' : '')
                      + (Offset != null ? 'Offset=' + Offset: '');
    let url = `${environment.apiUrl}publicaciones/${parametros}`;
    return this.httpClient.get(url, httpOptions).toPromise();
  }

  createNota(nota: Nota): Promise<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    };
    let url = `${environment.apiUrl}publicaciones/`;
    return this.httpClient.post(url, nota, httpOptions).toPromise();
  }

  editNota(nota: Nota): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    };
    let url = `${environment.apiUrl}publicaciones/` + nota.id;
    return this.httpClient.put<Nota>(url, nota, httpOptions).toPromise();
  }

  getPeriodistas(): Promise<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    };
    const url = environment.apiUrl + 'periodistas';
    return this.httpClient.get(url).toPromise();
  }

  deleteNota(id: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    };
    const url = `${environment.apiUrl}publicaciones/${id}`;
    return this.httpClient.delete(url, httpOptions).toPromise();
  }

}
