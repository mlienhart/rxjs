import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

// streams are like water pipes
const warmUp = (water: string) => `${water}-warm`;
const stream$ = of("water");
const waterPipe$ = stream$
  .pipe(
    tap(() => console.log("release air")),
    filter((water) => water === "water"),
    map((water) => warmUp(water)))
  .subscribe(water => console.log("take shower!", water));
waterPipe$.unsubscribe();