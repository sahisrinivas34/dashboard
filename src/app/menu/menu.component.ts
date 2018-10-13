import { Component, OnInit } from '@angular/core';
import {DbserviceService } from '../dbservice.service';
import {Observable} from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
public userList;
public location;
public locdata = [];
public latestdate;
myform: FormGroup;
users: FormControl;
date: FormControl;
  constructor(private dbservice: DbserviceService) {
    }
   ngOnInit( ) {
    this.getdata();
    this.controlForm();
    this.createForm();
   }
   controlForm() {
   this.users = new FormControl('', Validators.required);
     this.date = new FormControl('', Validators.required);
   }

createForm() {
  this.myform = new FormGroup({
    users : this.users,
    date : this.date
  });
}
onSubmit() {
    console.log(this.users.value + '' + this.date.value);
    this.latestdate = this.date.value;
    this.dbservice.getLocation(this.users.value, this.date.value).subscribe(data => {this.location = data,
        this.passloc(data);
       } );
    this.myform.reset();
  }
  // delete once db is set
public passloc(location) {
this.locdata = location[this.latestdate];
console.log(this.locdata);
}


 getdata() {
   this.dbservice.getUsers().subscribe(data => {this.userList = data;
  } );
}
}
