import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videoList;
  selectedVideo;
  @Output() videoSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onVideoSelected(video) {
   this.selectedVideo = video;
   this.videoSelected.emit(video);
  }
}



