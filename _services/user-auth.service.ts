import { Injectable } from '@angular/core';
import { Recruiter } from '../Recruiter';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user: User | undefined;
  recruiter:Recruiter | undefined;
  
  constructor() { }
  public setRoles(roles: []) {
    sessionStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(sessionStorage.getItem('roles') || '{}')  ;
  }

  public setToken(jwtToken: string) {
    sessionStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return sessionStorage.getItem('jwtToken') || '{}';
  }

  public clear() {
    sessionStorage.clear();
  }

  public setUser(user: []){
    return sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() : string{
    return JSON.parse(sessionStorage.getItem('user') || '{}').userName ;

  }

  public getEmail() : string{
    return JSON.parse(sessionStorage.getItem('user') || '{}').email ;

  }

  public getQuali() : string{
    return JSON.parse(sessionStorage.getItem('user') || '{}').qualification ;

  }

  public setRecruiter(recruiter: []){
    return sessionStorage.setItem('recruiter', JSON.stringify(recruiter));
  }

  public getRecruiter() : any{
    return JSON.parse(sessionStorage.getItem('recruiter') || '{}').companyName;

  }
  public getJobTitle() : string{
    return JSON.parse(sessionStorage.getItem('recruiter') || '{}').jobTitle ;

  }
  public getLocation() : string{
    return JSON.parse(sessionStorage.getItem('recruiter') || '{}').location ;

  }




  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
