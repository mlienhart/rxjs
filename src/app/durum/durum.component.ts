import { Component, OnInit } from '@angular/core';
import { combineLatest, zip, Observable, Subject } from 'rxjs';
import { tap, map, mergeMap, take, switchMap } from 'rxjs/operators';

type Durum = ["flat bread", "meat", "sauce", "tomato", "cabbage"];

interface Order {
  amount: number;
  customerId: number;
}

interface Product {
  product: Durum;
  customerId: number;
}

let flatBreadCounter = 0;
let meatCounter = 0;
let sauceCounter = 0;
let tomatoCounter = 0;
let cabbageCounter = 0;
let customerId = 0;

@Component({
  selector: 'app-durum',
  template: `
  <button (click)="dispatchOrder()">Dispatch Order</button>
  <hr />
  <button (click)="_flatBread.next('flat bread')">Add Flat Bread</button>
  <button (click)="_meat.next('meat')">Add Meat</button>
  <button (click)="_sauce.next('sauce')">Add Sauce</button>
  <button (click)="_tomato.next('tomato')">Add Tomato</button>
  <button (click)="_cabbage.next('cabbage')">Add Cabbage</button>
  
  <!-- example for zip and combineLatest operators -->
  <!-- <ng-container *ngIf="durum$ | async as durum">
    <section *ngIf="durum?.length > 0">
      <h4>Enjoy</h4>
      <h4>Durum</h4>
      <h5>Ingredients:</h5>
      <pre>{{ durum | json }}</pre>
    </section>
  </ng-container> -->

  <!-- example for mergeMap and switchMap operators -->
  <ng-container *ngIf="delivery$ | async as product">
    <section *ngIf="product.product > 0">
      <h4>Enjoy</h4>
      <h4>Durum</h4>
      <h5>Ingredients:</h5>
      <pre>{{ product | json }}</pre>
    </section>
  </ng-container>
  `,
  styleUrls: ['./durum.component.css']
})
export class DurumComponent implements OnInit {
  durum$: Observable<Durum>;
  delivery$: Observable<Product>;

  _order = new Subject<Order>();
  _flatBread = new Subject<"flat bread">();
  _meat = new Subject<"meat">();
  _sauce = new Subject<"sauce">();
  _tomato = new Subject<"tomato">();
  _cabbage = new Subject<"cabbage">();

  constructor() { }

  ngOnInit(): void {
    this.durum$ = zip(
      this._flatBread.pipe(map((ing) => `${ing}${++flatBreadCounter}`), tap(console.log)),
      this._meat.pipe(map((ing) => `${ing}${++meatCounter}`), tap(console.log)),
      this._sauce.pipe(map((ing) => `${ing}${++sauceCounter}`), tap(console.log)),
      this._tomato.pipe(map((ing) => `${ing}${++tomatoCounter}`), tap(console.log)),
      this._cabbage.pipe(map((ing) => `${ing}${++cabbageCounter}`), tap(console.log)),
    ).pipe(
      tap((durum) => console.log("Enjoy!", durum))
    );
    // this.durum$ = combineLatest(
    //   [this._flatBread.pipe(map((ing) => `${ing}${++flatBreadCounter}`), tap(console.log)),
    //   this._meat.pipe(map((ing) => `${ing}${++meatCounter}`), tap(console.log)),
    //   this._sauce.pipe(map((ing) => `${ing}${++sauceCounter}`), tap(console.log)),
    //   this._tomato.pipe(map((ing) => `${ing}${++tomatoCounter}`), tap(console.log)),
    //   this._cabbage.pipe(map((ing) => `${ing}${++cabbageCounter}`), tap(console.log)),]
    // ).pipe(
    //   tap((durum) => console.log("Enjoy!", durum))
    // );

    this.delivery$ = this._order.pipe(
      tap(order => console.log("New Order: ", order)),
      mergeMap(({ amount, customerId }) => this.durum$.pipe(
        take(amount),
        map(durum => ({ product: durum, customerId: customerId }))
      )),
      // switchMap(({ amount, customerId }) => this.durum$.pipe(
      //   take(amount),
      //   map(durum => ({ product: durum, customerId: customerId }))
      // )),
      tap(product => console.log("Delivered Product: ", product)),
    )
  }

  dispatchOrder() {
    const amount = Math.floor(Math.random() * 3) + 1;
    ++customerId;
    this._order.next({ amount, customerId });
  }

}
