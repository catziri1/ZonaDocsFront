import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Nota } from './nota';
@Injectable({
  providedIn: 'root'
})


export class NotasService {

  constructor(private httpClient: HttpClient) {
  }
  getNotas(): Promise<any> {
    console.log('todos los parametros?');
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
    Offset: number) {
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

  createNota(nota: Nota) {
    //   this.students.push(student);
    let url = `${environment.apiUrl}publicaciones/`;
    //ahorita acabo
    //return this.httpClient.post<Nota>(this.url, desap);
  }

}