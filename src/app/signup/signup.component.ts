import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signUpUsers: any[] = [];

  signUpObj: any = {
    username: '',
    email: '',
    password: ''
  };
  
  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData) {
      this.signUpUsers = JSON.parse(localData);
    } else {
      this.signUpUsers = [];
    }
  }

  onSignUp() {
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    this.signUpObj = {
      username: '',
      email: '',
      password: ''
    };
  }

  onCancel() {
    const form = document.querySelector('.signup-form') as HTMLFormElement;
    form.reset();
  }
}
