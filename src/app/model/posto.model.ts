import { Endereco } from "./endereco.model";
import { Modelo } from "./modelo.model";

export interface Posto extends Modelo{
    idPosto: number,
    nome: string,
    telefone: string,
    diaHoraFuncionamento: string,
    endereco: Endereco
}