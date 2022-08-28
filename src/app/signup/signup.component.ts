import { Component, OnInit } from '@angular/core';
import { UserSignUp } from '../models/signuppage';
import { signupService } from '../service/signup.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  val : string | null ="noValue";
  title = 'usersSignUp';
  users:UserSignUp[] = [];
  usersignup : UserSignUp = {
    UserId:0,
    UserName:'',
    Email:'',
    Password:'',
    UserRole:''
    
  }

  constructor(private signupService : signupService,private router : Router) { }

  ngOnInit(): void {
    this.val=localStorage.getItem("SomeVariable");
  }
  getData()
  {
    console.info(this.val);
  }
  response:any;
  onSubmit() {
      debugger;
      this.signupService.User(this.usersignup)
      .subscribe(
        response => {
          this.response = response;
          if(this.response.UserRole=='Author')
          {
            this.router.navigate(['/createbooks']);
          }
          else{
            this.router.navigate(['/Books'])
          }
        }
      )
      }     
}
