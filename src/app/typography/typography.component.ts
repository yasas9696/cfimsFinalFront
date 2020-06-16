import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  user: User ={

    name: '',
    username:'',
    email:'',
    dept:'',
    type:'',

  }

  UsersArray = [];
  datasource :any=[];

  constructor(private userService: UserService, private toastr: ToastrService, private router:Router) { }



  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {
    this.userService.getUsers().subscribe((userData: any) => {
      this.UsersArray = userData.user;
      this.datasource = [...this.UsersArray];
      this.toastr.success("User Table Loaded Successfully");
    });
  }

  delete(user){
    if(confirm('are you sure to remove this history?')){
    this.userService.deleteUser(user).subscribe((res: any)=>{
     
      if(res.code===0){
        this.UsersArray.splice(this.UsersArray.indexOf(user),1);
        this.datasource = [...this.UsersArray];
      }
    })
  }


  }
  applyFilter(filterValue: string) {
    this.datasource = [...this.UsersArray]
     this.datasource = this.datasource.filter(x=>x.name.includes(filterValue.trim()));
console.log(this.datasource)
    }


  // removeUser(user){
  //   if(confirm('are you sure to remove this user?')){
  //     this.userservice.deleteUser(user).subscribe((res:any)=>{
  //       if(res.code==1){
  //         this.toastr.error("delete failed")
  //       }
  //       else{
  //         this.toastr.success("deleted successfuly")
  //         this.users.splice(this.users.indexOf(user) , 1)
  //         this.dataSource._updateChangeSubscription()
  //       }
        
  //         console.log(res.result)
  //       })
  //     }
  //   }







}


