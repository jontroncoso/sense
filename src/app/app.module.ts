import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AdvertisementService } from './services/advertisement.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [AdvertisementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
