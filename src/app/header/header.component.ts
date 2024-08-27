import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  constructor(private router:Router,private cdr:ChangeDetectorRef,public appComponent: AppComponent){ }
login(){
  this.appComponent.showLoginPopup = true;
  this.cdr.detectChanges();
  }
}
