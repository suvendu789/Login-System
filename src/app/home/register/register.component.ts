import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/user-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  userModel = new UserRegister('Suvendu', 'suvendu789@gmail.com',123456789, "");

  onSubmit() {
    console.log(this.userModel);
  }

  ngOnInit() {
  }

}
