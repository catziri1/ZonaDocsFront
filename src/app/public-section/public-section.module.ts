import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const publicRoutes: Routes = [
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [NotFoundComponent]
})
export class PublicSectionModule { }
