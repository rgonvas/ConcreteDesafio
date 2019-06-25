import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { ReposUsuarioComponent } from './repos-usuario/repos-usuario.component';

const routes: Routes = [
  { path: 'buscar-usuario', component: BuscarUsuarioComponent},
  { path: 'repos/:id', component: ReposUsuarioComponent},
  { path: '**', redirectTo: '/buscar-usuario'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
