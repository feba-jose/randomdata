import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Randomdata } from './random';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import { catchError } from 'rxjs/operators'


@Injectable()
export class SampleService {

  public url ='assets/sampledata.json'

  constructor(private http:HttpClient){}
  getSampledata():Observable<Randomdata[]>{
return this.http.get<Randomdata[]>(this.url)
//.catch(this.errorHandler);
  }
  // errorHandler(error: HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error");
  // }

}




