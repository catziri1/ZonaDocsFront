import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NotasService } from '../notas.service';
import { Categoria } from '../nota';


@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})


export class CrearNotaComponent implements OnInit {
  categorias:Categoria= {
    nombre: ''
  };
  constructor(    
    private notasService:NotasService
    ) { }
  ngOnInit() {
  }
  getCategoriasPublicion() {
    this.notasService.getCategoriasPublicion().then(response => {
      console.log('Response: ', response);
      this.categorias = response;
    });
  }
}
