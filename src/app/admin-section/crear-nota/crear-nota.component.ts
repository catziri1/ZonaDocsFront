import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})
export class CrearNotaComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }
 /*  getCategorias():Promise<any> {
    const url = "https://zona-docs-api.herokuapp.com/categoriasPublicacion";
    return this.httpClient.get(url).toPromise();
  } */
}
