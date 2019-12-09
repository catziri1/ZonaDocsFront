import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicSectionModule } from '../app/public-section/public-section.module';
import { AdminSectionModule } from '../app/admin-section/admin-section.module';


const routes: Routes = [
  {path: 'admin', loadChildren: () => AdminSectionModule},
  {path: '', loadChildren: () => PublicSectionModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
