import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RecommendInfo } from './recommendinfo';

@Injectable()
export class AppService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private recommendUrl = 'http://115.159.126.118:8066/recommendinfo'; //URL to web api
  public recommendInfos: RecommendInfo[];
 
  constructor(private http: Http) { 
      console.log(" AppComponent constructor :", "run step constructor ");
      
  }
  getRecommendInfos(): Promise<RecommendInfo[]> {
    return this.http.get(this.recommendUrl)
               .toPromise()
               .then(response => response.json().data as RecommendInfo[])
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}