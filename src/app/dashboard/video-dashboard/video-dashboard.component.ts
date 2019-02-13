import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Video[];
  videoToPlay: any;

  constructor(http: HttpClient) {
    http
      .get<Video[]>('http://api.angularbootcamp.com/videos')
      .subscribe(videoData => this.videoListData = videoData);
  }

  ngOnInit() {
  }

  setVideoToPlay($event) {
    this.videoToPlay = $event;
  }
}


export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
