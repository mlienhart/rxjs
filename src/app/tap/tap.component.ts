import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { OriginalItem, MappedItem } from '../interfaces';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

}

// const firstList$: Observable<OriginalItem[]> = of([
//   { id: 4, name: "four" },
//   { id: 5, name: "five" },
// ]);

// const mappedList$: Observable<MappedItem[]> = firstList$.pipe(
//   tap(x => console.log(x)),
//   map((data) =>
//     data
//       .map((x) => <MappedItem>({ code: x.id * 100, label: x.name.toLocaleUpperCase() }))
//       .sort((a, b) => a.code - b.code)
//   )
// )

// mappedList$.subscribe(x => console.log(x));