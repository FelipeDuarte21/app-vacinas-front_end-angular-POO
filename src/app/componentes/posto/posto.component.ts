import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Card } from "src/app/compartilhados/componentes/painel-dados/painel-card/card";
import { FormataEnderecoPipe } from "src/app/compartilhados/pipes/formata-endereco.pipe";
import { FormataTelefonePipe } from "src/app/compartilhados/pipes/formata-telefone.pipe";
import { Posto } from "src/app/model/posto.model";
import { PostoService } from "src/app/service/posto.service";

@Component({
    selector: 'posto',
    templateUrl: './posto.component.html',
    styleUrls: ['./posto.component.css'],
    providers: [FormataTelefonePipe,FormataEnderecoPipe]
})
export class PostoComponent implements OnInit{

    public icone:string = "fa-hospital";
    public titulo:string = "Postos Encontrados";
    public linkRetorno:string = "/campanhas";

    public cards: Card[] = []

    public totalPagina:number = 0;
    public paginaAtual:number = 0;
    public opcoesQtdPorPagina:Array<number> = [4,8,12,16,20];
    public quantidadeEscolhida:number = 4;

    private estado:string = "";
    private cidade:string = "";
    private bairro:string = "";
    private idCampanha:number = 0;


    constructor(
        private route: ActivatedRoute,
        private postoService: PostoService,
        private formataTelefone: FormataTelefonePipe,
        private formataEndereco: FormataEnderecoPipe
    ){}

    ngOnInit(): void {
        this.route.queryParams.subscribe(
            params => {
                this.idCampanha = params.campanha;
                this.estado = params.estado;
                this.cidade = params.cidade;
                this.bairro = params.bairro;
            }
        );
        this.buscarTodos(this.paginaAtual,this.quantidadeEscolhida);
    }

    public buscarTodos(pagina:number,quantidade:number){
        this.postoService.buscarPorLocalidade(this.idCampanha,this.estado,
        this.cidade,this.bairro,pagina,quantidade).subscribe(
            pagina => {
                this.totalPagina = pagina.totalPages;
                this.convertePostoParaCard(pagina.content);
            }
        );
    }

    private convertePostoParaCard(postos: Posto[]){
        
        let cards: Card[] = [];

        postos.forEach(posto => {

            let card: Card = {
                id: posto.idPosto,
                campos: [
                    {
                        icone: 'fa-hospital',
                        titulo: 'Posto',
                        valor: posto.nome
                    },
                    {
                        icone: 'fa-phone-volume',
                        titulo: 'Telefone',
                        valor: this.formataTelefone.transform(posto.telefone)
                    },
                    {
                        icone: 'fa-clock',
                        titulo: 'Horário',
                        valor: posto.diaHoraFuncionamento
                    },
                    {
                        icone: 'fa-map-marker-alt',
                        titulo: 'Endereço',
                        valor: this.formataEndereco.transform(posto.endereco)
                    },

                ],
                botoes: []
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