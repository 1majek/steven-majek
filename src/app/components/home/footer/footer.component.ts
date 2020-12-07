import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subscriber, Subscription } from 'rxjs';
import { Email } from 'src/app/model/mail';
import { SharedServices } from '../../../services/shared-services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  anio = new Date();
  nombre = 'Steven Majek';
  translate: boolean;

  form: FormGroup;

  email: Email = new Email();

  // sub
  subscriber: Subscription;

  constructor(private servicio: SharedServices,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar ) {

    this.emailForm();


  }

  ngOnInit() {
    this.subscriber = this.servicio.translate.subscribe(translate => {
      this.translate = translate;
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
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

  get nameError() {
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }

  get asuntoError() {
    return this.form.get('asunto').invalid && this.form.get('asunto').touched;
  }

  get emailError() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get mensajeError() {
    return this.form.get('mensaje').invalid && this.form.get('mensaje').touched;
  }


  emailForm() {
    this.form = this.formBuilder.group({
      nombre:   ['', Validators.required],
      asunto:   ['', Validators.required],
      email:    ['', Validators.required],
      mensaje:  ['', Validators.required]
    });
  }

  resetForm() {
    this.form.reset({
      nombre: '',
      asunto: '',
      email: '',
      mensaje: ''
    });
  }

  sendEmail() {

  /*const body =
  `form-name=contact&nombre=
  ${this.form.value.nombre}
  &email=${this.form.value.email}
  &asunto=${this.form.value.asunto}
  &mensaje=${this.form.value.mensaje}`;*/

  const body = new HttpParams()
  .set('form-name', 'contact')
  .append('nombre', this.form.value.nombre)
  .append('asunto', this.form.value.asunto)
  .append('email', this.form.value.email)
  .append('mensaje', this.form.value.mensaje);


    this.email = this.form.value;
    this.servicio.sendEmail(body)
      .subscribe(resp => {
        console.log(resp);
        this.snackBar.open('Sent, Enviado', 'close', {horizontalPosition: 'end', verticalPosition: 'top', duration: 5000});
        this.resetForm();
      }/*, err => {
        console.log(err);
        this.snackBar.open(err.message, 'close', {horizontalPosition: 'end', verticalPosition: 'top', duration: 5000});
      }*/);

  }

}
