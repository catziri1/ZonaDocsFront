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
  loading: boolean = true;
  promises: Promise<any>[] = [];
  
  constructor(private notasService:NotasService, private categoriasService: CategoriaService) {}
  
  ngOnInit() {
      this.categoriasService.getCategorias().then((result)=>{
        this.categorias = result;
        this.categorias.forEach((element) => {
          this.promises.push(new Promise((resolve, reject) => {
            this.notasService.getNotasByCategoria(element.id).then((result) => {
              let notas: Nota[] = result;
              this.notas[element.id] = notas;
              resolve();
            });
          }));
        });
        Promise.all(this.promises).then((result)=> {
          this.loading = false;
        });
      });
  }

}
