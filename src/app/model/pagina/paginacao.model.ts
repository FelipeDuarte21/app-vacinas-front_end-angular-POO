import { Modelo } from "../modelo.model";
import { Pageable } from "./pageable.model";
import { Sort } from "./sort.model";

export interface Paginacao<M extends Modelo>{
    content: M[],
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    first: boolean,
    numberOfElements: number,
    empty: boolean,
    sort: Sort,
    pageable: Pageable
}