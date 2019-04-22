import { Component, Input, Output, EventEmitter , OnInit } from '@angular/core';
import { Picture } from '../picture.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit{

  @Input() pic: Picture;
  @Output() click2open = new EventEmitter<string>();

  borderColor: string = "";
  width: number = 300;
  activatedRoute: ActivatedRoute;

  // pictures : Picture[];
  
  constructor () {
    //this.activatedRoute = activatedRoute;
  //   this.pictures = [ {imgLink: "assets/images/pic1.jpg", counter: 0 , author: "david1" },
  //                     { imgLink: "assets/images/pic2.jpg", counter: 0 , author: "david2"},
  //                     { imgLink: "assets/images/pic3.jpg", counter: 0 , author: "david3"},
  //                     { imgLink: "assets/images/pic4.jpg", counter: 0 , author: "david4"},
  //                     { imgLink: "assets/images/pic5.jpg", counter: 0 , author: "david5"},
  //                     { imgLink: "assets/images/pic6.jpg", counter: 0 , author: "david6"},
  //                     { imgLink: "assets/images/pic7.jpg", counter: 0 , author: "david7"},
  //                     { imgLink: "assets/images/pic8.jpg", counter: 0 , author: "david8"},
  //                     { imgLink: "assets/images/pic9.jpg", counter: 0 , author: "david9"},
  //                     { imgLink: "assets/images/pic10.jpg", counter: 0 , author: "david10"}];
    
  }

  like(): void {

    this.pic.counter++;

    if (this.pic.counter > 0 && this.pic.counter < 10) {
      this.width = 350;
    } else {
      this.width = 400;
    }
  }

  ngOnInit () {
    // if (!this.pic) {
    //   this.setMovie(this.activatedRoute.snapshot.params.author);
    // }
  }

  setBorderAndOpenLarge(): void {
    this.borderColor = 'yellow';
    this.click2open.emit(this.pic.imgLink);
  }
}
