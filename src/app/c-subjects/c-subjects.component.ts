import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-c-subjects',
  templateUrl: './c-subjects.component.html',
  styleUrls: ['./c-subjects.component.css']
})
export class CSubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// const subject = new Subject();

// subject.subscribe(console.log);

// subject.next('Hello');
// subject.next('World');

// const bs = new BehaviorSubject('Hola');

// bs.subscribe(console.log);

// bs.next('Mundo');

// bs.subscribe(console.log);