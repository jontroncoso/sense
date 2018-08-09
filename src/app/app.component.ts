import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/subscription';

import { AdvertisementService } from './services/advertisement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'asdsad';
  ads = [];


  private adsSubscriber: ISubscription;


  constructor(
      private adService: AdvertisementService
  ) {}

  ngOnInit() {
      console.log('ngOnInit');
      this.adService.$ads.subscribe(ads => this.ads = ads);
      this.adService.getAds();
  }
  ngOnDestroy() {

  }
}
