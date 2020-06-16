import { AuthenticationService } from './../service/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../service/user.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  password: any = ''
  username: any = ''
 

  constructor(private auth:AuthenticationService , private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  cancel(){
    this.router.navigate([''])
  }


  
  signIn(){
    debugger
     if(this.username==''){
      console.log('Username cannot be empty')
      this.toastr.error( "Username cannot be empty")
    } 
    else if(this.password==''){
      console.log('password cannot be empty')
      this.toastr.error("password cannot be empty")
    }else{
      debugger
      const val = this.auth.signIn(this.username, this.password).subscribe((data: any) => {
      console.log(data.result)
        if (data.code==0) {
  
          if(data.result.length==0){
            console.log(data.result)
            this.toastr.warning('Please check your Username / Password and try again');
          }
          else {
            // console.log(val);
            this.toastr.success('Successfully loged in');
            localStorage.setItem('user',data.result[0].type);
            localStorage.setItem('userId',this.username)
            console.log(data.result[0])
            console.log(localStorage.userId)
  
            localStorage.setItem('token','abc')
            console.log(localStorage.token)
            this.router.navigate(['dashboard'])
    
            
            //localStorage.setItem('user', this.username);
            //this._router.navigate(['']);
          }
  
          }
          else{
            this.toastr.warning('network error');

          }
        
        
      });


    }
    
  }


}
export class Login{
  username?:any
  password?: any

}
