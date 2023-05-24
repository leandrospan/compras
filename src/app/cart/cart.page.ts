import { Component, OnInit } from '@angular/core';
import { Database003Service } from '../database003.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  total = 0;
  subtotal = 0;

  constructor(public bd: Database003Service) { }

  public maisLanche(p: number){
    this.bd.produtos[p - 1].quantidade += 1;
    this.bd.produtos[p - 1].subtotal = this.bd.produtos[p - 1].quantidade * this.bd.produtos[p - 1].preco;
    this.calculaTotal();
  }

  public menosLanche(p: number){
    this.bd.produtos[p - 1].quantidade -= 1;
    this.bd.produtos[p - 1].subtotal = this.bd.produtos[p - 1].quantidade * this.bd.produtos[p - 1].preco;
    this.calculaTotal();
  }

  calculaTotal() {
    let t: number = 0;
    for (let i = 0; i < this.bd.produtos.length; i++) {
      t = t + this.bd.produtos[i].subtotal;
    }
    return this.total = t;
  }

  deletar(p: number){
    this.bd.excluir(p);
    this.calculaTotal();
  }

  ngOnInit() {
  }

}
