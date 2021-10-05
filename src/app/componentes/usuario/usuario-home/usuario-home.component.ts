import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioLogadoService } from "src/app/autenticacao/usuario-logado.service";
import { Usuario } from "src/app/model/usuario.model";

@Component({
    selector: 'usuario-home',
    templateUrl: './usuario-home.component.html',
    styleUrls: ['./usuario-home.component.css']
})
export class UsuarioHomeComponent implements OnInit{

    public usuario:Usuario|null = null;
    public idUsuario:number|undefined = 0;

    constructor(
        private usuarioLogadoService: UsuarioLogadoService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.usuarioLogadoService.recuperarUsuario().subscribe(
            usuario => {
                this.usuario = usuario;
                this.idUsuario = usuario?.idUsuario;
            }
        );
    }

    public logout(){
        this.usuarioLogadoService.deslogarUsuario();
        this.router.navigate(['/home']);
    }


}