import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';

  users: Observable<User[]>;

  username: string;

  addUser(user: User) {
    debugger
    const url = this.url + 'users';
    return this.http.post(url, user)

  }

  getUsers(): Observable<User[]> {
    this.users = this.http.get<User[]>(this.url + 'users');
    return this.users;

  }

  getUserbyUsername() {
    return this.http.get(this.url + 'users/uname');
  }

  updateUser(user) {
    const url = this.url + 'users/' + user.id;
    return this.http.put(url, user)
  }



  deleteUser(user) {
    const url = this.url + 'users/' + user.id;
    return this.http.delete(url)
  }

  
}
