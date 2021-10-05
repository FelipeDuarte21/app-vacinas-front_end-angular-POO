import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BtnVoltarModule } from "../compartilhados/componentes/btn-voltar/btn-voltar.module";
import { TituloModule } from "../compartilhados/componentes/titulo/titulo.module";
import { UsuarioService } from "../service/usuario.service";
import { AutenticacaoService } from "./autenticacao.service";
import { LoginComponent } from "./login/login.component";
import { TokenService } from "./token.service";
import { UsuarioLogadoService } from "./usuario-logado.service";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        BtnVoltarModule,
        TituloModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [
        AutenticacaoService,
        UsuarioLogadoService,
        TokenService
    ]
})
export class AutenticacaoModule{

}