import { Component } from '@angular/core';
import { Video } from './video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  videos : Video [];
  selectedVideo : Video;

  constructor () {
    this.videos = [
      {src: "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_2mb.mp4", title:"Title 1" , artist: "Artist 1" , description: "Description 1", picture: "pictures/pic1.jpg"},
      { src: "http://www.rapconverter.com/SampleDownload/Sample320.mp4" , title: "Title 2", artist: "Artist 2" , description: "Description 2", picture: "pictures/pic2.jpg"}
    ];

    this.selectedVideo = this.videos[0];
    
  }

  openMainVideo (video : Video) {
    this.selectedVideo = video;
  }
}
