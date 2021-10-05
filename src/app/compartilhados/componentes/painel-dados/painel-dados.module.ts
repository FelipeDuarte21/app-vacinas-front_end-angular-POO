import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PaginacaoComponent } from "./paginacao/paginacao.component";
import { PainelCardComponent } from "./painel-card/painel-card.component";
import { ParametroPipe } from "./painel-card/parametro.pipe";
import { PainelDadoComponent } from "./painel-dados.component";

@NgModule({
    declarations: [
        PainelDadoComponent,
        PainelCardComponent,
        PaginacaoComponent,
        ParametroPipe
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        PainelDadoComponent
    ]
})
export class PainelDadosModule{

}