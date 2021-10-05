import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { HistoricoVacinaAdapter } from "../model/adapter/historico-vacina-adapter.model";
import { HistoricoVacina } from "../model/historico-vacina.model";
import { PaginaHistoricoVacina } from "../model/pagina/pagina-historico-vacina.model";


@Injectable()
export class HistoricoVacinaService{

    private baseURL:string = `${environment.apiURL}/historicos`;

    constructor(
        private http: HttpClient
    ){}

    
    public registrar(historico: HistoricoVacinaAdapter):Observable<HistoricoVacina>{
        return this.http.post<HistoricoVacina>(`${this.baseURL}`,historico);
    }

    public buscarHistorico(pagina:number,quantidade:number):Observable<PaginaHistoricoVacina>{
        return this.http.get<PaginaHistoricoVacina>(`${this.baseURL}?pagina=${pagina}&quantidade=${quantidade}`);
    }

}