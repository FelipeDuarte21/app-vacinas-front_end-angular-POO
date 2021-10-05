import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ComentarioAdapter } from "../model/adapter/comentario-adapter.model";
import { environment } from 'src/environments/environment';


@Injectable()
export class ComentarioService{

    private baseURL = `${environment.apiURL}/vacinas`

    constructor(
        private http: HttpClient
    ){}

    public buscarComentarios(idVacina:number):Observable<ComentarioAdapter[]>{
        return this.http.get<ComentarioAdapter[]>(`${this.baseURL}/comentarios?idVacina=${idVacina}`);
    }

}