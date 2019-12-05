import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';

const publicRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [NotFoundComponent, IndexComponent, HeaderComponent]
})
export class PublicSectionModule { }
