import { Component, Input } from "@angular/core";

@Component({
    selector: 'titulo',
    templateUrl: './titulo.component.html',
    styleUrls: ['./titulo.component.css']
})
export class TituloComponent{

    @Input() icone:string = "";
    @Input() titulo:string = "";

}