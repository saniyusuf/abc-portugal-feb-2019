import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.css']
})
export class VideoPreviewComponent implements OnInit {

  @Input() video;

  constructor() { }

  ngOnInit() {
  }

}
