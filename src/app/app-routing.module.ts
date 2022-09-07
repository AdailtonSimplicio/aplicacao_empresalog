import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastarclienteComponent } from './pages/cadastarcliente/cadastarcliente.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TabelaClienteComponent } from './pages/tabela-cliente/tabela-cliente.component';
import { TabelaEmpresaComponent } from './pages/tabela-empresa/tabela-empresa.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'contato', component: ContatoComponent},
  {path: 'empresa', component: TabelaEmpresaComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'clientes', component: TabelaClienteComponent},
  {path: 'cadastrarNovoCliente', component: CadastarclienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
