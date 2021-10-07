import {Component, OnInit} from '@angular/core';
import {advList} from "./about.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  advantagesList: string[] = [
   'Every year since 2008, the number of contributions to our database has increased. With over 400,000 developers and companies using our platform, TMDB has become a premiere source for metadata.',
   'Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day.',
   'We\'re international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries.',
   'Our community is second to none. Between our staff and community moderators, we\'re always here to help. We\'re passionate about making sure your experience on TMDB is nothing short of amazing.',
   'Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We\'ve proven for years that this is a service that can be trusted and relied on.'
  ]

    constructor() {
  }

  ngOnInit(): void {
    
  }

}
