import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sources : string[]; 

  selectedSrc : string;

  constructor () {
    this.sources = [
      "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-roses-stargazer-flower-delivery-100x100.jpg",
      "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-gerberas-stargazer-flower-delivery-100x100.jpg",
      "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-mixed-pc-wh-r-roses-flower-delivery-100x100.jpg",
      "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-mixed-roses-bouquet-flower-delivery-100x100.jpg",
      "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-r-roses-fillers-bouquet-flower-delivery-100x100.jpg"
    ];

    this.selectedSrc = this.sources[0];
  }



  setMainPic (src: string) {
    this.selectedSrc = src;
  }
}
