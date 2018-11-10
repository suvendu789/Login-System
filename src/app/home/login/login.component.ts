import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  userModel = new UserLogin('suvendu789@gmail.com',"");

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userModel)
  }
}
