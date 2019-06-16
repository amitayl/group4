import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMessage } from './message.module';
import { MessagesServiceService } from './messages-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  url: string;
  messages: IMessage[];
  isEditing: boolean;
  currentMessage: IMessage;

  constructor(private messagesServic : MessagesServiceService) {
    this.url = messagesServic.getUrl; 
    this.messages = messagesServic.getMessages;
    this.isEditing = false;
    this.currentMessage = null;
  }

  ngOnInit() {
    this.getMessages();
  }

  ngOnDestroy() {
    clearInterval();
  }


  getMessages() {
    const delay = 2000;
    setInterval(async () => {
      const response = await fetch(this.url);
      const data = await response.json();
      this.messages = data.result;
      console.log(data);
    }, delay);
  }


  async sendMessage(username: string, message: string) {
    // fetch(url, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'applciation/json'},
    //   body: JSON.stringify({
    //     Author: username,
    //     Message: message
    //   })
    // }).then( response => response.json() )
    // .then( data => console.log("Fetch - POST", data) );

    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Author: username,
        Message: message
      })
    });
    this.logData(await response.json());
  }

  async deleteMessage(id: number) {
    const response = await fetch(`${this.url}?id=${id}`, {
      method: 'DELETE'
    });
    this.logData(await response.json());
  }

  editMessage(messageContent: IMessage) {
    this.isEditing = true;
    this.currentMessage = messageContent;
  }

  logData(data: string) {
    console.log(data);
  }
}
