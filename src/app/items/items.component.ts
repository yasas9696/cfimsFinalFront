import { RecordService } from './../service/record.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  recordArray:any[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogref: MatDialogRef<ItemsComponent>, private recordService:RecordService) { }

  ngOnInit(): void {
    this.getrecordById(this.data)
  }
  getrecordById(getId) {
    this.recordService.historyId = getId;    
    this.recordService.getrecordById().subscribe((recordData: any) => {
      this.recordArray = recordData.records
      console.log(this.recordArray)
      this.recordArray.forEach(element => {
        console.log(element.Movie)
      });
    })

    
  }
  cancel(){
    this.dialogref.close()
  }
}


