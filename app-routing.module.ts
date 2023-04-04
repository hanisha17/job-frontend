import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

import { HeaderComponent } from './header/header.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { SignInHomeProfileComponent } from './sign-in-home-profile/sign-in-home-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninHomeComponent } from './signin-home/signin-home.component';
import { AuthGuard } from './_auth/auth.guard';


const routes: Routes = [
  {
    path:'',component:HeaderComponent
  },

  
  {
    path:'sign-in',component:SignInComponent
  },
  {
    path:'sign-up', component:SignUpComponent
  },
  {
    path:'admin-login', component:AdminLoginComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'recruiter-login', component:RecruiterLoginComponent
  },
  
  {
    path:'sign-in/home', component:SigninHomeComponent, canActivate:[AuthGuard], data:{roles:['User']}
  },
  {
    path:'sign-in/home/profile', component:SignInHomeProfileComponent, canActivate:[AuthGuard], data:{roles:['User']}
  },
  {
    path:'forbidden', component:ForbiddenComponent
  },
  {
    path:'**',component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
