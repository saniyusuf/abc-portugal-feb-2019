import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  videoListData = videoData;
  videoToPlay: any;

  constructor() { }

  ngOnInit() {
  }

  setVideoToPlay($event) {
    this.videoToPlay = $event;
  }
}

const videoData = [
  {
    "title": "Angular Observable Data Flow",
    "author": "Kyle Cordes",
    "id": "JPuqluYYa-o",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2016-03-23"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2016-03-23"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2016-03-23"
      },
      {
        "age": 47,
        "region": "Europe",
        "date": "2016-03-24"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2016-03-24"
      },
      {
        "age": 17,
        "region": "North America",
        "date": "2016-03-25"
      }
    ]
  },
  {
    "title": "Angular Performance Checklist",
    "author": "Paul Spears",
    "id": "cxqRijt9LbQ",
    "viewDetails": [
      {
        "age": 36,
        "region": "North America",
        "date": "2016-06-23"
      },
      {
        "age": 30,
        "region": "North America",
        "date": "2016-06-23"
      },
      {
        "age": 54,
        "region": "North America",
        "date": "2016-07-23"
      },
      {
        "age": 43,
        "region": "Europe",
        "date": "2016-0-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2016-08-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2016-08-25"
      }
    ]
  },
  {
    "title": "Live App Updates Without The App Store",
    "author": "Sani Yusuf",
    "id": "s10wrXA-a7Y",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2016-03-23"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2016-03-23"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2016-03-23"
      },
      {
        "age": 47,
        "region": "Europe",
        "date": "2016-03-24"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2016-03-24"
      },
      {
        "age": 17,
        "region": "North America",
        "date": "2016-03-25"
      }
    ]
  },
  {
    "title": "Angular Reactive Forms",
    "author": "Jack Balbes",
    "id": "A_Rq6ZsoXpI",
    "viewDetails": [
      {
        "age": 36,
        "region": "North America",
        "date": "2016-06-23"
      },
      {
        "age": 30,
        "region": "North America",
        "date": "2016-06-23"
      },
      {
        "age": 54,
        "region": "North America",
        "date": "2016-07-23"
      },
      {
        "age": 43,
        "region": "Europe",
        "date": "2016-0-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2016-08-24"
      },
      {
        "age": 32,
        "region": "North America",
        "date": "2016-08-25"
      }
    ]
  },
  {
    "title": "Imperative to Reactive with Angular and RxJS",
    "author": "John Baur",
    "id": "VJOPsjlbhdg",
    "viewDetails": [
      {
        "age": 17,
        "region": "North America",
        "date": "2016-03-23"
      },
      {
        "age": 27,
        "region": "North America",
        "date": "2016-03-23"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2016-03-23"
      },
      {
        "age": 47,
        "region": "Europe",
        "date": "2016-03-24"
      },
      {
        "age": 37,
        "region": "North America",
        "date": "2016-03-24"
      },
      {
        "age": 17,
        "region": "North America",
        "date": "2016-03-25"
      }
    ]
  }
];
