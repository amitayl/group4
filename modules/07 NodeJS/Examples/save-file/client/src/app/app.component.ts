import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: string;
  result: string;

  constructor() {
    this.content = 'Johnny Doe';
    this.result = '';
  }

  sendToServer() {
    fetch('http://localhost:5000', {
      method: 'POST',
      body: this.content
    }).then(response => response.text())
      .then(data => {
        console.log("DATA: " + data);
        this.result = data;
      });
  }
}
