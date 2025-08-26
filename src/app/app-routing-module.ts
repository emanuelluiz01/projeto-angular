import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contador } from './components/contador/contador';
import { App } from './app';
import { Diretiva } from './components/diretiva/diretiva';

const routes: Routes = [
  { path: 'contador', component: Contador },
  { path: 'diretiva', component: Diretiva },
  { path: '', component: App },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
