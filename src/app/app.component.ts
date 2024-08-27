import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showLoginPopup:boolean = false;
  constructor(public router:Router,public authService:AuthService){}
  isLoggedInBool: boolean = false;
  logout(){
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    this.router.navigate(['']);
    this.authService.logout();
  }
  isLoggedIn(){
    return this.authService.loggedIn;
  }
}
