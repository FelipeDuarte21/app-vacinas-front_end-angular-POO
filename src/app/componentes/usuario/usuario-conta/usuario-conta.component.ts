import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TouchSequence } from "selenium-webdriver";
import { UsuarioLogadoService } from "src/app/autenticacao/usuario-logado.service";
import { Usuario } from "src/app/model/usuario.model";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
    selector: 'usuario-conta',
    templateUrl: './usuario-conta.component.html',
    styleUrls: ['./usuario-conta.component.css']
})
export class UsuarioContaComponent implements OnInit{
    
    public icone:string = "fa-cog";
    public titulo:string = "Gerenciar Conta";
    public linkRetorno = "/usuario";

    public formUsuario!: FormGroup;

    public cadastro:boolean = false;

    constructor(
        private usuarioService: UsuarioService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private usuarioLogadoService: UsuarioLogadoService
    ){}

    ngOnInit(): void {
        this.formUsuario = this.formBuilder.group({
            idUsuario: [''],
            nome: ['',[Validators.required]],
            dataNascimento: ['',[Validators.required]],
            sexo: ['',[Validators.required]],
            endereco: this.formBuilder.group({
                idEndereco: [''],
                estado: ['',[Validators.required]],
                cidade: ['',[Validators.required]],
                bairro: ['',[Validators.required]],
                logradouro: ['',[Validators.required]],
                numero: ['',[Validators.required]],
                complemento: [''],
                cep: ['',[Validators.required]]
            }),
            email: ['',[Validators.required,Validators.email]],
            senha: ['']
        });

        this.route.params.subscribe(
            params => {

                let idUsuario = params.idUsuario;

                if(idUsuario){
                    this.buscarUsuario(params.idUsuario);

                }else{
                    this.icone = "fa-user";
                    this.titulo = "Cadastro De Usuario";
                    this.linkRetorno = "/home";
                    this.cadastro = true;
                }

                
            }
        );

    }

    private buscarUsuario(idUsuario: number){
        this.usuarioService.buscarPorId(idUsuario).subscribe(
            usuario => {
                this.formUsuario.get("idUsuario")?.setValue(usuario.idUsuario);
                this.formUsuario.get("nome")?.setValue(usuario.nome);
                this.formUsuario.get("dataNascimento")?.setValue(usuario.dataNascimento);
                this.formUsuario.get("sexo")?.setValue(usuario.sexo);
                this.formUsuario.get("email")?.setValue(usuario.email);
                this.formUsuario.get("endereco")?.get("idEndereco")?.setValue(usuario.endereco.idEndereco);
                this.formUsuario.get("endereco")?.get("estado")?.setValue(usuario.endereco.estado);
                this.formUsuario.get("endereco")?.get("cidade")?.setValue(usuario.endereco.cidade);
                this.formUsuario.get("endereco")?.get("bairro")?.setValue(usuario.endereco.bairro);
                this.formUsuario.get("endereco")?.get("logradouro")?.setValue(usuario.endereco.logradouro);
                this.formUsuario.get("endereco")?.get("numero")?.setValue(usuario.endereco.numero);
                this.formUsuario.get("endereco")?.get("complemento")?.setValue(usuario.endereco.complemento);
                this.formUsuario.get("endereco")?.get("cep")?.setValue(usuario.endereco.cep);   
            }
        );
    }

    public cadastrar(){
        
        let usuario: Usuario = this.formUsuario.getRawValue() as Usuario;

        this.usuarioService.cadastrar(usuario).subscribe(
            result => {
                alert("Usuário Cadastrado Com Sucesso!");
                this.formUsuario.reset();
                this.router.navigate(['\home']);
            },
            error => {
                alert("Erro ao Cadastrar Usuario!");
                console.log(error);
            }
        );

    }

    public atualizar(){
        
        let usuario: Usuario = this.formUsuario.getRawValue() as Usuario;

        this.usuarioService.atualizar(usuario).subscribe(
            result => {
                alert("Usuário Atualizado Com Sucesso!");
                this.formUsuario.reset();
                this.router.navigate(['usuario']);
            },
            error => {
                console.log(error);
                alert("Erro ao atualizar Usuário!");
            }
        );

    }

    public excluir(){

        let idUsuario = parseInt(this.formUsuario.get("idUsuario")?.value);

        let resp = confirm("Deseja Realmente Excluir Usuário!");

        if(resp) {
            this.usuarioService.excluir(idUsuario).subscribe(
                result => {
                    alert("Usuário Excluído Com Sucesso!");
                    this.usuarioLogadoService.deslogarUsuario();
                    this.router.navigate(['/home']);
                },
                error => {
                    console.log(error);
                    alert("Erro ao excluir Usuário!");
                }
            );
            console.log("Aqui");
        }

    }
    
}