import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @Input() mySrc : string;
  @Output() click2select = new EventEmitter<string>();

  constructor() { }

  picClick () {
    this.click2select.emit(this.mySrc);
  }

  ngOnInit() {
  }

}
