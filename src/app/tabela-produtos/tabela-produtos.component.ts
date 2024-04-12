import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent {
  @Input() title= "Tabela de Produtos";
  listaProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {
    this.listaProdutos = this.produtoService.listar();
  }
}
