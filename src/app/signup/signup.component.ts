import { Component, OnInit } from '@angular/core';
import { UserSignUp } from '../models/signuppage';
import { signupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'usersSignUp';
  users:UserSignUp[] = [];
  usersignup : UserSignUp = {
    UserId:0,
    UserName:'',
    Email:'',
    Password:'',
    UserRole:''
    
  }

  constructor(private signupService : signupService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.usersignup.UserName!=''){
console.log(this.usersignup);
      this.signupService.User(this.usersignup)
      .subscribe(
        response => {
          console.log(response);
        }
      )
      }else{
        console.log('Login failed');
      }
  }
}
