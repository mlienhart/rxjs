import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-e-operators',
  templateUrl: './e-operators.component.html',
  styleUrls: ['./e-operators.component.css']
})
export class EOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// const source = of('jeff');

// const tapped = source.pipe(
//   tap(console.log),
//   map(v => v.toUpperCase()),
//   tap(console.log),
//   map(v => `Hello ${v}`),
//   tap(async v => {
//     await Promise.resolve();
//     console.log(v);
//   })
// )

// tapped.subscribe();