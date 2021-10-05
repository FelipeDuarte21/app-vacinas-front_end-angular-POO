import { Endereco } from "./endereco.model";
import { HistoricoVacina } from "./historico-vacina.model";
import { Modelo } from "./modelo.model";

export interface Usuario extends Modelo{
    idUsuario: number,
    nome: string,
    email: string,
    senha: string,
    dataNascimento: Date,
    sexo: string,
    endereco: Endereco,
    historico: HistoricoVacina[]
}