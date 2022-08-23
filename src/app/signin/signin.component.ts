import { Component, OnInit } from '@angular/core';
import { User } from '../models/signinpage';
import { signinService } from '../service/signin.service';

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
  constructor(private signinService : signinService){
  }

  ngOnInit(): void {
    this.val=localStorage.getItem("SomeVariable");
  }

  getData()
  {
    console.info(this.val);
  }
  onSubmit() {
    if(this.user.UserName!=''&& this.user.Password!='' ){

      this.signinService.validateUser(this.user)
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
