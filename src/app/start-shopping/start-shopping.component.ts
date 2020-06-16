import { ItemsComponent } from './../items/items.component';
import { RecordService } from './../service/record.service';
import { HistoryService } from './../service/history.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { History } from 'app/model/history';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var $: any;

@Component({
  selector: 'app-start-shopping',
  templateUrl: './start-shopping.component.html',
  styleUrls: ['./start-shopping.component.css']
})
export class StartShoppingComponent implements OnInit {

  history: History = {
    date: '',
    event: '',
    jobNumber: '',
    department: '',
    empNo: '',
  }

  HistoriesArray = [];
  datasource: any = [];
  recordArray = [];

  newData: string = "xoxoxox";
  getId: any;

  constructor(private historyService: HistoryService, private recordService: RecordService,  private toastr: ToastrService, public dialog: MatDialog) { }



  ngOnInit(): void {
    this.getAllHistories();

  }

  getAllHistories() {
    this.historyService.getAllHistories().subscribe((historyData: any) => {
      this.HistoriesArray = historyData.history;
      this.datasource = [...this.HistoriesArray];
      this.toastr.success("History Table Loaded");
      console.log(historyData);
    });
  }

  applyFilter(filterValue: string) {
    this.datasource = [...this.HistoriesArray]
    this.datasource = this.datasource.filter(x => x.event.includes(filterValue.trim()));
    console.log(this.datasource)
  }

  getrecordById(getId) {
    this.recordService.historyId = getId;

    
    this.recordService.getrecordById().subscribe((recordData: any) => {
      this.recordArray = recordData.records
      console.log("History ID : " + getId);
      console.log(this.recordArray);
    })

    
  }




openDialog(id): void {
  const dialogRef = this.dialog.open(ItemsComponent, {
    width: '550px', data:id});

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}

cancel(){
  
}



}
