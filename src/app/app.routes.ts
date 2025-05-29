import { Routes } from '@angular/router';
import { ProdottiComponent } from './components/prodotti/prodotti.component';
import { CarrelloComponent } from './components/carrello/carrello.component';

export const routes: Routes = [
  { path: 'prodotti', component: ProdottiComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: '', redirectTo: 'prodotti', pathMatch: 'full' },
];
