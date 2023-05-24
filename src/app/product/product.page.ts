import { Component, OnInit } from '@angular/core';
import { Database003Service } from '../database003.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  produto = {
    codigo: 0,
    nome: '',
    ingredientes: '',
    imagem: '',
    quantidade: 0,
    preco: 0,
    subtotal: 0
  };

  constructor(
    private recebendo: ActivatedRoute,
    public bd: Database003Service
  ) { }

  ngOnInit() {
    this.recebendo.paramMap.subscribe(p => {
      let i: number = (Number(p.get('codigo')) - 1);
      this.produto = {
        codigo: this.bd.produtos[i].codigo,
        nome: this.bd.produtos[i].nome,
        ingredientes: this.bd.produtos[i].ingredientes,
        imagem: this.bd.produtos[i].imagem,
        quantidade: this.bd.produtos[i].quantidade,
        preco: this.bd.produtos[i].preco,
        subtotal: this.bd.produtos[i].subtotal
      }
    });
  }

}
