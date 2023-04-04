import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private userAuthService: UserAuthService) { }

  ngOnInit(): void {
  }

  btnLogin=()=>{
    this.router.navigate(['/sign-in'])
  }

  // public isLoggedIn(){
  //   return this.userAuthService.isLoggedIn();
  //  }

  btnSub(){
    alert('Stay Connected for more updates.')
  }
}
