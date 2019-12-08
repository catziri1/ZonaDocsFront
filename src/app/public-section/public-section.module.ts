import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';


const publicRoutes: Routes = [
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: '/notas/:id', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
  {path: '/publicaciones', component: PublicacionesComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [NotFoundComponent, IndexComponent, HeaderComponent, PublicacionesComponent]
})
export class PublicSectionModule { }
