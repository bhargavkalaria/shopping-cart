import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  isLoading = false;

  constructor(private router: Router, private http: HttpClient) {
  }

  loginUser(userData): void {
    sessionStorage.setItem('user', userData.username);
    if (userData.username === 'admin@mail.com') {
      this.router.navigate(['/administrator']);
    } else {
      this.router.navigate(['/customers']);
    }
  }

  logoutUser(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  getUser() {
    return sessionStorage.getItem('user');
  }

  getToken() {
    return sessionStorage.getItem('token');
  }
}
