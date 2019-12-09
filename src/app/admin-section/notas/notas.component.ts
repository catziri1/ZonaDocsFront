import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';
import { Nota, Categoria } from '../nota';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Periodista } from '../periodista';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  form: FormGroup;
  periodistas: Periodista[];
  categorias: Categoria[];
  notas: Nota[];
  nombre: string;
  fechaInicio: string;
  fechaFin:string;

  constructor(private notasService: NotasService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder:FormBuilder) {
                this.form = this.formBuilder.group({
                  categorias:[''],
                  periodistas:[''],
                  nombre:'',
                  fechaInicio:'',
                  fechaFin:''
                });

              }

  ngOnInit() {
    this.getNotas();
    this.getCategorias();
    this.getPeriodistas();
    console.log(this.categorias);
  }
  getNotas(): void {
    this.notasService.getNotas().then(notas => this.notas = notas);
  }

  getCategorias(){
    return this.notasService.getCategoriasPublicacion().then(c => this.categorias = c);
  }

  getPeriodistas(){
    return this.notasService.getPeriodistas().then(p => this.periodistas = p);
  }

  crearNota(){
    this.router.navigateByUrl('/admin/notas/nueva');
  }
  submit() {
    this.notasService.filterNota(this.form.value.fechaInicio,
                                 this.form.value.fechaFin,
                                 this.form.value.periodistas,
                                 this.form.value.categorias).then(n => this.notas = n);
    console.log(this.form.value);
  }
  /*mostrarDetalle(desapDetalle) {
    this.router.navigate([])
  }*/

}
