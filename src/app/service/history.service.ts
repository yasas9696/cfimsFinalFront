import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const headeroption ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  History:Observable<History[]>;
  history:Observable<History>;



  constructor( private http:HttpClient) { }

  url = 'http://localhost:3000/';

  

  getAllHistories() {
    return this.http.get(this.url + 'historys');
  }

  getHistoryById(id): Observable<History> {
    this.history = this.http.get<History>(this.url + 'historys/'+id);
    return this.history;
  }
  // updateHistory(History) {
  //   const url = this.url + 'historys/' + this.history.id;
  //   return this.http.put(url, this.History)
  // }
}







//   constructor( private http:HttpClient) { }
//   url = 'http://localhost:3000/';

//   // addMovies(movie){
//   //   const url = this.url+'movies';
//   //   return this.http.post(url,movie)
//   // }

//   addMovies(movie) {
//     debugger
//     const url = this.url + 'movies';
//     return this.http.post(url, movie)

//   }

//   getAllMovies(){
//     return this.http.get(this.url + 'movies')
//   }
// }