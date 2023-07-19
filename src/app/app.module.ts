import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalViewComponent } from './external-view/external-view.component';
import { ConversationComponent } from './conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    ExternalViewComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
