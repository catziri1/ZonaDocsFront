import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { Nota } from './nota';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidGlwb1VzdWFyaW8iOjAsImlhdCI6MTU3NTUzNjUwMH0.uMB7taOGVqj2rhqGOAORO0LxQOv5E-I-LP08PcWz7ek';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization' : t,
    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidGlwb1VzdWFyaW8iOjAsImlhdCI6MTU3NTUzNjUwMH0.uMB7taOGVqj2rhqGOAORO0LxQOv5E-I-LP08PcWz7ek'
  })
};

@Injectable({
  providedIn: 'root'
})

export class NotasService {

  constructor(private httpClient:HttpClient) {
    }

  getCategoriasPublicacion(): Observable<any> {
    const url = environment.apiUrl +"categoriasPublicacion";
    return this.httpClient.get<Nota[]>(url, httpOptions).pipe();
  }

  getNotas(): Observable<any> {
    const url = environment.apiUrl + 'public/publicaciones';
    /*const url = environment.apiUrl + 'publicaciones';
    return this.httpClient.get<Nota[]>(url, httpOptions).pipe();*/
    return this.httpClient.get<Nota[]>(url).pipe();
  }

  getNotasByUser(usuarioId: number): Observable<Nota[]>{
    const url = environment.apiUrl + 'public/publicaciones?usuarioId=' + usuarioId;
    return this.httpClient.get<Nota[]>(url).pipe();
  }

  getNotaDetail(id: number): Promise<any> {
    console.log('traer UN estudiante');
    // const url = this.apiUrl + '/'+id;
    const url = `${environment.apiUrl}publicaciones/${id}`;
    return this.httpClient.get(url).toPromise();
  }

  filterNota(fechaInicio: string,
             fechaFin: string,
             usuarioId: number,
             categoriaId: number,
             orderBy: number,
             Limit: number,
             Offset: number): Promise<any> {
    let parametros = '';
    parametros = ('?' + fechaInicio != null ? 'fechaInicio=' + fechaInicio + '&' : '')
                      + (fechaFin != null ? 'fechaFin=' + fechaFin + '&' : '')
                      + (usuarioId != null ? 'usuarioId=' + usuarioId + '&' : '')
                      + (categoriaId != null ? 'categoriaId=' + categoriaId + '&' : '')
                      + (orderBy != null ? 'orderBy=' + orderBy + '&' : '')
                      + (Limit != null ? 'Limit=' + Limit + '&' : '')
                      + (Offset != null ? 'Offset=' + Offset: '');
    let url = `${environment.apiUrl}publicaciones/${parametros}`;
    return this.httpClient.get<Nota[]>(url, httpOptions).toPromise();
  }

  createNota(nota: Nota): Observable<any>  {
    //   this.students.push(student);
    let url = `${environment.apiUrl}publicaciones/`;
    //ahorita acabo
    return this.httpClient.post<Nota>(url, nota, httpOptions).pipe();
    //return this.httpClient.get(url).toPromise();
  }

  editNota(nota: Nota): Observable<Nota> {
    let url = `${environment.apiUrl}publicaciones/`+nota.id;
    return this.httpClient.put<Nota>(url, nota, httpOptions)
    .pipe();
  }

  getPeriodistas():Promise<any>  {
    const url = environment.apiUrl + 'periodistas';
    return this.httpClient.get(url).toPromise();
  }

  deleteNota(id: number): Observable<{}>{
    const url = `${environment.apiUrl}publicaciones/${id}`;
    return this.httpClient.delete(url, httpOptions).pipe();
  }

}
