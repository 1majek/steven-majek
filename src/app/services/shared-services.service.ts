import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Email } from '../model/mail';

@Injectable({
  providedIn: 'root'
})
export class SharedServices {

  translate: Subject<boolean> = new Subject();

  url = 'http://localhost:3001/sendEmail';
  // url = 'https://stevenmajek.herokuapp.com/sendEmail';
  // url = 'https://1majek.github.io/stevenmajek/sendEmail';

  constructor(private http: HttpClient) {
   }

  public sendEmail(email: Email) {
     return this.http.post<any>(`${this.url}`, email);
  }

}


// Access-Control -Allow-Methonds
