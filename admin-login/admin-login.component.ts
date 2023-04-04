import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Recruiter } from '../Recruiter';
import { RecruiterService } from '../recruiter.service';
import { Status } from '../status';
import { UserAuthService } from '../_services/user-auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 
  ngOnInit(): void {
    this.getRecruiter();
    
  }
  public recruiters: Recruiter[] | undefined;
  public recruiter: Recruiter | undefined;
  
  constructor(private recruiterService: RecruiterService, private _router:Router, public authService: UserAuthService){}
  
  
  public getRecruiter():void{
    this .recruiterService.getRecruiter().subscribe(
      (response:Recruiter[]) => {
        this.recruiters = response;
        
      }, 
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
  
  onDelete(id: number){
    if(confirm("Sure to delete?")){
    this.recruiterService.deleteRecruiter(id).subscribe(
      data =>{alert("Deleted")
      console.log(id)
      this.ngOnInit()
    
    }
    )
  }
  
  
  }

  onSave=(recruiter: any)=>{
    recruiter.status= Status.Approved;
    
    this.recruiterService.changeStatus(recruiter).subscribe(
      data=>{this.recruiter=data
      this.ngOnInit();
      }
    )
    
  }

  public isLogOut(){
    Swal.fire({
     title: 'Are you sure?',
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Logout'
   }).then((result) => {
     if (result.isConfirmed) {
      this.authService.clear();
      this._router.navigate(['/sign-in'])
       Swal.fire(
         'Logout Successfull!',
         '',
         'success'
       )
       
     }
   })
  
 }
  
  // onSave=()=>{
  //   this._router.navigate(['/recruiter-card'])
  // }

}
