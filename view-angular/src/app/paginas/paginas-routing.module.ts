import { TabelaResolver } from './guards/tabela.resolver';
import { TabelaComponent } from './tabela/tabela.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaFormComponent } from './tabela-form/tabela-form.component';

const routes: Routes = [
  {path: '' , component: DashboardComponent},
  { path: 'tabela', component: TabelaComponent },
  { path: 'tabela/add', component: TabelaFormComponent , resolve:{course:TabelaResolver}},
  {path:'tabela/edit/:id', component:TabelaFormComponent, resolve:{course:TabelaResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
