import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CadastarclienteComponent } from './pages/cadastarcliente/cadastarcliente.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TabelaClienteComponent } from './pages/tabela-cliente/tabela-cliente.component';
import { TabelaEmpresaComponent } from './pages/tabela-empresa/tabela-empresa.component';
import { Header2Component } from './header/header2/header2.component';

const routes: Routes =[{
  path: 'tabelacliente',
  component: TabelaClienteComponent,
}];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TabelaClienteComponent,
    TabelaEmpresaComponent,
    CadastarclienteComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
