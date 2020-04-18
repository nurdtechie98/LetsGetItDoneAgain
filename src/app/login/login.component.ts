import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: AuthService) { }

  getFormData(value){
    this.auth.login(value).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
