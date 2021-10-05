import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/compartilhados/componentes/painel-dados/painel-card/card";
import { FormataDataHoraPipe } from "src/app/compartilhados/pipes/formata-data-hora.pipe";
import { HistoricoVacina } from "src/app/model/historico-vacina.model";
import { HistoricoVacinaService } from "src/app/service/historico-vacina.service";

@Component({
    selector: 'historico-vacina',
    templateUrl: './historico-vacina.component.html',
    styleUrls: ['./historico-vacina.component.css'],
    providers: [FormataDataHoraPipe]
})
export class HistoricoVacinaComponent implements OnInit{

    public icone:string = "fa-list-alt";
    public titulo:string = "Histórico de Vacinação";
    public linkRetorno:string = "/usuario";
    
    public cards: Card[] = []

    public totalPagina:number = 0;
    public paginaAtual:number = 0;
    public opcoesQtdPorPagina:Array<number> = [4,8,12,16,20];
    public quantidadeEscolhida:number = 4;

    constructor(
        private historicoVacinaService: HistoricoVacinaService,
        private formataDataHora: FormataDataHoraPipe
    ){}

    ngOnInit(): void {
        this.buscarTodos(this.paginaAtual,this.quantidadeEscolhida);
    }

    public buscarTodos(pagina:number,quantidade:number){
        this.historicoVacinaService.buscarHistorico(pagina,quantidade).subscribe(
            pagina => {
                this.totalPagina = pagina.totalPages;
                this.converteHistoricoPraCard(pagina.content);
            }
        );
    }
    
    private converteHistoricoPraCard(historicos: HistoricoVacina[]){
        
        let cards: Card[] = [];

        historicos.forEach(historico => {
            
            let card:Card = {
                id:historico.idHistoricoVacina,
                campos: [
                    {
                        icone: "fa-syringe",
                        titulo: "Vacina",
                        valor: historico.vacina.nome
                    },
                    {
                        icone: "fa-hospital",
                        titulo: "Posto",
                        valor: historico.posto.nome
                    },
                    {
                        icone: "fa-calendar-alt",
                        titulo: "Data/Hora",
                        valor: this.formataDataHora.transform(historico.dataHora)
                    },
                    {
                        icone: "fa-comment",
                        titulo: "Comentário",
                        valor: historico.comentario
                    },
                ],
                botoes:[]
            }

            cards.push(card);

        });

        this.cards = cards;
    }

    public onTrocarPagina(pagina: number){
        this.paginaAtual = pagina;
        this.buscarTodos(pagina,this.quantidadeEscolhida);
    }

    public onTrocarQuantidade(quantidade: number){
        this.quantidadeEscolhida = quantidade;
        this.paginaAtual = 0
        this.buscarTodos(this.paginaAtual,this.quantidadeEscolhida);
    }

}