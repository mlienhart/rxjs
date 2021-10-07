import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, scan, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-d-operators',
  templateUrl: './d-operators.component.html',
  styleUrls: ['./d-operators.component.css']
})
export class DOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// const modyfied = source.pipe(
//   map(n => Math.pow(n, 2)),
//   scan((acc, val) => acc + val),
//   filter(v => v > 10),
//   take(3),
// );

// modyfied.subscribe(console.log);