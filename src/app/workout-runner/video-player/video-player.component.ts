import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'abe-video-player',
  templateUrl: './video-player.component.html',
  styles: []
})
export class VideoPlayerComponent implements OnInit, OnChanges {
  private youtubePrefixUrl = '//www.youtube.com/embed/';
  @Input() videos: Array<string>;
  safeVideoUrls: Array<SafeResourceUrl>;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngOnChanges() {
    this.safeVideoUrls = this.videos ?
      this.videos
      .map(v => this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubePrefixUrl + v))
      : this.videos;
  }
}
