import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private peopleService: PeopleService) { }
  
  private sub: any;
  searchWord: string;
  results: any[];

  ngOnInit() {

    console.log(this.route);
    this.sub = this.route.params.subscribe(params => {
      this.searchWord = params['word']; 
      this.peopleService.searchPeople(this.searchWord).subscribe(data => this.results = data["value"]);
       
      
   });

  }

}
