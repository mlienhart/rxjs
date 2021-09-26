import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

of(1, 2, 3)
  .pipe(map(x => x * x))
  .subscribe(x => console.log("of value:", x));

of([1, 2, 3])
  .pipe(map(x => x.map(x => x * x)))
  .subscribe(x => console.log("array:", x));

from([1, 2, 3])
  .pipe(map(x => x * x))
  .subscribe(x => console.log("from falue:", x));
