import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  demo: string = "This uses inbuilt pipeline";
  test: string = "This uses custom pipeline";
  playGround: object = { 
    'margin.px': '10', // note even rhs numbers are string and unit specified in lhs like px here
    'width.vh': '100',
    'padding.px': '10',
    'background-color': 'Azure',
    'border': '2px solid black'
  };
  val: string = '10';
  constructor() { }

  ngOnInit(): void {
  }

}
