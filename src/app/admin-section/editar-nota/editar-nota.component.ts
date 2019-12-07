import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NotasService } from '../notas.service';
import {ActivatedRoute} from '@angular/router';
import { Categoria, Nota } from '../nota';
import { Periodista } from '../periodista';



@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {
  notaForm: FormGroup;
  categorias:Array<Categoria> = [];
  periodistas:Array<Periodista> = [];
  notaid:number;
  categoria:Categoria;
  autor:Periodista;
  nota:Nota={
    UsuarioId:0,
    categoriaId: 0,
    titulo: '',
    entrada: '',
    nota: ''
  };

  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notasService:NotasService) {
    this.activatedRoute.params.subscribe(parameters => {
      this.notaid = parameters.id;
    })
   }

  ngOnInit() {
    this.getNotaDetail(this.notaid);
    this.getCategorias();
    this.getPeriodistas();
    this.autor=this.periodistas[this.nota.UsuarioId];
    this.categoria=this.categorias[this.nota.categoriaId];
  }

  getNotaDetail(id:number){
    this.notasService.getNotaDetail(id).then(response => {
      this.nota = response;
    });
  }

  getCategorias() {
    this.notasService.getCategoriasPublicion().then(response => {
      console.log('Response: ', response);
      this.categorias = response;
    });
  }

  getPeriodistas(){
    this.notasService.getPeriodistas().then(response => {
      console.log('Response: ', response);
      this.periodistas = response;
    });
  }

  editarNota(){

  }

  onSubmit(){
    
  }
}
