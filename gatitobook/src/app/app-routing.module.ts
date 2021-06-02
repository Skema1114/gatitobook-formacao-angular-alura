import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/guards/autenticacao.guard';
import { LoginGuard } from './autenticacao/guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // AQUI EM BAIXO É UMA FUNÇÃO DE ROTA UTILIZANDO O LAZY LOAD
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((modulo) => modulo.HomeModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'animais',
    loadChildren: () =>
      import('./animais/animais.module').then((modulo) => modulo.AnimaisModule),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
