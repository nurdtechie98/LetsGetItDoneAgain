import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  Lastname : string = "shetty"
  Firstname : string = "chirag"

  ngOnInit(): void {
  }

  doSomething(value:any){
    console.log(value);
  }

}
