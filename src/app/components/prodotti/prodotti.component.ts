import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodotti',
  imports: [CommonModule],
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit {
  prodotti: any[] = [];

  constructor(
    private prodottiService: ProdottiService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.prodottiService.getProdotti().subscribe((data: any[]) => {
      this.prodotti = data;
    });
  }

  aggiungiAlCarrello(prodotto: any) {
    this.cartService.aggiungiAlCarrello(prodotto).subscribe();
  }
}

