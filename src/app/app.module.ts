import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalViewComponent } from './external-view/external-view.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ConversationModule } from './conversation/conversation.module';

@NgModule({
  declarations: [
    AppComponent,
    ExternalViewComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
