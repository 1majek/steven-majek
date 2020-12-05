import { Component, OnInit } from '@angular/core';

export interface IImage {
  url: string | null;
  href?: string;
  clickAction?: Function;
  caption?: string;
  title?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  taxiImg = 'assets/taxi.png';
  majekImg = 'assets/majek.jpg';
  myPic = 'assets/me.jpg';

  // taxi
  taxiAdd = 'assets/TaxiAdd.png';
  taxiDetails = 'assets/TaxiDetails.png';
  taxiEdit = 'assets/TaxiEdit.png';
  taxiInfo = 'assets/TaxiInfo.png';
  taxiReservas = 'assets/TaxiReservas.png';
  taxiReservasHechas = 'assets/TaxiReservasHechas.png';
  taxiSearch = 'assets/TaxiSearch.png';
  // majek
  majekDetails = 'assets/majekDetails.jpg';
  majekHome = 'assets/majekHome.jpg';
  majekLogin = 'assets/majekLogin.jpg';
  majekLoginForm = 'assets/majekLoginForm.jpg';
  majekRate = 'assets/majekRate.jpg';
  majekRegi = 'assets/majekRegi.jpg';
  majekSearch = 'assets/majekSearch.jpg';
  majekSell = 'assets/majekSell.jpg';
  majekTop = 'assets/majekTop.jpg';

  taxiImages: (string | IImage)[] = [];
  majekImges: (string | IImage)[] = [];
  test: string[] = [];

  constructor() {

    this.taxiImages = [ {url: this.taxiAdd, caption: 'Testing' }, {url: this.taxiDetails, caption: 'details'}
      /*this.taxiAdd, this.taxiDetails, this.taxiEdit,
                      this.taxiInfo, this.taxiReservas, this.taxiReservasHechas,
  this.taxiSearch*/];

                  console.log(this.taxiImages);

    this.majekImges = [this.majekDetails, this.majekHome, this.majekLogin,
                      this.majekLoginForm, this.majekRate, this.majekRegi,
                      this.majekSearch, this.majekSell, this.majekTop];
                  console.log(this.majekImges);
   }

  ngOnInit() {

    this.test = [
      this.majekDetails, this.majekHome, this.majekLogin,
                      this.majekLoginForm, this.majekRate, this.majekRegi,
                      this.majekSearch, this.majekSell, this.majekTop
    ];
  }

}
