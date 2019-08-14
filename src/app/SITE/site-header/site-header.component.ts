import { Component, OnInit } from '@angular/core';
import { SiteLoginComponent } from '../site-login/site-login.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLogger(){
    let dialogRef = this.dialog.open(SiteLoginComponent, {
      height: '45%',
      width: '25%',
    });
    dialogRef.afterOpened().subscribe(result => {
      console.log("Fenêtre ouverte");
    });
  }

  openInscription(){

  }

}
