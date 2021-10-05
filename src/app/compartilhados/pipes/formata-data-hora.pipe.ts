import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formataDataHora'
})
export class FormataDataHoraPipe implements PipeTransform{

    transform(dataHora: string):string {
        
        let partes = dataHora.split("T");

        let partesData = partes[0].split("-");
        let partesHora = partes[1].split(":");

        return `${partesData[2]}/${partesData[1]}/${partesData[0]} ${partesHora[0]}:${partesHora[1]}`;

    }

}