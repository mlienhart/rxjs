import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit {
  constructor(private element: ElementRef) { }

  observableFromEvent$: Observable<any> = fromEvent(this.element.nativeElement, "keyup");

  ngOnInit(): void {
    this.handleInputFieldData();
  }

  handleInputFieldData() {
    return this.observableFromEvent$.pipe(
      map((e) =>
        e.target.value))
      .subscribe((result) => {
        console.log(result);
      });
  }
}