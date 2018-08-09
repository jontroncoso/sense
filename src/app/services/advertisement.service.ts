import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Ad } from '../_model/ad';


@Injectable()
export class AdvertisementService {

  constructor(
      private http: Http
  ) { }
  private adsSource   = new BehaviorSubject<Ad[]>([]);
  public $ads   = this.adsSource.asObservable();



  getAds = (options: any = {}) => {
    this.http
        .get('/assets/advertisements.json')
        .subscribe((r: Response) => {
            const data = r.json().data;
            this.adsSource.next(data.map(ad => new Ad(ad)));
            console.log('data ', data[0]);
            // console.log('data ', data);
        });
  }
}
