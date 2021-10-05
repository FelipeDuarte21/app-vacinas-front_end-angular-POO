import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { PaginaPosto } from "../model/pagina/pagina-posto.model";

@Injectable()
export class PostoService{

    private baseURL = `${environment.apiURL}/postos`;

    constructor(
        private http: HttpClient
    ){}

    public buscarPorLocalidade(idCampanha:number,estado:string,cidade:string,bairro:string,
        pagina:number,quantidade:number):Observable<PaginaPosto>{
        return this.http.get<PaginaPosto>(`${this.baseURL}/localidade?idCampanha=${idCampanha}&estado=${estado}&cidade=${cidade}&bairro=${bairro}&pagina=${pagina}&quantidade=${quantidade}`);
    }

    public buscarTodos(pagina:number,quantidade:number):Observable<PaginaPosto>{
        return this.http.get<PaginaPosto>(`${this.baseURL}?pagina=${pagina}&quantidade=${quantidade}`);
    }

}