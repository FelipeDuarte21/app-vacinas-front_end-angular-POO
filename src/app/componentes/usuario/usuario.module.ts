import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BtnVoltarModule } from "src/app/compartilhados/componentes/btn-voltar/btn-voltar.module";
import { PainelDadosModule } from "src/app/compartilhados/componentes/painel-dados/painel-dados.module";
import { TituloModule } from "src/app/compartilhados/componentes/titulo/titulo.module";
import { ModuloGuardService } from "src/app/guardas-rotas/modulo-guard.service";
import { HistoricoVacinaComponent } from "./historico-vacina/historico-vacina.component";
import { RegistroHistoricoVacinaComponent } from "./registro-historico-vacina/registro-historico-vacina.component";
import { UsuarioContaComponent } from "./usuario-conta/usuario-conta.component";
import { UsuarioHomeComponent } from "./usuario-home/usuario-home.component";
import { UsuarioRoutingModule } from "./usuario-routing.module";

@NgModule({
    declarations: [
        UsuarioHomeComponent,
        RegistroHistoricoVacinaComponent,
        HistoricoVacinaComponent,
        UsuarioContaComponent
    ],
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        PainelDadosModule,
        TituloModule,
        BtnVoltarModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        ModuloGuardService
    ]
})
export class UsuarioModule{

}