import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videoList;
  selectedVideo;

  constructor() { }

  ngOnInit() {
  }

  onVideoSelected(video) {
   this.selectedVideo = video;
  }
}



