import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HelperService {



  actionUrl= 'http://services.odata.org/TripPinRESTierService/';
  
  constructor(private http: HttpClient) { }
  
  public getPersonWithMostFriends(){
    return this.http.get(this.actionUrl + 'GetPersonWithMostFriends');
  }
  item: CountData;
items: CountData[] = [];
  
// public getAll(): CountData[]{
//    this.callServices();
//     if(this.items.length > 1){
//       return this.items;
//     }else{
//       this.callServices();
//     }    
// }
//   callServices(){

//   }
  public smth(name: String): CountData {
    this.item.service = name;
    this.countService(name);
   
    return this.item;
  }

  public load(name: String): Observable<any> {
    this.item = new CountData();
    return this.http.get(this.actionUrl + name + '/$count').map(
      data => {
        this.item.service = name;
        this.item.count = data as String
       
        return this.item
      })
    // console.log(this.item);
    // return this.item
  }

  public countService(name: String) {
    this.http.get(this.actionUrl + name + '/$count').toPromise().then(res => {
     
      var x: Object = res["_body"];
      // this.item.count = x as number;
      this.saveIt( x as String);  
    }); 
  }

  saveIt(i: String){
    this.item.count = i;     
  }
    
}


export class CountData{
  service: String;
  count: String;
}
