import { MovieService } from './../../service/movie.service';
import { Movie } from './../../model/movie';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../service/user.service';
import { User } from 'app/model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  movie: Movie = {
    item_type: '',
    item_name: '',
    item_model: '',
    item_qr: '',
    item_status: '',
    item_capacity: '',
    item_image: '',
  }


  constructor(private movieService: MovieService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddItem() {
    if (this.movie.item_type == "") {
      this.toastr.warning("item type is Required");
    }
    else if (this.movie.item_name == "") {
      this.toastr.warning("item name is Required");
    }
    else if (this.movie.item_model == "") {
      this.toastr.warning("item model is Required");
    }
    else if (this.movie.item_qr == "") {
      this.toastr.warning("item qr is Required");
    }
    else if (this.movie.item_status == "") {
      this.toastr.warning("item status is Required");
    }
    else if (this.movie.item_capacity == "") {
      this.toastr.warning("item capacity is required");
    }
    else if (this.movie.item_image == "") {
      this.toastr.warning("item image is required");
    }
    else {
      this.movieService.addMovies(this.movie).subscribe((data: any) => {
        console.log(data);
        this.toastr.success("Item Added Successfull");
        this.ngOnInit()
      });
    }
  }

  cancel(){
    this.ngOnInit()
  
  }

}
