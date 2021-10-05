import { Pipe, PipeTransform } from "@angular/core";
import { Parametro } from "./card";

@Pipe({
    name: 'parametros'
})
export class ParametroPipe implements PipeTransform{
    
    transform(parametros: Parametro[]) {
        let retorno = "{";

        parametros.forEach((parametro,index) => {
            if(parametros.length-1 == index)
                retorno += `"${parametro.nome}":"${parametro.valor}"`
            else
                retorno += `"${parametro.nome}":"${parametro.valor}",`
        });

        retorno += "}";

        return JSON.parse(retorno);
    }
 

}