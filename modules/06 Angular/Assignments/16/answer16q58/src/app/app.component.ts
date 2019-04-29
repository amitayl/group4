import { Component } from '@angular/core';
import { Video } from './video.model';
import { Picture } from './picture.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  videos : Video [];
  pictures: Picture [];
  selectedVideo : Video;
  selectedPicture : Picture;

  constructor () {
    this.videos = [
      {src: "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_2mb.mp4", title:"Title 1" , artist: "Artist 1" , description: "Description 1"},
      { src: "http://www.rapconverter.com/SampleDownload/Sample320.mp4" , title: "Title 2", artist: "Artist 2" , description: "Description 2"}
    ];

    this.pictures= [
      {title:"Title 1" , artist: "Artist 1" , picture: "assets/pictures/pic1.JPG"},
      {title: "Title 2", artist: "Artist 2" ,picture: "assets/pictures/pic2.JPG"}
    ];
        

    this.selectedVideo = this.videos[0];
    
  }
  
  openMainVideo (pic : Picture) {
    this.selectedPicture = pic;
    
    for (let index = 0; index < this.videos.length; index++) {
      if (pic.title === this.videos[index].title && pic.artist === this.videos[index].artist) {
        this.selectedVideo = this.videos[index]
      }
      
    }
  }
}
