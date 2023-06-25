import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  signUpUsers: any[] = [];

  loginObj: any = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData) {
      this.signUpUsers = JSON.parse(localData);
    }
  }

  onLogin() {
    const userExist = this.signUpUsers.find(user => user.username === this.loginObj.username && user.password === this.loginObj.password);
    if (userExist != undefined) {
      alert('Login Success');
    }
    else {
      alert('Login Failed');
    }
  }

  onCancel() {
    const form = document.querySelector('.login-form') as HTMLFormElement;
    form.reset();
  }
}
