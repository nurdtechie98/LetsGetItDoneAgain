import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Output() sendFormData = new EventEmitter<string>();

  doSomething(value) {
    this.sendFormData.emit(value);
  }

  ngOnInit(): void {
  }

}
