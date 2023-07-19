
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {

  constructor(private formBuilder: FormBuilder) {}
  
  messages: string[] = ['Welcome to the conversationddddddddddddddddddddddddddd dddddddddddddddddd ddddddddddddddddddddddddddd!', 'ok', 'fine', 'lets see'];
  newMessage: string = '';
  checkoutForm = this.formBuilder.group({
    name: ''
  });

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  addMessage(): void {
    const name = this.checkoutForm.value.name;
  
    if (name) {
        this.messages.push(name);
        this.messages.push("As a AI bot I am not as smart as you. I don't know");
    }
  }
}
