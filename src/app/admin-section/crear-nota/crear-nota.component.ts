import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NotasService } from '../notas.service';
import { Categoria, Nota } from '../nota';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})

export class CrearNotaComponent implements OnInit {
  notaForm: FormGroup;

  categorias:Array<Categoria> = [];
  notaid:number;
  nota:Nota={
    UsuarioId:0,
    categoriaId: 0,
    titulo: '',
    entrada: '',
    nota: ''
  };


  constructor(    
    private notasService:NotasService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.getCategoriasPublicion();
  }

  getCategoriasPublicion() {
    this.notasService.getCategoriasPublicion().then(response => {
      console.log('Response: ', response);
      this.categorias = response;
    });
  }

  crearNota(){

  }

  onSubmit(){
 
  }
}
