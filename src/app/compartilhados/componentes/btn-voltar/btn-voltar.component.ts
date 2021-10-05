import { Component, Input } from "@angular/core";

@Component({
    selector: 'btn-voltar',
    templateUrl: './btn-voltar.component.html',
    styleUrls: ['./btn-voltar.component.css']
})
export class BtnVoltarComponent{

    @Input() link: string = "";

}