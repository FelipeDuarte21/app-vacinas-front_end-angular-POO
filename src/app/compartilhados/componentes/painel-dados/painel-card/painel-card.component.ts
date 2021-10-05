import { Component, Input } from "@angular/core";
import { Card, Parametro } from "./card";

@Component({
    selector: 'painel-card',
    templateUrl: './painel-card.component.html',
    styleUrls: ['./painel-card.component.css']
})
export class PainelCardComponent{

    @Input() cards: Card[] = [];

    constructor(){}

}