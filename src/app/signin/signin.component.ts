import { Component, OnInit } from '@angular/core';
import { User } from '../models/signinpage';
import { signinService } from '../service/signin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  val : string | null ="noValue";
  title = 'users';
  users:User[] = [];
  user : User = {
    id:'',
    UserName:'',
    Password:'',
    UserRole:''
  }
  constructor(private signinService : signinService,private router : Router){
  }

  ngOnInit(): void {
    this.val=localStorage.getItem("SomeVariable");
  }

  getData()
  {
    console.info(this.val);
  }
  response:any;
  ErrMsg=''
  onSubmit() {
    if(this.user.UserName!=''&& this.user.Password!='' && this.user.UserRole=='Author'){

      this.signinService.validateUser(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.response = response;
          localStorage.setItem('response',this.response.response,)
          if(this.response.token=='')
          {
            alert('Login failed');
            this.ErrMsg='Login failed';
            return;
          }
          alert('Login Sucess');
          this.router.navigate(['/Books']);
        }
      )
      }
      else if(this.user.UserName!='' && this.user.Password!='' && this.user.UserRole == 'Reader')
      {
        this.signinService.validateUser(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.response = response;
          localStorage.setItem('response',this.response.response,)
        if(this.response.token=='')
          {
            alert('Login failed');
            this.ErrMsg='Login failed';
            return;
          }
          alert('Login Sucess');
          this.router.navigate(['/Payment']);
      }
      )
    }
      else{
        console.log('Login failed');
      }
  }
}
