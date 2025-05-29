import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000/api/carrello';

  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor(private http: HttpClient) {
    this.aggiornaContatore();
  }

  getCarrello(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(carrello => this.cartCountSubject.next(carrello.length))
    );
  }

  aggiungiAlCarrello(prodotto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, prodotto).pipe(
      tap(() => this.aggiornaContatore())
    );
  }

  rimuoviDalCarrello(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.aggiornaContatore())
    );
  }

  aggiornaContatore() {
    this.getCarrello().subscribe();
  }
}
