import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { RouterModule, Routes } from '@angular/router';
import { VideoPreviewComponent } from './video-preview/video-preview.component';
import {HttpClientModule} from '@angular/common/http';

const childRoutes: Routes = [
  { path: "", component: VideoDashboardComponent }
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(childRoutes)
  ],
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent, VideoPreviewComponent]
})
export class DashboardModule { }
