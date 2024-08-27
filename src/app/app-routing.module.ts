import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guard';
import { OurStoryComponent } from './our-story/our-story.component';
const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate: [AuthGuard] },
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard] },
  {path:'about-us',component:AboutUsComponent},
  {path:'our-story',component:OurStoryComponent},
  {path: '**', redirectTo: ''} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
