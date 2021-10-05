export interface Card{
    id: number,
    campos: Campo[],
    botoes: Botao[]
}

interface Campo{
    icone: string,
    titulo: string,
    valor: string
}

interface Botao{
    icone: string,
    titulo: string,
    link: Link
}

interface Link{
    valor: string,
    parametros: Parametro[]
}

export interface Parametro{
    nome: string,
    valor: string
}