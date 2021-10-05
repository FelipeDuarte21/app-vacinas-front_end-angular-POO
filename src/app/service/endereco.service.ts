import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable()
export class EnderecoService{

    private baseURL: string = `${environment.apiURL}/enderecos`

    constructor(
        private http: HttpClient
    ){}

    public buscarEstados():Observable<string[]>{
        return this.http.get<string[]>(`${this.baseURL}/estados`);
    }

    public buscarCidades(estado: string):Observable<string[]>{
        return this.http.get<string[]>(`${this.baseURL}/cidades?estado=${estado}`);
    }

    public buscarBairros(cidade:string):Observable<string[]>{
        return this.http.get<string[]>(`${this.baseURL}/bairros?cidade=${cidade}`);
    }

}