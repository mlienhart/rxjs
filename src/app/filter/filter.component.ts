import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { OriginalItem } from '../interfaces';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

// const firstList$: Observable<OriginalItem[]> = of([
//   { id: 4, name: "four" },
//   { id: 5, name: "five" },
// ]);

// const mappedList$: Observable<OriginalItem[]> = firstList$.pipe(
//   filter((data) => data.length > 0)
// );

// mappedList$.subscribe(x => console.log(x));