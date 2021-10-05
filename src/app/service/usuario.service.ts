import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Usuario } from "../model/usuario.model";

@Injectable()
export class UsuarioService{

    private baseURL:string = `${environment.apiURL}/usuarios`;

    constructor(
        private http: HttpClient
    ){}

    public buscarPorId(idUsuario: number): Observable<Usuario>{
        return this.http.get<Usuario>(`${this.baseURL}/${idUsuario}`);
    }

    public buscarPorEmail(email:string | null): Observable<Usuario>{
        return this.http.get<Usuario>(`${this.baseURL}/email?email=${email}`);
    }

    public cadastrar(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(`${this.baseURL}`,usuario);
    }

    public atualizar(usuario: Usuario): Observable<Usuario>{
        return this.http.put<Usuario>(`${this.baseURL}`,usuario);
    }

    public excluir(idUsuario: number): Observable<any>{
        return this.http.delete<any>(`${this.baseURL}/${idUsuario}`);
    }

}