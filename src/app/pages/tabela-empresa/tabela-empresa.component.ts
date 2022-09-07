import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Empresas } from '../interfaces/empresa-interface';

@Component({
  selector: 'app-tabela-empresa',
  templateUrl: './tabela-empresa.component.html',
  styleUrls: ['./tabela-Empresa.component.scss']
})
export class TabelaEmpresaComponent implements OnInit {

  empresas : Empresas[] = [{
    remetente: 'Renato e Betina Gráfica Ltda',
    cnpj: '41.798.030/0001-72',
    cep: '57083-168',
    rua: 'Quadra C',
    numero: '637',
    bairro: 'Antares',
    cidade: 'Maceió',
    estado: 'AL',
    valor: 154.00,
  }];
  constructor( private router: Router,) { }

  ngOnInit(): void {
  }
  voltarClientes(){
    this.router.navigate(['clientes'])
    
  }


}
