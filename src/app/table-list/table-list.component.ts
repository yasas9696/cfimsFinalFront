import { Movie } from './../model/movie';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from './../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  movie: Movie = {
    item_type:'',
    item_name:'',
    item_model:'',
    item_qr:'',
    item_capacity:'',
    item_status:'',
    item_image:'',
  }

  MoviesArray = [];

  datasource :any=[];

  constructor(private movieService: MovieService,private toastr: ToastrService, private router: Router) { }
  

 

  ngOnInit(): void {
    this.getAllMovies();

  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe((movieData: any) => {
      this.MoviesArray = movieData.movie;
      this.datasource = [...this.MoviesArray];
      this.toastr.success("Item Table Loaded Successfully");
    });
  }

  // addToCart() {
  //   this.itemService.itemAddToCart = this.ItemsArray[0];
  //   this.toastr.success("Item Added to cart Successfully");
  //   this.router.navigate(['shopping-cart']);
  // }


  remove(movie) {
    if(confirm('are you sure to remove this Item?')){
    this.movieService.deleteMovie(movie).subscribe((res: any)=>{
     
        if(res.code===0){
          this.MoviesArray.splice(this.MoviesArray.indexOf(movie),1);
          this.datasource = [...this.MoviesArray];
        }
      
    })
  }

  }


  



  applyFilter(filterValue: string) {
    this.datasource = [...this.MoviesArray]
     this.datasource = this.datasource.filter(x=>x.item_name.includes(filterValue.trim()));
console.log(this.datasource)
    }



}
