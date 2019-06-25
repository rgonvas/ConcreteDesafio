import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { ReposUsuarioComponent } from './repos-usuario/repos-usuario.component';

import { UsuariodService } from './usuariod.service';
import { FormsModule } from '@angular/forms';
import { ReposusuarioService } from './reposusuario.service';


@NgModule({
  declarations: [
    AppComponent,
    BuscarUsuarioComponent,
    ReposUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [UsuariodService,ReposusuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
