import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OriginalItem } from '../interfaces';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

// const firstList$: Observable<OriginalItem[]> = of([
//   { id: 4, name: "four" },
//   { id: 5, name: "five" },
// ]);

// firstList$.subscribe(x => console.log(x));