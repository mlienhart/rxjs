import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements OnInit {
  constructor(private element: ElementRef) { }

  observableFromEvent$: Observable<any> = fromEvent(this.element.nativeElement, "keyup");

  ngOnInit(): void {
    this.handleInputFieldData();
  }

  handleInputFieldData() {
    return this.observableFromEvent$.pipe(
      debounceTime(1000),
      map((e) =>
        e.target.value))
      .subscribe((result) => {
        console.log(result);
      });
  }

}
