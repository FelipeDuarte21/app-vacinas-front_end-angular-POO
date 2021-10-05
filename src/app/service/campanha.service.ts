import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginaCampanha } from "../model/pagina/pagina-campanha.model";
import { environment } from 'src/environments/environment';

@Injectable()
export class CampanhaService{

    private baseURL:string = `${environment.apiURL}/campanhas`;

    constructor(private http: HttpClient){}

    public campanhasDisponiveis(pagina:number,quantidade:number):Observable<PaginaCampanha>{
        return this.http.get<PaginaCampanha>(`${this.baseURL}/disponiveis?pagina=${pagina}&quantidade=${quantidade}`);
    }

}