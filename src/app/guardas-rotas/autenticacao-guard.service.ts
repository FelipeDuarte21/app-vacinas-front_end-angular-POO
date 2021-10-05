import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioLogadoService } from "../autenticacao/usuario-logado.service";


@Injectable()
export class AutenticacaoGuardService implements CanActivate{

    constructor(
        private usuarioLogadoService: UsuarioLogadoService,
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
        if(this.usuarioLogadoService.isUsuarioLogado()){

            this.router.navigate(['/usuario']);
            
            return false;
        }

        return true;
    }

}