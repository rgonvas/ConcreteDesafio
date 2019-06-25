import { Component, OnInit } from '@angular/core';
import { DetalleUsuario } from '../classes/detalle-usuario';
import { ReposusuarioService } from '../reposusuario.service';
import { UsuariodService } from '../usuariod.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'accen-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  public title = 'Buscar usuarios en GIT';
  public searchString: string;
  public perfilUsuario: DetalleUsuario;
  detalleUsuario: any = [];
  constructor(public restRepo: ReposusuarioService, public rest: UsuariodService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.getDetalleUsuario();
  }

  submitSearch() {

    this.getDetalleUsuario(this.searchString);
    this.getReposUsuario(this.searchString);
  }

  getDetalleUsuario(searchString?: string) {
    this.detalleUsuario = [];
    this.rest.getDetalleUsuario(searchString).subscribe((data: {}) => {
      this.detalleUsuario = data;
      //console.log("LOGIN:: "+this.detalleUsuario.login)
      this.perfilUsuario = new DetalleUsuario(this.detalleUsuario.login,
        this.detalleUsuario.id, this.detalleUsuario.avatar_url, this.detalleUsuario.company,
        this.detalleUsuario.location, this.detalleUsuario.public_repos, this.detalleUsuario.followers)

    }
    );
  }

  getReposUsuario(searchString?: string) {
    this.restRepo.getReposUsuario(searchString);

  }

  objectKeys(objeto: any) {
    const keys = Object.keys(objeto);
    console.log(keys);
    return keys;
  }



}