import { Injectable } from "@angular/core";
import { Recruiter } from "./Recruiter";

@Injectable({
    providedIn:'root'
})
export class RecruiterStorage{
    recruiterList:Array<Recruiter>=[
        
      ]


      addRecruiter(recruiter:Recruiter){
        this.recruiterList.push(recruiter)
      }

    //   deleterecruiter(recruiterId:number){
    //     const index=this.recruiterList.findIndex(e=>e.recruiterId===recruiterId)
    //     if(index!=1){
    //         this.recruiterList.splice(index,1)
    //     }
    //   }
      // updaterecruiter(recruiter:Recruiter){
      //   let rec=this.recruiterList.find(e=>e.companyName===recruiter.companyName);
      //   if(rec){
      //       rec.companyName=recruiter.companyName;
           
      //   }
      // }


    }