import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NotasComponent } from './notas/notas.component';
import { NotaCardComponent } from './notas/nota-card/nota-card.component';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';

const routes: Routes = [
  {path: '', component: AdminLoginComponent},
  {path: 'notas', component: NotasComponent}
];

@NgModule({
  declarations: [AdminLoginComponent, NotasComponent, NotaCardComponent, CrearNotaComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminSectionModule { }
