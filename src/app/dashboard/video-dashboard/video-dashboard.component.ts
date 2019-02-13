import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VideoService} from '../../video.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Observable<Video[]>;
  videoToPlay: any;

  constructor(videoService: VideoService) {
    this.videoListData = videoService.getVideos();
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
