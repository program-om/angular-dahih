import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private videoInfoSource = new BehaviorSubject({});
  public currentVideoInfo = this.videoInfoSource.asObservable();

  constructor() { }

  nextVideoInfo(videoInfo){
    this.videoInfoSource.next(videoInfo);
  }

}