import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/login/login.component';
import { CampanhaComponent } from './componentes/campanha/campanha.component';
import { ComentarioComponent } from './componentes/comentario/comentario.component';
import { HomeComponent } from './componentes/home/home.component';
import { PesquisaPostoComponent } from './componentes/pesquisa-posto/pesquisa-posto.component';
import { PostoComponent } from './componentes/posto/posto.component';
import { AutenticacaoGuardService } from './guardas-rotas/autenticacao-guard.service';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AutenticacaoGuardService]
    },
    {
        path: 'campanhas',
        component: CampanhaComponent
    },
    {
        path: 'comentarios',
        component: ComentarioComponent
    },
    {
        path: 'pesquisa-posto',
        component: PesquisaPostoComponent
    },
    {
        path: 'postos',
        component: PostoComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AutenticacaoGuardService]
    },
    {
        path: 'usuario',
        loadChildren: () => import('./componentes/usuario/usuario.module').then(m => m.UsuarioModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
