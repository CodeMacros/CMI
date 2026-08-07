import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";
import { Api } from '../service/api';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  userId: string = '';
  password: string = '';

  constructor(private apiService: Api, private route: Router) { }

  login() {
    const body = {
      username: this.userId,
      password: this.password
    };
    console.log(body);
    this.apiService.makePostRequest('login', body).subscribe({
      next: (res) => {
        console.log(res);
        if (res.success) {
          this.route.navigate(['/layout/dashboard']);
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  validateLogin() {
    if (!this.userId) {
      alert('Please Enter User ID');
    } else if (!this.password) {
      alert('Please Enter Password');
    } else {
      this.login();
    }
  }
}
