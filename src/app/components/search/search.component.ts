import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DataService } from '../../data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 results: any;
 queryField: FormControl = new FormControl();


 constructor(private dataservice : DataService) { 

}


  ngOnInit() {
    this.queryField.valueChanges.subscribe( queryField => 
      this.dataservice.get_products().subscribe((response: Array<object>) => {
        //return response;
        console.log(queryField)
        let searchByActors = this.results = response.filter(x => {
          return x['actors'].includes(queryField)
        }) 
        let searchByTitle = response.filter(x => {
          return x['title'] === queryField
        })
        this.results = searchByActors.length > 0 ? searchByActors : searchByTitle;
        console.log(this.results);
       
    }));
  }

}
