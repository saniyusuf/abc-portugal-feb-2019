import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Video} from './dashboard/video-dashboard/video-dashboard.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos() : Observable<Video[]>{
    return this.http
      .get<Video[]>('http://api.angularbootcamp.com/videos');
  }
}
