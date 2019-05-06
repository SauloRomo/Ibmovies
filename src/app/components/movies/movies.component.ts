import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../../data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  nGenre: string;
  movies : any;
  page: 0;
  pageSize: number =  10;
  p: number = 1;
  erroImage: string = "https://previews.123rf.com/images/olejio/olejio1802/olejio180200041/95585020-funny-design-404-page-not-found-vector-illustration-geek-with-metal-detector-searching-the-big-data.jpg"

  constructor(private route: Router, private dataservice : DataService) { 
    route.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      this.nGenre= !!String(event.url).split('/')[2]  ?  String(event.url).split('/')[2] : 'all';
      this.dataservice.get_products().subscribe((response: Array<object>) => {
        if (this.nGenre === 'all') {
          this.movies = response;      
        } else {
          this.movies = response.filter(x => {
            return x['genres'].includes(this.nGenre.charAt(0).toUpperCase()+this.nGenre.slice(1))
          })
        }
      })
    });
    
  }

  ngOnInit() {
  
  }


}
