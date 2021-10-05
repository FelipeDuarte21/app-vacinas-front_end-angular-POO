import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HistoricoVacinaAdapter } from "src/app/model/adapter/historico-vacina-adapter.model";
import { Campanha } from "src/app/model/campanha.model";
import { Posto } from "src/app/model/posto.model";
import { Vacina } from "src/app/model/vacina.model";
import { CampanhaService } from "src/app/service/campanha.service";
import { HistoricoVacinaService } from "src/app/service/historico-vacina.service";
import { PostoService } from "src/app/service/posto.service";

@Component({
    selector: 'registro-historico-vacina',
    templateUrl: './registro-historico-vacina.component.html',
    styleUrls: ['./registro-historico-vacina.component.css']
})
export class RegistroHistoricoVacinaComponent implements OnInit{

    public icone:string = "fa-pencil-alt";
    public titulo:string = "Registrar Vacinação";
    public linkRetorno:string = "/usuario";

    public formRegistroHistorico!: FormGroup;

    public campanhas: Campanha[] = [];
    public vacinas: Vacina[] = [];
    public postos: Posto[] = [];

    constructor(
        private campanhaService: CampanhaService,
        private postoService: PostoService,
        private historicoVacinaService: HistoricoVacinaService,
        private formBuilder: FormBuilder,
        private router: Router
    ){}

    ngOnInit(): void {
        this.formRegistroHistorico = this.formBuilder.group({
            campanha: ['',[Validators.required]],
            posto: ['',[Validators.required]],
            data: ['',[Validators.required]],
            hora: ['',[Validators.required]],
            comentario: ['']
        });

        this.campanhaService.campanhasDisponiveis(0,1).subscribe(p => {
            this.campanhaService.campanhasDisponiveis(0,p.totalElements).subscribe(
                pagina => {
                    this.campanhas = pagina.content;
                }
            );
        });
        this.postoService.buscarTodos(0,1).subscribe(p => {
            this.postoService.buscarTodos(0,p.totalElements).subscribe(
                pagina => {
                    this.postos = pagina.content
                }
            );
        });
    }

    public registrar(){

        let historico: HistoricoVacinaAdapter = {
            id: 0,
            idVacina: this.formRegistroHistorico.get("campanha")?.value,
            idPosto: this.formRegistroHistorico.get("posto")?.value,
            dataHora: `${this.formRegistroHistorico.get("data")?.value}T${this.formRegistroHistorico.get("hora")?.value}`,
            comentario: this.formRegistroHistorico.get("comentario")?.value
        };

        this.historicoVacinaService.registrar(historico).subscribe(
            result => {
                alert("Histórico Registrado Com Sucesso!");
                this.formRegistroHistorico.reset();
                this.router.navigate(['usuario']);
            },
            error => {
                console.log(error);
                alert("Erro ao registrar Histórico!");
            }
        );



    }

}