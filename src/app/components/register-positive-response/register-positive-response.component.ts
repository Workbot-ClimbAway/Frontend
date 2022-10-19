import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register-positive-response',
  templateUrl: './register-positive-response.component.html',
  styleUrls: ['./register-positive-response.component.css']
})
export class RegisterPositiveResponseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterPositiveResponseComponent>) { }

  ngOnInit(): void {
  }

  Ok(){
    this.dialogRef.close()
  }
}
