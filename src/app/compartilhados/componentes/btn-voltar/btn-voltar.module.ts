import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BtnVoltarComponent } from "./btn-voltar.component";

@NgModule({
    declarations: [
        BtnVoltarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        BtnVoltarComponent
    ]
})
export class BtnVoltarModule{

}