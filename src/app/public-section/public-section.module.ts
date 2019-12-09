import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { NotasComponent } from './notas/notas.component';


const publicRoutes: Routes = [
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: 'notas/:id', component: NotasComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [NotFoundComponent, IndexComponent, HeaderComponent, NotasComponent]
})
export class PublicSectionModule { }
