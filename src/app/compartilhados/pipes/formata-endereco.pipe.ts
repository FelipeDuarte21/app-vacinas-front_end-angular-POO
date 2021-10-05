import { Pipe, PipeTransform } from "@angular/core";
import { Endereco } from "src/app/model/endereco.model";

@Pipe({
    name: 'formataEndereco'
})
export class FormataEnderecoPipe implements PipeTransform{

    private mascaraCEP(cep:string):string{
        let cepMascarado = ""

        for(let i=0; i < cep.length; i++){
          cepMascarado += cep[i];
          if(i == 4){
            cepMascarado += "-"
          }
        }
    
        return cepMascarado;
    }
   
    transform(endereco: Endereco):string {

        if(endereco.complemento == null){
            return `${endereco.logradouro} ${endereco.numero} ${endereco.bairro} 
            ${endereco.cidade}/${endereco.estado} - CEP: ${this.mascaraCEP(endereco.cep)}`
        }else{
            return `${endereco.logradouro} ${endereco.numero} ${endereco.complemento} 
            ${endereco.bairro} ${endereco.cidade}/${endereco.estado} - CEP: ${this.mascaraCEP(endereco.cep)}`
        }
       
    }

}