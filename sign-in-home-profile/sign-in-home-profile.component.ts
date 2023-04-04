import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruiter } from '../Recruiter';
import { User } from '../User';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-sign-in-home-profile',
  templateUrl: './sign-in-home-profile.component.html',
  styleUrls: ['./sign-in-home-profile.component.css']
})
export class SignInHomeProfileComponent implements OnInit {

  public userName: string='';
  public email: string='';
  public qualification: string='';
  public appliedJobs:any=sessionStorage.getItem("appliedJobs")
  

  public companyName: string='';
  // public jobTitle: string='';
  // public location: string='';

  constructor(public authService: UserAuthService, public _router: Router) { }

  ngOnInit(): void {
    this.userName = this.authService.getUser();
    this.email = this.authService.getEmail();
    this.qualification = this.authService.getQuali();

    // this.companyName = this.appliedJobs.companyName;
    // this.jobTitle = this.authService.getJobTitle();
    // this.location = this.authService.getLocation();

  }

  btnHome(){
    this._router.navigate(['/sign-in/home'])
  }
}
