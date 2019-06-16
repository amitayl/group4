import { Injectable } from '@angular/core';
import { IMessage } from './message.module';

@Injectable({
  providedIn: 'root'
})
export class MessagesServiceService {

  messages: IMessage[];
  url: string;

  constructor() { 
    this.url = "http://localhost:8000";
    this.messages = [];
  }

  addMessage(message : IMessage ) {
    this.messages.push(message);
  }

  get getUrl() {
    return this.url;
  }

  get getMessages() {
    return this.messages;
  }

  async postMessage(username: string, message: string) {

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
}
