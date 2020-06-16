import { Observable } from 'rxjs';
import { Movie } from './../model/movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})

};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  Movie:Observable<Movie[]>;
 
  constructor( private http:HttpClient) { }
  url = 'http://localhost:3000/';

  // addMovies(movie){
  //   const url = this.url+'movies';
  //   return this.http.post(url,movie)
  // }

  addMovies(movie) {
    debugger
    const url = this.url + 'movies';
    return this.http.post(url, movie)

  }

  getAllMovies(){
    return this.http.get(this.url + 'movies')
  }

  deleteMovie(movie) {
    const url = this.url + 'movies/' + movie.id;
    return this.http.delete(url)
  }
}





