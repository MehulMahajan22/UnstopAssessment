import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddNewAssingmentComponent } from '../add-new-assingment/add-new-assingment.component';
import { MatDialog } from '@angular/material/dialog';
import { NgDialogAnimationService } from 'ng-dialog-animation';

@Component({
  selector: 'app-my-assessments',
  templateUrl: './my-assessments.component.html',
  styleUrls: ['./my-assessments.component.css']
})
export class MyAssessmentsComponent {

  constructor(private dialog: NgDialogAnimationService){}

  addAssessment(){
    this.dialog.open(AddNewAssingmentComponent,{
      height: '100vh',
      width: '100%',
      animation:{to: 'top'},
    })
  }

}
