import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PeopleService } from '../../services/people.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-profile-trips',
  templateUrl: './profile-trips.component.html',
  styleUrls: ['./profile-trips.component.scss']
})

export class ProfileTripsComponent implements OnInit {

  constructor(private peopleService: PeopleService){}
  displayedColumns = ['Name', 'Budget', 'Description',  'StartsAt', 'EndsAt'];
  exampleDatabase = new ExampleDatabase(this.peopleService);
  dataSource: ExampleDataSource | null;


  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }
}
export interface UserData {
  Name: string;
  Description: string;
  Budget: string;
  // Tags: string[];
  StartsAt: string;
  EndsAt: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor(private peopleService: PeopleService) {
    this.peopleService.getMyTrips()
    this.peopleService.results.subscribe((_data) => {
      this.addUser(_data);
      console.log(_data);
    });
  }
  /** Adds a new user to the database. */
  addUser(_data) {
    const copiedData = this.data.slice();
    copiedData.push(_data);
    this.dataChange.next(copiedData);
  }

}

export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleDatabase.data.slice().filter((item: UserData) => {
        //let searchStr = (item.Name + item.Description);
        let searchStr = (item.Name + item.Description).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}