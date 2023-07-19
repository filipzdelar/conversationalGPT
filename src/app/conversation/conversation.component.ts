import { Component } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {
  messages: string[] = ['Welcome to the conversation!', "ok", "fine"]; 
  
  newMessage: string = '';

  addMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}
