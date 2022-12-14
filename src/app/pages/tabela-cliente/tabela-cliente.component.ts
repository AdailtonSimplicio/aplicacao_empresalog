import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../interfaces/cliente-interface';

@Component({
  selector: 'app-tabela-cliente',
  templateUrl: './tabela-cliente.component.html',
  styleUrls: ['./tabela-cliente.component.scss']
})
export class TabelaClienteComponent implements OnInit {

    clientes : Cliente[] = [{
    nome: 'Giovanna Clara Cláudia Melo',
    cpf: '210.851.420-19',
    cep: '96075-580',
    rua: 'Rua Doutor Calero',
    numero: '155',
    bairro: 'Porto',
    cidade: 'Pelotas',
    estado: 'RS',
    }];
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  verEmpresa(){
    this.router.navigate(['empresa'])
    
  }
  cadastrarNovoCliente(){
    this.router.navigate(['cadastrarNovoCliente'])
    
  }
}
