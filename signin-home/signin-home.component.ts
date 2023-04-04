import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import Swal from 'sweetalert2';
import { Recruiter } from '../Recruiter';
import { RecruiterService } from '../recruiter.service';
import { Skills } from '../Skills';
import { User } from '../User';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-signin-home',
  templateUrl: './signin-home.component.html',
  styleUrls: ['./signin-home.component.css']
})

export class SigninHomeComponent implements OnInit {

  public recruiters: Array<Recruiter>=[];
  public Skill?:Skills[];
  public skillsList:any = [];
  public list:any = []
  searchText: any;
  skill?:Skills;
  public recruiter: Recruiter | undefined;
  public user: User | undefined;
  
  public recruit: Recruiter[] | undefined;
  

  Swal = require('sweetalert2');
  
  
  constructor( private recruiterService: RecruiterService,public _route:Router, public authService: UserAuthService) { }

public username:string=""
public appliedJobs: any;

  ngOnInit(): void {
   
    this.username=this.authService.getUser()
    
    // sessionStorage.setItem("appliedJobs",[].toString())
    
    // console.log(this.username)
    this.getAllApprovedRecruiter();
    this.skillsList=[ { skill: 'Algorithms' },
    
    { skill: 'Android' },
    
    { skill: 'Angular' },
    
    { skill: 'Artificial Intelligence' },
    
    { skill: 'Azure' },
    
    { skill: 'AWS' },
    
    { skill: 'C' },
    
    { skill: 'Cloud' },
    
    { skill: 'Cpp' },
    
    { skill: 'Data Structure' },
    
    {skill: 'Data Analytics' },
    
    { skill: 'Ethical hacking' },
    
    { skill: 'IOS' },
    
    { skill: 'Machine Learning' },

    { skill: 'MongoDB' },

    { skill: 'Python' },

    { skill: 'Java' },

    { skill: '.NET' },

    { skill: '.NoSql' },

    { skill: 'React' },

    { skill: 'R' },

    { skill: 'UI-UX' }
  ];
  }
  
  public getAllApprovedRecruiter():void{
    this .recruiterService.getAllApprovedRecruiters().subscribe(
      (data) => {
        this.recruiters = data;
      }, 
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
  
  searchSkill(searchText: any){
    alert("found : "+searchText)
    if(this.searchText===this.recruiter?.dropdown){
      console.log(searchText)
      
      this.recruiterService.findBySkill(searchText).subscribe(
        (data)=> {this.recruiters=data,
                  console.log(data)}
                
      )
      }
      else{
        console.log("not found"+ this.skill?.skill)
      }
      
    
    // this.skillsList.skill==this.recruiterService.findBySkill(searchText.value).subscribe(
    // data=> this.searchText
    // )
      
    }

    public applyAlert(id: number){
      Swal.fire({
        title: 'Successfully Applied!!',
        // text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.recruiterService.findById(id).subscribe(
        (response: any)=> {
          
          this.appliedJobs=response
          console.log(response)
          sessionStorage.setItem("appliedJobs",this.appliedJobs.companyName)
          // sessionStorage.setItem()
          
        // console.log(data)
        // this.authService.getRecruiter();

        
        // this.authService.getRecruiter();
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
        this._route.navigate(['/sign-in'])
         Swal.fire(
           'Logout Successfull!',
           '',
           'success'
         )
         
       }
     })
    
   }



  btnProfile = () =>{
    this._route.navigate(['/sign-in/home/profile']);

  }
  

  
  // searchSkill(searchValue:any){
  //   if(searchValue.skill==this.skill?.skill)  {
  //     alert("found")
  //     console.log(searchValue)
  //   }
  //   this.recruiterService.findBySkill(searchValue).subscribe(data=>this.Skill=data)
  //   console.log(searchValue);
  // }

  //   // this.recruiterService.findBySkill(skills).subscribe(
  //   //   data =>
  //   // console.log(data)
  //   // )

  //   if (this.recruiterService.findBySkill(skills)==this.skillsList.skill){
  //     this.recruiterService.findBySkill(skills).subscribe(
  //       data=>
  //       console.log("hello")
  //     )
  //   }
      
  //   console.log("hello")
    
  // }
  // searchRecepie(searchValue:string){
  //   // if(searchValue.category==this.recepie.category)
   
  //   //   data=>{
        
  //   //     alert("menu found")
  //   //    }
  //   this._menuClient.searchRecepie(searchValue).subscribe(data=>this.menus=data)
  // }
  
  }