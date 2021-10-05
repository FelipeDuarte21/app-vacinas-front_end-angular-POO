import { Sort } from "./sort.model";

export interface Pageable{
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean,
    sort: Sort
}