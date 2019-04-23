import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
  selectedAuthor = "";

  constructor (activatedRoute: ActivatedRoute) {

      this.activatedRoute = activatedRoute;
  }


  ngOnInit () {
    this.selectedAuthor = this.activatedRoute.snapshot.params.author;
  }


  like(): void {

    this.pic.counter++;

    if (this.pic.counter > 0 && this.pic.counter < 10) {
      this.width = 350;
    } else {
      this.width = 400;
    }
  }

  setBorderAndOpenLarge(): void {
    this.borderColor = 'yellow';
    this.click2open.emit(this.pic.imgLink);
  }
}
