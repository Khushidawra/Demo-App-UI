import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username: string = "";
  email: string = "";
  constructor(public router:Router){}
ngOnInit(): void {
  this.username = localStorage.getItem('UserName') || '';
  this.email = localStorage.getItem('Email') || '';
  if (!this.username || !this.email) {
    this.router.navigate(['/login']);
  }
}

}
