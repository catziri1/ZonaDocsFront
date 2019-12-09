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

  constructor(private notasService: NotasService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder:FormBuilder) {
                this.form = this.formBuilder.group({
                  categorias:[''],
                  periodistas:['']
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
  submit(){
    console.log(this.form.value);
  }

  getCategorias(){
    return this.notasService.getCategoriasPublicacion().then(c => this.categorias = c);
  }

  getPeriodistas(){
    return this.notasService.getPeriodistas().then(p => this.periodistas = p);
  }

  /*mostrarDetalle(desapDetalle) {
    this.router.navigate([])
  }*/

}
