import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  constructor() { }

  observable$: Observable<string>;
  observer$: Observer<string>;

  handleData(data: any) {
    console.log(`data: ${data}`);
  }

  handleError(error: any) {
    console.log(`error: ${error}`);
    return Observable.throw(error);
  }

  handleComplete() {
    console.log("complete");
  }

  ngOnInit(): void {
    this.observable$ = new Observable((observer: Observer<string>) => {
      this.observer$ = observer;
    });
    this.observable$.subscribe(
      this.handleData,
      this.handleError,
      this.handleComplete
    );
    this.observer$.next("1");
    this.observer$.next("2");
    this.observer$.complete();
    this.observer$.next("3");
    this.observer$.next("4");
  }
}