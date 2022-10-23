import { Component, OnInit } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';
import { OriginalItem, MappedItem } from '../interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// const firstList$: Observable<OriginalItem[]> = of([
//   { id: 4, name: "four" },
//   { id: 5, name: "five" },
// ]);

// const mappedList$: Observable<MappedItem[]> = firstList$.pipe(
//   map((data) =>
//     data
//       .map((x) => <MappedItem>({ code: x.id, label: x.name }))
//       .sort((a, b) => a.code - b.code)
//   )
// )

// mappedList$.subscribe(x => console.log(x));