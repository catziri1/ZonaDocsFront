import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Nota } from '../nota';
import { NotasService } from '../notas.service';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  categorias: Categoria[];
  notas: Nota[][] = [];
  
  constructor(private notasService:NotasService, private categoriasService: CategoriaService) {}
  
  ngOnInit() {
   this.categoriasService.getCategorias().then((result)=>{
    this.categorias = result;
    this.categorias.forEach((element) => {
      this.notasService.getNotasByCategoria(element.id).then((result) => {
        let notas: Nota[] = result;
        console.log(this.notas);
        this.notas[element.id] = notas;
      });
    });
    console.log(this.notas[0]);
   });

  }

}
