import { Component, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formataTelefone'
})
export class FormataTelefonePipe implements PipeTransform{


    transform(telefone:string) {
        let telefoneMascarado = "(";
        for(let i=0; i < telefone.length; i++){
          if(i == 1){
            telefoneMascarado += telefone[i] + ") ";
          }else if(i == 5){
            telefoneMascarado += telefone[i] + "-";
          }else{
            telefoneMascarado += telefone[i];
          }
        }
        return telefoneMascarado;
    }

}