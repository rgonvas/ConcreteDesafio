import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReposusuarioService } from '../reposusuario.service';

@Component({
  selector: 'accen-repos-usuario',
  templateUrl: './repos-usuario.component.html',
  styleUrls: ['./repos-usuario.component.css']
})
export class ReposUsuarioComponent implements OnInit {
  private id;
  
  reposUsuario: any = [];
  constructor(public rest: ReposusuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getReposUsuario(this.id);
    });
  }
  getReposUsuario(searchString?: string) {
    this.reposUsuario = [];
    this.rest.getReposUsuario(searchString).subscribe((data: {}) => {
      this.reposUsuario = data;
    }
    );
  }
  objectKeys(objeto: any) {
    const keys = Object.keys(objeto);
    console.log(keys);
    return keys;
  }
}