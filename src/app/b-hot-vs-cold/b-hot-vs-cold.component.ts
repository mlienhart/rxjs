import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, publish } from 'rxjs/operators';

@Component({
  selector: 'app-b-hot-vs-cold',
  templateUrl: './b-hot-vs-cold.component.html',
  styleUrls: ['./b-hot-vs-cold.component.css']
})
export class BHotVsColdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// const cold = Observable.create(o => o.next(Math.random()));

// cold.subscribe(console.log);
// cold.subscribe(console.log);

// const hot = cold.pipe(shareReplay(1));

// hot.subscribe(console.log);
// hot.subscribe(console.log);

// cold.subscribe(console.log);

// const hot = cold.pipe(publish());

// hot.subscribe(console.log);
// hot.subscribe(console.log);

// hot.connect();