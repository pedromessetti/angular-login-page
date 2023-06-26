import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData) {
      this.signUpUsers = JSON.parse(localData);
    }
  }

  onLogin() {
    const userExist = this.signUpUsers.find(user => user.username === this.loginObj.username && user.password === this.loginObj.password);
    if (userExist != undefined) {
      console.log('Login Success');
      localStorage.setItem('currentUser', JSON.stringify(userExist));
      this.router.navigate(['/user']);
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
