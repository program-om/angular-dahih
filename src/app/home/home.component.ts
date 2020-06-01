import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videosInfo = [];
  response = {};
  page = 0;
  noNextPage = false;
  maxPage: number = Infinity;
  totalPages: number;

  constructor(private httpService: HttpService,
              private communicationService: CommunicationService,
              private router: Router){ }

  ngOnInit(){
    this.getInfo();
  }

  getInfo(){
    this.httpService.getData()
    .subscribe( data => {
      this.response = data;
      this.videosInfo.push(data.items);
      this.totalPages = Math.ceil( (this.response.pageInfo.totalResults/25) );
    })
  }

  goToEpisode(index: number, id: string){
    this.newVideoInfo(index);
    this.router.navigate(['episode/'+id])
  }

  newVideoInfo(index: number){
    this.communicationService.nextVideoInfo(this.videosInfo[this.page][index]);
  }

  getNextPage(){
    if(this.videosInfo.length > this.page+1){
      this.page++;
      if(this.page === this.maxPage){
        this.noNextPage = true;
      }
      return;
    }
    this.httpService.getNextData(this.response.nextPageToken)
    .subscribe( data => {
      this.response = data;
      this.videosInfo.push(data.items);
      this.page++;
      if(!this.response.nextPageToken){
        this.noNextPage = true;
        this.maxPage = this.page;
      }
      window.scroll(0,0);
    })
  }

  goBack(){
    this.page--;
    window.scroll(0,0);
    this.noNextPage = false;
    if(this.page === this.maxPage){
      this.noNextPage = true;
    }
  }
}