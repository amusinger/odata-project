import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-people',
  templateUrl: './home-people.component.html',
  styleUrls: ['./home-people.component.scss'],
  providers: [PeopleService]
})
export class HomePeopleComponent implements OnInit {
  displayedColumns = ['UserName', 'FirstName', 'LastName', 'Gender'];
  exampleDatabase = new ExampleDatabase(this.peopleService);
  dataSource: ExampleDataSource | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  public values: any[];  
  // getPeople(): any {
  //   this.peopleService.getAll<any[]>()
  //   .subscribe((data: any[]) => this.values = data["value"]);
  // }

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    
    setTimeout(() => {
      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }, 1000);
    
   
    // this.getPeople();
  }
}
export interface UserData {
  UserName: string;
  FirstName: string;
  LastName: string;
  Gender: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor(private peopleService: PeopleService) {
    this.peopleService.getPeople();
    this.peopleService.results.subscribe((_data) => {
      this.addUser(_data);
    });
  }
  /** Adds a new user to the database. */
  addUser(_data) {
    const copiedData = this.data.slice();
    copiedData.push(_data);
    this.dataChange.next(copiedData);
  }

}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}
