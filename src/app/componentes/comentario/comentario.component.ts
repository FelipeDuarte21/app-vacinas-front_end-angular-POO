import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ComentarioAdapter } from "src/app/model/adapter/comentario-adapter.model";
import { ComentarioService } from "src/app/service/comentario.service";

@Component({
    selector: 'comentario',
    templateUrl: './comentario.component.html',
    styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit{

    public icone:string = "fa-comment";
    public titulo:string = "Comentários";
    public linkRetorno:string = "/campanhas";

    public comentarios: ComentarioAdapter[] = [];

    constructor(
        private comentarioService: ComentarioService,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.route.queryParams.subscribe(
            params => {
                this.buscarComentarios(params.vacina);
            }
        );
    } 

    private buscarComentarios(idVacina:number){
        this.comentarioService.buscarComentarios(idVacina).subscribe(
            comentarios => {
                this.comentarios = comentarios;
            }
        );
    }

}