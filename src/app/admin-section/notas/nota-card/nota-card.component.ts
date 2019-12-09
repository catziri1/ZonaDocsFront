import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Nota } from '../../nota';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from '../../notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nota-card',
  templateUrl: './nota-card.component.html',
  styleUrls: ['./nota-card.component.css']
})
export class NotaCardComponent implements OnInit {
  @Input() nota: Nota;

  constructor(private route: ActivatedRoute,
    private notasService: NotasService,
    private router: Router) { }

  ngOnInit() {
    this.getNota();
  }
  getNota(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.notasService.getNotaDetail(this.nota.id);

  }
  mostrarDetalle() {
    console.log("Mostrar componente de la nota admin")
  }
  editarNota() {
        //redireccionar a la pagina de cynthia
      console.log("mostrar pagina de editar");
      this.router.navigateByUrl('/admin/notas/'+this.nota.id+'/editar');
  }
  eliminarNota(){
    console.log("eliminar nota, llamar delete");
    this.notasService.deleteNota(this.nota.id);
  }
}
