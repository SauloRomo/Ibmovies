import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nGenre : String;
  navbarCollapsed: Boolean = true; 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let genre = this.route.snapshot.paramMap.get('genre');
    this.nGenre = genre;
  }
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
