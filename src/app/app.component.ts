import { Component,OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http'

import { RecommendInfo } from './recommendinfo'
import { AppService } from './app.service';
// 去掉影响body和字体颜色的css
// import '../../public/css/main.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
  recommendInfos: RecommendInfo[];

  constructor(private http:Http, private appService: AppService) { 
    this.http.get('http://115.159.126.118:8066/recommendinfo').subscribe(res=> this.recommendInfos=res.json());
  }

  getRecommendInfos(): void { 
    this.appService
        .getRecommendInfos()
        .then(recommendInfos => this.recommendInfos = recommendInfos);
  } 

  ngOnInit(): void {
    //this.getRecommendInfos();
  }

}
