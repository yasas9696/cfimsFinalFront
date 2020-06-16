import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8083/';

  //Get all idems
  getAllItems() {
    return this.http.get(this.url + 'item/getAll');
  }
}
