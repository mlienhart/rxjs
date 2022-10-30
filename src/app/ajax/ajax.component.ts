import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

}

// const list$ = ajax.getJSON("https://api.github.com/users");

// list$.subscribe(x => console.log(x));