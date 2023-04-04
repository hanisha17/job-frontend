import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';
import { Recruiter } from '../Recruiter';
import { RecruiterService } from '../recruiter.service';
import { RecruiterStorage } from '../RecruiterStorage';
import { Skills } from '../Skills';

@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent implements OnInit {
  public recruiters: Recruiter[] | undefined;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings!: IDropdownSettings;


  // public recruiters: Recruiter[] | undefined;
  // constructor( private _clientRecruiter: _clientRecruiter) { }
  // public getRecruiter():void{
  //   this ._clientRecruiter.getRecruiter().subscribe(
  //     (response:Recruiter[]) => {
  //       this.recruiters = response;
  //     }, 
  //     (error:HttpErrorResponse) => {
  //       alert(error.message)
  //     }
  //   )
  // }

  ngOnInit(): void {
    // this.saveRecruiter()
    this.dropdownList = [
      { skill_id: 1,skill: 'Algorithms' },

      { skill_id: 2,skill: 'Android' },

      { skill_id: 3,skill: 'Angular' },

      { skill_id: 4,skill: 'Artificial Intelligence' },

      { skill_id: 5,skill: 'Azure' },

      { skill_id: 6,skill: 'AWS' },

      { skill_id: 7,skill: 'C' },

      { skill_id: 8,skill: 'Cloud' }, 

      { skill_id: 9,skill: 'Cpp' },

      { skill_id: 10,skill: 'Data Structure' },

      { skill_id: 11,skill: 'Data Analytics' },

      { skill_id: 12,skill: 'Ethical hacking' },

      { skill_id: 13,skill: 'IOS' },

      { skill_id: 14,skill: 'Machine Learning' },

      { skill_id: 15,skill: 'MongoDB' },

      { skill_id: 16,skill: 'Python' },

      { skill_id: 17,skill: 'Java' },

      { skill_id: 18,skill: '.NET' },

      { skill_id: 19,skill: '.NoSql' },

      { skill_id: 20,skill: 'React' },

      { skill_id: 21,skill: 'R' },

      { skill_id: 22,skill: 'UI-UX' },
    ]

    this.selectedItems = []

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'skill_id',
      textField: 'skill',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    }
  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  constructor(public _clientRecruiter:RecruiterService,private _router:Router){
   
  }
  
  saveRecruiter(recruiter:Recruiter){   // recruiter:Recruiter
    console.log(recruiter)
    this._clientRecruiter.addRecruiter(recruiter).subscribe(
      data=>{
      alert("Request sent to Admin")
      this._router.navigate(['/sign-in'])
    
    
  }, (error)=>{
    console.log(error);
    alert( recruiter.companyName + " for "+ recruiter.jobTitle + " position at " + recruiter.location +" already exist.")
    
  } 
  );

    // console.log(recruiter)
    // alert("entered")
    // this._clientRecruiter.addRecruiter(recruiter).subscribe(
    // data=>{
    // console.log(data);
    // this._router.navigate(["/recruiter-card"])
    // },
    // error=>console.log(error));
    
    
    // {
    //   alert("saved")
    // }
    // this.RecruiterStorage.recruiterList.push(recruiter)
}


    

// getRecruiters() : void {
//   console.log('Fetching all recruiters...');
//     this._clientRecruiter['getRecruiters']().subscribe(
//       (response: Recruiter[]) => {
//         console.log(response);
//         this.recruiters= response;
//       },
//       (error: HttpErrorResponse) => {
//         console.error(error);
//       }
//   );
// }

// public addRecruiter(recruiterForm: NgForm): void {
 
//   console.log('Adding Recruiter...', recruiterForm.value);
//     this._clientRecruiter.addRecruiter(recruiterForm.value).subscribe(
//       (response:Recruiter[]) => {
//         console.log(response);
//         this.recruiters = response;
//         this.getRecruiters();
//         recruiterForm.reset();
//       },
//       (error: HttpErrorResponse) => {
//         console.error(error);
//         recruiterForm.reset();
//       }
//   );
// }


 


}


