import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'paginacao',
    templateUrl: './paginacao.component.html',
    styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent{
    
    @Input() totalPagina:number = 0;
    @Input() paginaAtual:number = 0;
    @Input() opcoesQtdPorPagina:Array<number> = [];
    @Input() opcaoInicialEscolhida:number = 0;

    @Output() trocarPagina: EventEmitter<number> = new EventEmitter();
    @Output() trocarQuantidade:EventEmitter<number> = new EventEmitter();

    onAnterior(){
        let pagina = this.paginaAtual-1;
        this.trocarPagina.emit(pagina);
    }

    onProximo(){
        let pagina = this.paginaAtual+1;
        this.trocarPagina.emit(pagina);
    }

    onChange(evento:any){
        this.trocarQuantidade.emit(evento.value);
    }

}