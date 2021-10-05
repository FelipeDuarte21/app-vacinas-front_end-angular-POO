import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/compartilhados/componentes/painel-dados/painel-card/card";
import { FormataDataPipe } from "src/app/compartilhados/pipes/formata-data.pipe";
import { Campanha } from "src/app/model/campanha.model";
import { CampanhaService } from "src/app/service/campanha.service";

@Component({
    selector: 'campanhas-disponiveis',
    templateUrl: './campanha.component.html',
    styleUrls: ['./campanha.component.css'],
    providers: [FormataDataPipe]
})
export class CampanhaComponent implements OnInit{
    
    public icone:string = "fa-bullhorn";
    public titulo:string = "Campanhas";
    public linkRetorno = "/home";

    public cards: Card[] = []

    public totalPagina:number = 0;
    public paginaAtual:number = 0;
    public opcoesQtdPorPagina:Array<number> = [4,8,12,16,20];
    public quantidadeEscolhida:number = 4;

    constructor(
        private campanhaService: CampanhaService,
        private formataData: FormataDataPipe
    ){}

    ngOnInit(): void {
        this.buscarTodos(this.paginaAtual,this.quantidadeEscolhida);
    }

    public buscarTodos(pagina:number,quantidade:number){
        this.campanhaService.campanhasDisponiveis(pagina,quantidade).subscribe(
            pagina => {
                this.totalPagina = pagina.totalPages;
                this.converteCampanhaPraCard(pagina.content);
            }
        );
    }

    private converteCampanhaPraCard(campanhas: Campanha[]){

        let cards: Card[] = [];

        campanhas.forEach(campanha => {
            
            let card:Card = {
                id:campanha.idCampanha,
                campos: [
                    {
                        icone: "fa-bullhorn",
                        titulo: "Campanha",
                        valor: campanha.titulo
                    },
                    {
                        icone: "fa-users",
                        titulo: "Publico",
                        valor: campanha.publicoAlvo
                    },
                    {
                        icone: "fa-user-friends",
                        titulo: "Faixa Etária",
                        valor: campanha.faixaEtaria
                    },
                    {
                        icone: "fa-calendar-alt",
                        titulo: "Começo",
                        valor: this.formataData.transform(campanha.dataComeco)
                    },
                    {
                        icone: "fa-calendar-alt",
                        titulo: "Termino",
                        valor: this.formataData.transform(campanha.dataTermino)
                    },
                    {
                        icone: "fa-tint",
                        titulo: "Dose",
                        valor: campanha.vacina.dose.toString()
                    }
                ],
                botoes:[
                    {
                        icone: "fa-comment",
                        titulo: "Comentários",
                        link: {
                            valor: "/comentarios",
                            parametros: [
                                {
                                    nome: "vacina",
                                    valor: campanha.vacina.idVacina.toString()
                                }
                            ]
                        }
                    },
                    {
                        icone: "fa-search",
                        titulo: "Buscar Postos",
                        link: {
                            valor: "/pesquisa-posto",
                            parametros: [
                                {
                                    nome: "campanha",
                                    valor: campanha.idCampanha.toString()
                                }
                            ]
                        }
                    }
                ]
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