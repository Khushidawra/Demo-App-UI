import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn = false; // Tracks whether the user is logged in

  constructor() {}

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Method to log in the user
  login(): void {
    this.loggedIn = true;
    // You can add more logic here, like storing tokens or user info in localStorage
  }

  // Method to log out the user
  logout(): void {
    this.loggedIn = false;
    // You can add more logic here, like removing tokens or user info from localStorage
  }
}
