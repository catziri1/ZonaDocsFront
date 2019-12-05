import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NotasComponent } from './notas/notas.component';
import { NotaCardComponent } from './notas/nota-card/nota-card.component';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';


const routes: Routes = [
  {path: '', component: AdminLoginComponent},
  {path: 'notas', component: NotasComponent,canActivate: [AuthGuard]},
  {path: 'notas/nueva', component: CrearNotaComponent,canActivate: [RoleGuard], data: { expectedRole: ['admin','periodista']}},
  {path: 'notas/:id/editar', component: CrearNotaComponent,canActivate: [RoleGuard], data: { expectedRole: ['admin','pariodista']}}
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
