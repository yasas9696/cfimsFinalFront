import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import { ToastrService } from 'ngx-toastr';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  user: User = {
    username: '',
    email: '',
    password: '',
    name: '',
    dept: '',
    type: '',
  }

  reEnterPassword: string = '';

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addUser() {
    if (this.user.username == "") {
      this.toastr.warning("Username is Required");
    }
    else if (this.user.email == "") {
      this.toastr.warning("email is Required");
    }
    else if (this.user.password == "") {
      this.toastr.warning("password is Required");
    }
    else if (this.user.name == "") {
      this.toastr.warning("name is Required");
    }
    else if (this.user.dept == "") {
      this.toastr.warning("dept is Required");
    }
    else if (this.user.type == "") {
      this.toastr.warning("type is Required");
    }
   
    else {
      this.userService.addUser(this.user).subscribe((data: any) => {
        console.log(data);
        this.toastr.success("Registration Successfull");
        this.ngOnInit()
      });
    }
  }

  
  cancel(){
    this.ngOnInit()
  
  }

}
