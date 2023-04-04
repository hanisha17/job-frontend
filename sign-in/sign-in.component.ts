import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
public user : User[] | undefined;

  constructor(public _route:Router,private userService: UserService,private userAuthService: UserAuthService) { }
 
  

  ngOnInit(): void {
  }

  btnClick = () =>{
    this._route.navigate(['/sign-up']);
    
  }

  btnRecruiter = () => {
    this._route.navigate(['/recruiter-login'])
  }

   

//   btnHome = () =>{
//     this._route.navigate(['/sign-in/home'])
//  }

//  btnsigninForm(signinForm:NgForm){
//   this.userService.login(signinForm.value).subscribe(
//     (response:any)=>{
//       console.log(response)
//       console.log("hi i am in")
//       this.userAuthService.setRoles(response.user.role);
//         this.userAuthService.setToken(response.jwtToken);

//         const role = response.user.role[0].roleName;
//         if (role === 'Admin') {
//           this._route.navigate(['/admin-login']);
//         } else {
//           this._route.navigate(['/sign-in/home']);
//         }
//       },
//       (error: any) => {
//         console.log(error);
//       }
//     );
//   }

  public btnsigninForm(user:User){
    console.log(user)
    this.userService.login(user).subscribe(
      (response:any)=>{
              
              console.log(response)
              this.userAuthService.setRoles(response.user.role);
                this.userAuthService.setToken(response.jwtToken);
                this.userAuthService.setUser(response.user);
                // this.userAuthService.setRecruiter(response.recruiter);
        
                const role = response.user.role[0].roleName;
                if (role === 'Admin') {
                  this._route.navigate(['/admin-login']);
                } else {
                  this._route.navigate(['/sign-in/home']);
                }


              },
              (error) => {
                console.log(error);
                alert("Invalid Credentials")
              }

)
    
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
   }

 
 
}
