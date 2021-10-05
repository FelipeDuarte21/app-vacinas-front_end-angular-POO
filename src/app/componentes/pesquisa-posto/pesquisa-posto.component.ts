import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EnderecoService } from "src/app/service/endereco.service";

@Component({
    selector: 'pesquisa-posto',
    templateUrl: './pesquisa-posto.component.html',
    styleUrls: ['./pesquisa-posto.component.css']
})
export class PesquisaPostoComponent implements OnInit{
    
    public icone:string = "fa-hospital";
    public titulo:string = "Pesquisar Postos de Vacinação";
    public linkRetorno:string = "/campanhas";

    public estados:string[] = [];
    public cidades:string[] = [];
    public bairros:string[] = [];

    private estado:string = "";
    private cidade:string = "";
    private bairro:string = "";
    private idCampanha:number = 0;

    constructor(
        private route: ActivatedRoute,
        private enderecoService: EnderecoService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.route.queryParams.subscribe(
            params => {
                this.idCampanha = params.campanha
            }
        );
        this.buscarEstados();
    }

    public buscarEstados(){
        this.enderecoService.buscarEstados().subscribe(
            estados => {
                this.estados = estados;
            }
        );
    }

    public buscarCidades(estado:string){
        if(estado == "0") return;

        this.estado = estado;
        this.enderecoService.buscarCidades(estado).subscribe(
            cidades => {
                this.cidades = cidades;
            }
        );
    }

    public buscarBairros(cidade:string){
        if(cidade == "0") return;

        this.cidade = cidade;
        this.enderecoService.buscarBairros(cidade).subscribe(
            bairros => {
                this.bairros = bairros;
            }
        );
    }

    public setBairro(bairro:string){
        this.bairro = bairro;
    }

    public habilitarPesquisa(): boolean{
        if(this.estado == "" || this.cidade == "" || this.bairro == "") return false
        else return true;
    }

    public pesquisar(){
        this.router.navigate(['postos'],{queryParams:{campanha:this.idCampanha,estado:this.estado,cidade:this.cidade,bairro:this.bairro}});
    }


}