import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  
  PATH_OF_API = "http://localhost:8888/user"

  requestHeader = new HttpHeaders(
    { "No-Auth":"True"}
  );
  constructor(private httpClient: HttpClient,private userAuthService: UserAuthService) { }

  public register(user: User){
    return this.httpClient.post(this.PATH_OF_API+"/sign-up", user, {headers: this.requestHeader});
  }


  public login(user: User){
    return this.httpClient.post(this.PATH_OF_API+"/sign-in",user, {headers: this.requestHeader});
  }

  // public login(): Observable<User[]>{
    // return this.httpClient.get<User[]> (`${this.PATH_OF_API}/sign-in`);
  // }
  // public saveUser(user:User): Observable<User[]>{
  //   return this.httpClient.post<User[]>(`${this.PATH_OF_API}/sign-in`, user)
  // }

  public forUser() {
    return this.httpClient.get(this.PATH_OF_API + '/sign-in/home', {
      responseType: 'text',
    });
  }

  public forAdmin() {
    return this.httpClient.get(this.PATH_OF_API + '/admin-login', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles: any):any {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }



}
