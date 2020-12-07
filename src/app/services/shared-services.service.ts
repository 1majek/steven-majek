import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Email } from '../model/mail';

@Injectable({
  providedIn: 'root'
})
export class SharedServices {

  translate: Subject<boolean> = new Subject();
  header: HttpHeaders;

  url = 'http://localhost:3001/sendEmail';
  // url = 'https://stevenmajek.herokuapp.com/sendEmail';
  // url = 'https://1majek.github.io/stevenmajek/sendEmail';

  constructor(private http: HttpClient) {
    this.header.set('Content-Type', 'application/ x-www-form-urlencoded');
   }

  public sendEmail(email: HttpParams) {
     return this.http.post<any>('/', email.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
  }

}


// Access-Control -Allow-Methonds'
