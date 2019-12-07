import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Nota } from './nota';
@Injectable({
  providedIn: 'root'
})

export class NotasService {

  constructor(private httpClient:HttpClient) { }

  getCategoriasPublicion(): Promise<any> {
    const url = environment.apiUrl +"categoriasPublicacion";
    return this.httpClient.get(url).toPromise();
  }

  getNotas(): Promise<any> {
    const url = environment.apiUrl + 'publicaciones';
    return this.httpClient.get(url).toPromise();
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
    Offset: number):Promise<any> {
    let parametros = '?';
    parametros = ('?' + fechaInicio != null ? 'fechaInicio=' + fechaInicio + '&' : '')
                      + (fechaFin != null ? 'fechaFin=' + fechaFin + '&' : '')
                      + (usuarioId != null ? 'usuarioId=' + usuarioId + '&' : '')
                      + (categoriaId != null ? 'categoriaId=' + categoriaId + '&' : '')
                      + (orderBy != null ? 'orderBy=' + orderBy + '&' : '')
                      + (Limit != null ? 'Limit=' + Limit + '&' : '')
                      + (Offset != null ? 'Offset=' + Offset: '');
    let url = `${environment.apiUrl}publicaciones/${parametros}`;
    return this.httpClient.get(url).toPromise();
  }

  createNota(nota: Nota):Promise<any>  {
    //   this.students.push(student);
    let url = `${environment.apiUrl}publicaciones/`;
    //ahorita acabo
    //return this.httpClient.post<Nota>(this.url, desap);
    return this.httpClient.get(url).toPromise();
  }

  editNota(nota: Nota) {
 
  }

  getPeriodistas():Promise<any>  {
    const url = environment.apiUrl + 'periodistas';
    return this.httpClient.get(url).toPromise();
  }

}
