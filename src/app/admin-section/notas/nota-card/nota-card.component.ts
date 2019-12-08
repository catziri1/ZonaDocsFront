import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Nota } from '../../nota';


@Component({
  selector: 'app-nota-card',
  templateUrl: './nota-card.component.html',
  styleUrls: ['./nota-card.component.css']
})
export class NotaCardComponent implements OnInit {
  @Input() nota: Nota;
  @Output() mostrarDetalles = new EventEmitter;
  @Output() editarNota = new EventEmitter;


  constructor( ) { }

  ngOnInit() {
  }
  mostrarDetalle(){
    this.mostrarDetalles.emit(this.nota);
  }

  editar(){
    this.editarNota.emit(this.nota);
  }


}
