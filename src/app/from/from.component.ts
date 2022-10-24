import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { OriginalItem } from '../interfaces';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}

// const firstList$: Observable<OriginalItem> = from([
//   { id: 4, name: "four" },
//   { id: 5, name: "five" },
// ]);

// firstList$.subscribe(x => console.log(x));