import { Fabricante } from "./fabricante.model";
import { Modelo } from "./modelo.model";

export interface Vacina extends Modelo{
    idVacina: number,
    nome: string,
    dose: number
    fabricante: Fabricante
}