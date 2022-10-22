import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const firstList$: Observable<OriginalItem[]> = of([
  { id: 4, name: "four" }
]);
const secondList$: Observable<OriginalItem[]> = of([
  { id: 3, name: "three" },
  { id: 5, name: "five" },
  { id: 2, name: "two" }
]);

const mappedList$: Observable<MappedItem[]> = firstList$
  .pipe(
    switchMap((firstList) =>
      secondList$.pipe(
        map((data) => data.filter((item) => item.id < firstList[0].id))
      )
    )
  )
  .pipe(
    map((data) =>
      data
        .map((x) => ({ code: x.id, label: x.name }))
        .sort((a, b) => a.code - b.code)
    )
  );

mappedList$.subscribe(x => console.log(x));

export interface OriginalItem {
  id?: number;
  name?: string;
}

export interface MappedItem {
  code?: number;
  label?: string;
}