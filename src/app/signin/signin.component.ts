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
    Password:''
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
  onSubmit() {
    console.log("display");
    if(this.user.UserName!=''&& this.user.Password!='' ){

      this.signinService.validateUser(this.user)
      .subscribe(
        response => {
          this.response = response;
          if(this.response.token=='')
          {
            alert('Login failed');
            return;
          }
          alert('Login Sucess');
          this.router.navigate(['/Books']);
        }
      )
      }else{
        console.log('Login failed');
      }
  }
}
