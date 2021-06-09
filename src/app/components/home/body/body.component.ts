import { Component, OnInit } from '@angular/core';

import { SharedServices } from '../../../services/shared-services.service';

export interface Recientes {
  taxisCalador;
  majek;
  yomi;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


export class BodyComponent implements OnInit {


  nombre: String = 'Adedoyin Majekodunmi';
  nombreIngles = 'Steven Majek';
  // tslint:disable-next-line:max-line-length
  descripcionEsp: String = 'Estudiando DAM (Desarrollo de Aplicaciones Multiplataforma), actualmente en mi último año de carrera en el centro de San Valero, España. No puedo esperar a terminar mis estudios para facilitar la vida de las personas con mis próximas aplicaciones, y por último, pero no menos importante, mejorar como programador.';
  // tslint:disable-next-line:quotemark
  descripcionEn: String = "Studying multi-platform app development, currently on my final year of carrer at San Valero center, Spain. Looking forward to finish my studies to make people's life easier with my upcoming apps. And last but not the least, to improve as a programmer.";
  translate = false;
  myPic = 'assets/me4.jpg';
  taxiImg = 'assets/taxi.png';
  majekImg = 'assets/majek.jpg';
  yomiImg = 'assets/yomi.png';

  recientsApps: Recientes;

  // profile
  profile: any;

  // skills
  // tslint:disable-next-line:max-line-length
  skills: string[] = ['Java', 'JavaScript', 'SQL', 'Hibernate', 'Spring Boot', 'Android', 'Angular', 'Angular Material', 'CSS', 'Grid', 'Flex', 'Boostrap', 'Servlet', 'JSP'];
  anio = new Date();


  constructor(private servicio: SharedServices) { }

  ngOnInit() {

    this.profile = {

      nombre: 'Adedoyin Majekodunmi',
      subNombre: 'Steven Majek',
      birth: '30 May 1991',
      nacionalidadIngles: 'Nigerian',
      nacionalidadEsp: 'Nigeriano',
      descripcionIngles: '',
      descripcionEsp: '',

    };

    this.recientsApps = {
      taxisCalador: {
        // tslint:disable-next-line:quotemark
        nombre: "Taxis Cala D' Or",
        // tslint:disable-next-line:max-line-length
        descripcionEsp: 'Una aplicación web para hacer reservas de clientes. Los datos se almacenan en una base de datos para que la compañía pueda tener información sobre cuántas reservas hizo al día, cuántos viajes realizó un taxista y mucho más. Desarrollado con Java, junto a JSP y usando la base de datos MySql',
        // tslint:disable-next-line:max-line-length
        descripcionIngles: 'A web app to make clients reservations. Data stored on a database so the company could have info about how many reservations made a day, how many trip a taxi driver did and much more. Developed with Java, joined with JSP and using MySql database',
        typeEsp: 'Aplicación Web',
        typeIngles: 'Web app',
      },
      majek: {
        nombre: 'Majek',
        // tslint:disable-next-line:max-line-length
        descripcionEsp: 'Aplicación sobre mi proyecto final de Android, realizada en Andriod Studio, es una aplicación de compra y venta. Envía confirmación por correo electrónico, muestra notificaciones, los usuarios pueden calificar artículos y mucho más. Desarrollado con Java, unido con Spring boot y usando la base de datos MySql',
        // tslint:disable-next-line:max-line-length
        descripcionIngles: 'App about my Android final project, made in Andriod Studio, it is a buying and selling app. It sends email confirmation, shows notifications, users can rate items and much more. Developed with Java, joined with Spring boot and using MySql database',
        typeEsp: 'Aplicación Andriod',
        typeIngles: 'Andriod App',
      },
      yomi: {

        nombre: 'Yomi',
        // tslint:disable-next-line:max-line-length
        descripcionEsp: 'Yomi sera mi proyecto final del curso, actualmente no puedo dar mucha información sobre esta app, esta hecho con Angular, (JavaScript), base de datos MySql manejado con Spring boot (Java)',
        // tslint:disable-next-line:max-line-length
        descripcionIngles: 'Yomi will be my final project of the course, I can not give much information about this app at the moment, it is made with Angular, (JavaScript), MySql database managed with Spring boot (Java)',
        typeEsp: 'Aplicación Web',
        typeIngles: 'Web app',
      }
    };

  }


  traducir() {
    this.translate = !this.translate;
    this.servicio.translate.next(this.translate);
  }



}
