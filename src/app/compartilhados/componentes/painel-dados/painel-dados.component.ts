import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Card } from "./painel-card/card";

@Component({
    selector: 'painel-dados',
    templateUrl: './painel-dados.component.html',
    styleUrls: ['./painel-dados.component.css']
})
export class PainelDadoComponent{

    @Input() cards: Card[] = [];
    @Input() totalPagina:number = 0;
    @Input() paginaAtual:number = 0;
    @Input() opcoesQtdPorPagina:Array<number> = [];
    @Input() opcaoInicialEscolhida:number = 0;

    @Output() trocarPagina: EventEmitter<number> = new EventEmitter();
    @Output() trocarQuantidade:EventEmitter<number> = new EventEmitter();

    public onTrocarPagina(pagina: number){
        this.trocarPagina.emit(pagina);
    }

    public onTrocarQuantidade(quantidade: number){
        this.trocarQuantidade.emit(quantidade);
    }

}