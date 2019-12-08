import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotasComponent } from './notas/notas.component';
import { NotaCardComponent } from './notas/nota-card/nota-card.component';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';



const adminRoutes: Routes = [
  {path: '', component: AdminLoginComponent},
  {path: 'login', component: AdminLoginComponent},
  {path: 'notas', component: NotasComponent,canActivate: [AuthGuard]},
  {path: 'notas/nueva', component: CrearNotaComponent,canActivate: [RoleGuard], data: { expectedRole: ['periodista']}},
  {path: 'notas/:id/editar', component: EditarNotaComponent,canActivate: [RoleGuard], data: { expectedRole: ['admin', 'periodista']}},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [AdminLoginComponent, NotasComponent,
                NotaCardComponent, CrearNotaComponent,
                NotFoundComponent, EditarNotaComponent,
                HeaderComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [RouterModule]
})
export class AdminSectionModule { }
