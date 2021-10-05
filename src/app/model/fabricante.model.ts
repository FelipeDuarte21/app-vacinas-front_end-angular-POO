import { Modelo } from "./modelo.model";

export interface Fabricante extends Modelo{
    idFabricante: number,
    nome: string,
    cnpj: string,
    telefone: string,
    email: string
}