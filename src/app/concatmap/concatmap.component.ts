import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { MappedItem, OriginalItem } from '../interfaces';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css']
})
export class ConcatmapComponent implements OnInit {
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

const mappedList$: Observable<MappedItem[]> = firstList$
  .pipe(
    concatMap((first) =>
      secondList$.pipe(
        map((data) => data.filter((x) => x.id < first[0].id))
      )
    ),
    map((data) =>
      data
        .map((x) => <MappedItem>({ code: x.id, label: x.name }))
        .sort((a, b) => a.code - b.code)
    )
  );

mappedList$.subscribe(x => console.log(x));