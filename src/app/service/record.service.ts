import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class RecordService {

  RecordArray=[];

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';

  historyId: any;

  getrecordById() {
    return this.http.get(this.url + 'records/' + this.historyId);
  }
}
