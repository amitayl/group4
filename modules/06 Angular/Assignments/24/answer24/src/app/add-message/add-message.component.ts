import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagesServiceService } from '../messages-service.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  url: string;

  constructor(private messagesServic: MessagesServiceService) {}

  ngOnInit() {
    this.url = this.messagesServic.getUrl;
  }

  logData(data: string) {
    console.log(data);
  }

  onSubmitForm(f: NgForm) {
    console.log("add-message Form", f);
    const { username, message } = f.value;
    this.messagesServic.postMessage(username, message);
  }
}
