import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { OriginalItem, MappedItem } from '../interfaces';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

// const firstList$: Observable<OriginalItem[]> = of([
//   { id: 4, name: "four" }
// ]);
// const secondList$: Observable<OriginalItem[]> = of([
//   { id: 3, name: "three" },
//   { id: 5, name: "five" },
//   { id: 1, name: "one" }
// ]);

// const mappedList$: Observable<MappedItem[]> = firstList$
//   .pipe(
//     switchMap((first) =>
//       secondList$.pipe(
//         map((data) => data.filter((x) => x.id < first[0].id))
//       )
//     ),
//     map((data) =>
//       data
//         .map((x) => <MappedItem>({ code: x.id, label: x.name }))
//         .sort((a, b) => a.code - b.code)
//     )
//   );

// mappedList$.subscribe(x => console.log(x));