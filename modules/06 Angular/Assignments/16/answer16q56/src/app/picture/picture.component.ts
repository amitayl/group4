import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PictureData } from '../picture.model';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {

  @Input() pic : PictureData ;
  @Output() click2select = new EventEmitter<PictureData>();

  constructor() { }

  picClick () {
    this.click2select.emit(this.pic);
  }
}
