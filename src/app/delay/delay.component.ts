import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { MappedItem, OriginalItem } from '../interfaces';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css']
})
export class DelayComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

}

// const firstList$: Observable<OriginalItem[]> = of([
//   { id: 4, name: "four" }
// ]);

// const mappedList$: Observable<MappedItem[]> = firstList$.pipe(
//   tap(x => console.log(x)),
//   delay(3000),
//   map((data) =>
//     data.map((x) => <MappedItem>({ code: x.id * 100, label: x.name.toLocaleUpperCase() })))
// );

// mappedList$.subscribe(x => console.log(x));