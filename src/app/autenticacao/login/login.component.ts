import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Autenticacao } from "../autenticacao.model";
import { AutenticacaoService } from "../autenticacao.service";
import { UsuarioLogadoService } from "../usuario-logado.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    public icone:string = "fa-sign-in-alt";
    public titulo:string = "Entrar";
    public linkRetorno:string = "/home";

    public formAutenticar!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private autenticacaoService: AutenticacaoService,
        private usuarioLogadoService: UsuarioLogadoService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.formAutenticar = this.formBuilder.group({
            email: ['',[Validators.required]],
            senha: ['',[Validators.required]]
        });
    }

    public entrar(){

        let autenticacao = this.formAutenticar.getRawValue() as Autenticacao;

        this.autenticacaoService.login(autenticacao).subscribe(
            resp => {

                let token = resp.headers.get('Authorization');
                
                this.usuarioLogadoService.logarUsuario(autenticacao.email,token);
 
                this.router.navigate(['/usuario']);
            },
            error => {
                console.log(error);
                this.formAutenticar.reset();
                alert("Erro ao autenticar, verifique email e senha!");
            }
        );

    }

}