import { Modelo } from "./modelo.model";

export interface Endereco extends Modelo{
    idEndereco: number,
    estado: string,
    cidade: string,
    bairro: string,
    logradouro: string,
    numero: string,
    complemento: string,
    cep: string
}