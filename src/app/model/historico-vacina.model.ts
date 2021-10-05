import { Modelo } from "./modelo.model";
import { Posto } from "./posto.model";
import { Vacina } from "./vacina.model";

export interface HistoricoVacina extends Modelo{
    idHistoricoVacina: number,
    dataHora: string,
    comentario: string,
    posto: Posto,
    vacina: Vacina
}