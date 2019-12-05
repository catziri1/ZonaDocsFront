import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotasComponent } from './notas/notas.component';
import { NotaCardComponent } from './notas/nota-card/nota-card.component';

const adminRoutes: Routes = [
  {path: '', component: AdminLoginComponent},
  {path: '**', component: NotFoundComponent},
  {path: 'notas', component: NotasComponent}

];

@NgModule({
  declarations: [AdminLoginComponent, NotasComponent, NotaCardComponent, NotFoundComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminSectionModule { }
