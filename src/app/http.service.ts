import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLRCzrSHS5u_HQuXr15gOMCIK-E-57A5vd&key=AIzaSyA5iigNZ4sJjBcl_84DeHgK3BZSW3fn8j0");
  }

  getNextData(nextPageToken: string){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&pageToken="+ nextPageToken +"&playlistId=PLRCzrSHS5u_HQuXr15gOMCIK-E-57A5vd&key=AIzaSyA5iigNZ4sJjBcl_84DeHgK3BZSW3fn8j0");
  }

}