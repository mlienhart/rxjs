import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-g-switch-map',
  templateUrl: './g-switch-map.component.html',
  styleUrls: ['./g-switch-map.component.css']
})
export class GSwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// const fetchOrders = async (userId: number) => {
//   return `${userId}'s order data`
// }

// const user$ = of({ uid: Math.random() })

// const orders$ = user$.pipe(
//   switchMap(user => {
//     return fetchOrders(user.uid);
//   })
// )

// user$.subscribe(console.log);

// orders$.subscribe(console.log);