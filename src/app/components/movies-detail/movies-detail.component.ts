import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../../data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movieId: string;
  movie : Object;
  currentRate

  constructor(private route: Router, private dataservice : DataService) { 
    route.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      this.movieId= String(event.url).split('/')[2];
      this.dataservice.get_products().subscribe((response: Array<object>) => {
          this.movie = response.filter(x => {
            return x['id'] === this.movieId;
          })[0];
          this.currentRate = (this.movie['ratings'].reduce((a,b) => a + b, 0))/this.movie['ratings'].length;
      })
    });
  }

  ngOnInit() {
  }

}
