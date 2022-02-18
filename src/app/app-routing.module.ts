import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexKind } from 'typescript';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { LojaComponent } from './views/loja/loja.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path: "contato", component: ContatoComponent},
  { path: "loja", component: LojaComponent},
  { path: "carrinho", component: CarrinhoComponent},
  { path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
