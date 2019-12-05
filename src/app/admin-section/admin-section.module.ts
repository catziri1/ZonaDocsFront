import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const adminRoutes: Routes = [
  {path: '', component: AdminLoginComponent},
  {path: '**', component: NotFoundComponent}
];



@NgModule({
  declarations: [AdminLoginComponent, NotFoundComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminSectionModule { }
