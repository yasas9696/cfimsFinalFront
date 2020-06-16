import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../service/user.service';
import { User } from 'app/model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // user: User = {
  //   firstName: '',
  //   lastName: '',
  //   idNumber: '',
  //   userUsername: '',
  //   userPassword: '',
  // }

  password: string;

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  // checkDetails() {
  //   this.userService.username = this.user.userUsername;
  //   this.userService.userLogin().subscribe((checkData: any) => {
  //     console.log(checkData);
  //     this.password = checkData.userPassword;
  //   });
  // }

  // userLogin() {
  //   if (this.user.userUsername == "") {
  //     this.toastr.warning("Enter Username");
  //   }
  //   else if (this.user.userPassword == "") {
  //     this.toastr.warning("Enter Password");
  //   }
  //   else {
  //     if (this.password == this.user.userPassword) {
  //       this.toastr.success("Login Successfull");
  //       this.router.navigate(['dashboard']);
  //     }
  //     else {
  //       this.toastr.warning("Incorrect Username or Password");
  //       this.user.userPassword = "";
  //       this.user.userUsername = "";
  //     }
  //   }
  // }



}
