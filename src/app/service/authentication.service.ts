import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {


  }

  signIn(username, password) {

    let result = {
      Code : 1
    } as any;
    

    const networkStatus1 = ""
    const networkStatus2 = ""

    // // // console.log('Net stat 2 :' + networkStatus2);

    const body = {
      username: username,
      password: password
    };

   return this.http.post("http://localhost:3000/login", body, httpOptions);

 
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}