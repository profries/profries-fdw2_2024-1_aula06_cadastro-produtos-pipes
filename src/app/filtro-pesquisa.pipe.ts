import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], nomePesq: string): Produto [] {
    return listaProdutos.filter ( (produto:Produto) => {
      return produto.nome?.toLowerCase().includes(nomePesq.toLowerCase())
    })
  }
}
