import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TituloComponent } from "./titulo.component";

@NgModule({
    declarations: [
        TituloComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [TituloComponent]
})
export class TituloModule{

}