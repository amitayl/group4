import { Component } from '@angular/core';
import { Picture } from './picture.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pictures: Picture[];
  url: string;

  constructor() {
    this.pictures = [ {imgLink: "assets/images/pic1.jpg", counter: 0 , author: "david1" },
                      { imgLink: "assets/images/pic2.jpg", counter: 0 , author: "david2"},
                      { imgLink: "assets/images/pic3.jpg", counter: 0 , author: "david3"},
                      { imgLink: "assets/images/pic4.jpg", counter: 0 , author: "david4"},
                      { imgLink: "assets/images/pic5.jpg", counter: 0 , author: "david5"},
                      { imgLink: "assets/images/pic6.jpg", counter: 0 , author: "david6"},
                      { imgLink: "assets/images/pic7.jpg", counter: 0 , author: "david7"},
                      { imgLink: "assets/images/pic8.jpg", counter: 0 , author: "david8"},
                      { imgLink: "assets/images/pic9.jpg", counter: 0 , author: "david9"},
                      { imgLink: "assets/images/pic10.jpg", counter: 0 , author: "david10"}];
    
    this.url="";
  }

  clickLarge (url:string) {
    this.url = url;
  }
  closePic () {
    this.url = "";
  }
}

