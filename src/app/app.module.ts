import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { TimeEllapsedPipe } from './time-ellapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    TimeEllapsedPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
