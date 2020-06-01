import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  videoInfo = {};

  constructor(private activatedRoute: ActivatedRoute,
              private communicationService: CommunicationService) { }

  ngOnInit() {
    this.getNewVideoInfo();
  }

  getNewVideoInfo(){
    this.communicationService.currentVideoInfo.subscribe( newVideoInfo => {
      this.videoInfo = newVideoInfo;
    })
  }

}