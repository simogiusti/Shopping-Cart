import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrello',
  imports: [CommonModule],
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  carrello: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.caricaCarrello();
  }

  caricaCarrello() {
    this.cartService.getCarrello().subscribe({
      next: (data) => {
        this.carrello = data;
      },
      error: (err) => console.error('Errore nel caricamento del carrello', err)
    });
  }

  rimuoviDalCarrello(prodotto: any) {
    this.cartService.rimuoviDalCarrello(prodotto._id).subscribe({
      next: () => {
        this.caricaCarrello();
        this.cartService.aggiornaContatore();
      },
      error: (err) => console.error('Errore durante la rimozione dal carrello', err)
    });
  }
}
