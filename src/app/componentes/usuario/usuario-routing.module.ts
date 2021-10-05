import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuloGuardService } from "src/app/guardas-rotas/modulo-guard.service";
import { HistoricoVacinaComponent } from "./historico-vacina/historico-vacina.component";
import { RegistroHistoricoVacinaComponent } from "./registro-historico-vacina/registro-historico-vacina.component";
import { UsuarioContaComponent } from "./usuario-conta/usuario-conta.component";
import { UsuarioHomeComponent } from "./usuario-home/usuario-home.component";

const routes: Routes = [
    {
        path: '',
        component: UsuarioHomeComponent,
        canActivate: [ModuloGuardService]
    },
    {
        path: 'registro-vacina',
        component: RegistroHistoricoVacinaComponent,
        canActivate: [ModuloGuardService]
    },
    {
        path: 'historico',
        component: HistoricoVacinaComponent,
        canActivate: [ModuloGuardService]
    },
    {
        path: 'conta/:idUsuario',
        component: UsuarioContaComponent,
        canActivate: [ModuloGuardService]
    },
    {
        path: 'cadastro-usuario',
        component: UsuarioContaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule{

}