import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recruiter } from './Recruiter';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  private apiServerUrl= "http://localhost:8888/recruiter"
 

  constructor(private http :HttpClient){ }

  public findBySkill(searchText: String):Observable<Array<Recruiter>> {
    return this.http.get<Array<Recruiter>>(`${this.apiServerUrl}/skills/${searchText}`)
  }

  public findById(id: number):Observable<Array<Recruiter>>{
    return this.http.get<Array<Recruiter>>(`${this.apiServerUrl}/sign-in/home/${id}`)
  }
  
  public getRecruiter(): Observable<Recruiter[]> {
      return this.http.get<Recruiter[]>(`${this.apiServerUrl}/sign-in/home`);
  }
  public addRecruiter(recruiter:Recruiter): Observable<Recruiter[]> {
      return this.http.post<Recruiter[]>(`${this.apiServerUrl}/recruiter-login`,recruiter);
  }
  public deleteRecruiter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
}

  public changeStatus(recruiter: Recruiter): Observable<Recruiter>{
    return this.http.put<Recruiter>(`${this.apiServerUrl}/changestatus`,recruiter)
  }

  public getAllPendingRecruiters(): Observable<Array<Recruiter>>{
    return this.http.get<Array<Recruiter>>(`${this.apiServerUrl}/getallstatus/Pending`)
  }
  public getAllApprovedRecruiters(): Observable<Array<Recruiter>>{
    return this.http.get<Array<Recruiter>>(`${this.apiServerUrl}/getallstatus/Approved`)
  }

// findBySkill(skill:String):Observable<Skills>{
//   return this.http.get<Skills>(`${this.apiServerUrl}/skill/${skill}`)
// }

  // public updateRecruiter(recruiter:Recruiter): Observable<Recruiter> {
  //     return this.http.put<Recruiter>(`${this.apiServerUrl}/recruiter/update`,recruiter);
  // }
  
}
