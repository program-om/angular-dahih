import { CommunicationService } from './communication.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpService } from './http.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ShortDescriptionPipe } from './short-description.pipe';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EpisodeComponent } from './episode/episode.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, MarkdownModule.forRoot({loader: HttpClient}) ],
  declarations: [ AppComponent, HelloComponent, ShortDescriptionPipe, EpisodeComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HttpService, ShortDescriptionPipe, CommunicationService]
})
export class AppModule { }
