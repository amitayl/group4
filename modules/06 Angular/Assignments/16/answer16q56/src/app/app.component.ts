import { Component } from '@angular/core';
import { PictureData } from './picture.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sources: PictureData[];

  selectedPic: PictureData;

  constructor() {
    this.sources = [
      { src: "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-roses-stargazer-flower-delivery-100x100.jpg", index: 0 },
      { src: "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-gerberas-stargazer-flower-delivery-100x100.jpg", index: 1 },
      { src: "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-mixed-pc-wh-r-roses-flower-delivery-100x100.jpg", index: 2 },
      { src: "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-mixed-roses-bouquet-flower-delivery-100x100.jpg", index: 3 },
      { src: "http://www.flowershopinmakati.com/image/cache/data/flowers/12-d-r-roses-fillers-bouquet-flower-delivery-100x100.jpg", index: 4 }
    ];


    this.selectedPic = this.sources[0];
  }

  setMainPic(pic: PictureData) {
    this.selectedPic = pic;
  }

  rightArrowClicked() {
    let nextItem = this.selectedPic.index + 1;

    if (nextItem < this.sources.length) {
      this.selectedPic = this.sources[nextItem]
    }
  }

  leftArrowClicked() {
    let nextItem = this.selectedPic.index - 1;
    
    if (nextItem >= 0) {
      this.selectedPic = this.sources[nextItem]
    }
  }
}
