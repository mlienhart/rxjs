import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, throttleTime, bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-f-backpressure',
  templateUrl: './f-backpressure.component.html',
  styleUrls: ['./f-backpressure.component.css']
})
export class FBackpressureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// const event = fromEvent(document, 'mousemove').pipe(map(_ => Math.random() + 'test'));

// event.subscribe(console.log);

// const debounced = event.pipe(debounceTime(1000));

// debounced.subscribe(console.log);

// const throttled = event.pipe(throttleTime(1000));

// throttled.subscribe(console.log);

// const buffered = event.pipe(bufferCount(20));

// buffered.subscribe(console.log);