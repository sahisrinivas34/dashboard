import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { HttpClient, HttpHeaders , } from '@angular/common/http';
import {  Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { MenuComponent } from '../app/menu/menu.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DbserviceService {
  private listener;
  private SERVER = 'http://127.0.0.1:7113';
  private USERS = '/users';
  private ACTIVITY = '/activity';
  constructor(private _http: HttpClient) {
 }
public  getUsers() {
return this._http.get('http://127.0.0.1:7113/users');
 }
 public getLocation(user, date) {
   console.log(user + date);
  return this._http.get('http://127.0.0.1:7113/activity/' + user + '/' + date);
 }

}




