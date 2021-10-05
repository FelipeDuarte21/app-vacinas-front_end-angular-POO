import { Modelo } from "./modelo.model";
import { Posto } from "./posto.model";
import { Vacina } from "./vacina.model";

export interface Campanha extends Modelo{
    idCampanha: number,
    titulo: string,
    subtitulo: string,
    publicoAlvo: string,
    faixaEtaria: string,
    dataComeco: string,
    dataTermino: string,
    status: number,
    vacina: Vacina,
    postos: Posto[]
}