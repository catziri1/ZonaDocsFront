import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path: '', component: AdminLoginComponent}
];



@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminSectionModule { }
