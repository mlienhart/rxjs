import { Component, OnInit } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { filter, switchMap, map, tap } from 'rxjs/operators';
import { OriginalItem, MappedItem } from '../interfaces';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.css']
})
export class CombinelatestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

const firstList$: Observable<OriginalItem[]> = of([
  { id: 4, name: "four" }
]);
const secondList$: Observable<OriginalItem[]> = of([
  { id: 3, name: "three" },
  { id: 5, name: "five" },
  { id: 1, name: "one" }
]);
const thirdList$: Observable<OriginalItem[]> = of([
  { id: 6, name: "six" },
  { id: 2, name: "two" },
]);

const mappedList$: Observable<MappedItem[]> = firstList$
  .pipe(
    filter((data) => data.length > 0),
    switchMap((first) =>
      combineLatest([
        secondList$.pipe(
          map((data) => data.filter((x) => x.id < first[0].id))
        ),
        thirdList$
      ])
    ),
    tap(x => console.log(x)),
    map(([second, third]) =>
      [...second, ...third]),
    tap(x => console.log(x)),
    map((data) =>
      data
        .map((x) => <MappedItem>({ code: x.id, label: x.name }))
        .sort((a, b) => a.code - b.code)
    )
  );

mappedList$.subscribe(x => console.log(x));