import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-assingment',
  templateUrl: './add-new-assingment.component.html',
  styleUrls: ['./add-new-assingment.component.css']
})
export class AddNewAssingmentComponent {

  constructor(private dialog : MatDialog){}

  closeModal(){
    this.dialog.closeAll();
  }
  
}
