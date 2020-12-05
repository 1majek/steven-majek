import { Component, OnInit, Input } from '@angular/core';
import { SharedServices } from '../../../services/shared-services.service';
import { FooterComponent } from '../footer/footer.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myLogo = 'assets/logo2.png';
  translate: boolean;

    // sub
    subscriber: Subscription;

  constructor(private servicio: SharedServices) { }

  ngOnInit() {
    this.subscriber = this.servicio.translate.subscribe(translate => {
      this.translate = translate;
    });
  }

  openFacebook() {
    window.open('https://www.facebook.com/steven.majek');
  }

  openInstagram() {
    window.open('https://www.instagram.com/stevenmajek/');

  }

  openWhatsapp() {
    // tslint:disable-next-line:quotemark
    window.open("https://api.whatsapp.com/send?phone=663509340&text=Hello%20Steven!%20Let's%20talk%20about%20business");
  }

  openGitHub() {
    window.open('https://github.com/1majek');
  }



}
