import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Database003Service {

  public produtos = [
    {
      codigo: 1,
      nome: 'Hamburguer Artesanal',
      ingredientes: 'Hamburguer, pão, alface, queijo, tomate',
      imagem: 'assets/artesanal001.jpg',
      quantidade: 0,
      preco: 20,
      subtotal: 0
    },
    {
      codigo: 2,
      nome: 'Salada',
      ingredientes: 'Hamburguer, pão, alface, queijo, tomate, rúcula, picles',
      imagem: 'assets/artesanal002.jpg',
      quantidade: 0,
      preco: 10,
      subtotal: 0
    },
    {
      codigo: 3,
      nome: 'New York Burguer',
      ingredientes: 'Hamburguer, pão, alface, queijo, tomate, bacon, molho barbecue',
      imagem: 'assets/newyork.jpg',
      quantidade: 0,
      preco: 30,
      subtotal: 0
    },
  ];


  public carrinho: Array<number> = [];

  constructor() { }

  incluir(cod: number) {
    let existe = false;
    for (let i = 0; i < this.carrinho.length; i++) {
      if (this.carrinho[i] === cod) {
        alert('Produto já incluso!!!');
        existe = true;
        break;
      }
    }
    if (existe === false) {
      this.carrinho.push(cod);
    }
  }

  excluir(cod: number) {
    this.produtos[cod - 1].quantidade = 0;
    this.produtos[cod - 1].subtotal = 0;
    this.carrinho.splice(cod - 1, 1);
  }
  
}
