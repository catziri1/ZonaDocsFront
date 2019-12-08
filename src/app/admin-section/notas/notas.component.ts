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

  notas: Nota[] = [];

  constructor(private notasService: NotasService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.getNotas();
  }
  getNotas(): void {
    this.notasService.getNotas().then(notas => this.notas = notas);
  }
  
  /*mostrarDetalle(desapDetalle) {
    this.router.navigate([])
  }*/

}
