import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnVoltarModule } from './compartilhados/componentes/btn-voltar/btn-voltar.module';
import { CabecalhoComponent } from './compartilhados/componentes/cabecalho/cabecalho.component';
import { PainelDadosModule } from './compartilhados/componentes/painel-dados/painel-dados.module';
import { TituloModule } from './compartilhados/componentes/titulo/titulo.module';
import { CampanhaComponent } from './componentes/campanha/campanha.component';
import { ComentarioComponent } from './componentes/comentario/comentario.component';
import { HomeComponent } from './componentes/home/home.component';
import { PesquisaPostoComponent } from './componentes/pesquisa-posto/pesquisa-posto.component';
import { PostoComponent } from './componentes/posto/posto.component';
import { CampanhaService } from './service/campanha.service';
import { FormataDataPipe } from './compartilhados/pipes/formata-data.pipe';
import { ComentarioService } from './service/comentario.service';
import { FormataDataHoraPipe } from './compartilhados/pipes/formata-data-hora.pipe';
import { EnderecoService } from './service/endereco.service';
import { PostoService } from './service/posto.service';
import { FormataTelefonePipe } from './compartilhados/pipes/formata-telefone.pipe';
import { FormataEnderecoPipe } from './compartilhados/pipes/formata-endereco.pipe';
import { HistoricoVacinaService } from './service/historico-vacina.service';
import { UsuarioService } from './service/usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { InterceptorService } from './autenticacao/interceptador.service';
import { AutenticacaoGuardService } from './guardas-rotas/autenticacao-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeComponent,
    CampanhaComponent,
    ComentarioComponent,
    PesquisaPostoComponent,
    PostoComponent,
    FormataDataPipe,
    FormataDataHoraPipe,
    FormataTelefonePipe,
    FormataEnderecoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PainelDadosModule,
    TituloModule,
    BtnVoltarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutenticacaoModule
  ],
  providers: [
    CampanhaService,
    ComentarioService,
    FormataDataHoraPipe,
    EnderecoService,
    PostoService,
    HistoricoVacinaService,
    UsuarioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  InterceptorService,
      multi: true
    },
    AutenticacaoGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
