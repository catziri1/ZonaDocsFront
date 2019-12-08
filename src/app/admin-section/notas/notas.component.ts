import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';
import { Nota } from '../nota';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  
  notascompletas: any = [];
  notas: Nota[] = [];

  constructor(private notaServicio: NotasService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.notaServicio.getNotas().then((result)=> {
      this.notascompletas = result;
      this.notas = result;
    });
  }
  /*mostrarDetalle(desapDetalle) {
    this.router.navigate([])
  }*/

}
