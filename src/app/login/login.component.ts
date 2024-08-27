import { Component,NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../service/app.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName:string = "";
  email: string = "";
  password: string = "";
  showLoginMessage: string = "";
  showRegisterMessage: string = "";
  selectedTab: string = 'login'; 
  showUserMessage: string = "";
  showRegisterPopup: boolean =false;
  showErrors:boolean = false;
  emailValid: boolean = true;
  isLoading:boolean = false;
constructor(public service:AppService,public router:Router,public main:AppComponent,public auth:AuthService){}
login(){

  this.showUserMessage= "";
  this.showErrors = true; 
  this.validateEmail();
  if (!this.email || !this.password || !this.emailValid) 
    return;
  this.isLoading= true;
this.service.login(this.email,this.password).subscribe(response => {
  localStorage.setItem('UserName',response.userName);
  localStorage.setItem('Email',response.email);
  this.auth.login();
  this.main.isLoggedIn();
  this.router.navigate(['/home']);
  console.log('Login successful', response);
  this.main.showLoginPopup = false;
  this.isLoading = false;
}, error => {
  if(error.status == 400 && error.error == "Incorrect Credentials"){
    this.showUserMessage = "Incorrect Credentials";
  this.isLoading = false;
  }
  else
  {
    this.isLoading = false;
  this.showUserMessage = error
  console.error('Login failed', error);
  }
});
}
register(){
  this.showUserMessage= "";
  this.showErrors = true; 
  this.validateEmail();
  if (!this.email || !this.password || !this.emailValid) 
    return;
  this.isLoading= true;
  this.service.register(this.userName,this.email,this.password).subscribe(response => {
    console.log('User Registered Successfully', response);
    this.isLoading = false;
    localStorage.setItem('UserName',response.userName);
    localStorage.setItem('Email',response.email);
    this.auth.login()
    this.main.isLoggedIn();
    this.router.navigate(['/home']);
      }, error => {
    if(error.status == 400){
      this.showUserMessage = error.error;
    this.isLoading= false;
    }
    else
    {this.showUserMessage = error;
      this.isLoading = false;
    console.error('Login failed', error);
    }
  });
}
setValuesBooleans(){
  this.showLoginMessage = '';
  this.showUserMessage = '';
  this.userName= '';
  this.email= '';
  this.password = '';
  this.showErrors = false;
  this.emailValid = true;
  this.showRegisterMessage = '';
}
validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  this.emailValid = emailPattern.test(this.email);
}


closePopup() {
  this.main.showLoginPopup = false;
  this.showRegisterPopup = false;
  this.router.navigate([''])
}
}
