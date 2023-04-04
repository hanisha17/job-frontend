import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { User } from '../User';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  dropdownList:any= [];
  selectedItems:any = [];
  dropdownSettings!: IDropdownSettings;
  user: User[] | undefined ;

  constructor(public _route:Router,private userService: UserService) { }

  ngOnInit() {
    this.dropdownList = [
      { skill_id: 1,skill: 'Algorithms' },

      { skill_id: 2,skill: 'Android' },

      { skill_id: 3,skill: 'Angular' },

      { skill_id: 4,skill: 'Artificial Intelligence' },

      { skill_id: 5,skill: 'Azure' },

      { skill_id: 6,skill: 'AWS' },

      { skill_id: 7,skill: 'C' },

      { skill_id: 8,skill: 'Cloud' },

      { skill_id: 9,skill: 'C++' },

      { skill_id: 10,skill: 'C#' },

      { skill_id: 11,skill: 'Data Structure' },

      { skill_id: 12,skill: 'Data Analytics' },

      { skill_id: 13,skill: 'Ethical hacking' },

      { skill_id: 14,skill: 'IOS' },

      { skill_id: 15,skill: 'Machine Learning' },

      { skill_id: 16,skill: 'MongoDB' },

      { skill_id: 17,skill: 'Python' },

      { skill_id: 18,skill: 'Java' },

      { skill_id: 19,skill: '.NET' },

      { skill_id: 20,skill: '.NoSql' },

      { skill_id: 21,skill: 'React' },

      { skill_id: 22,skill: 'R' },

      { skill_id: 23,skill: 'UI/UX' }
      
    ];

    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'skill_id',
      textField: 'skill',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    }
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  
  onRegister(user: User){
    this.userService.register(user).subscribe(
      data=> console.log(data)
      )
      this._route.navigate(['/sign-in'])
  }
 
  

  
  
}

  
