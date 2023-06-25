import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  onCancel() {
    const form = document.querySelector('.signup-form') as HTMLFormElement;
    form.reset();
  }
}
