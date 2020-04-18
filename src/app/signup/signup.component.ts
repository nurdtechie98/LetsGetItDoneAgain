import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private auth: AuthService) { }

  getFormData(value){
    this.auth.signup(value).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
