import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = form.elements.namedItem('username') as HTMLInputElement;
    const password = form.elements.namedItem('password') as HTMLInputElement;
    console.log(`Username: ${username.value}, Password: ${password.value}`);
  }

  onCancel() {
    const form = document.querySelector('.login-form') as HTMLFormElement;
    form.reset();
  }
}
