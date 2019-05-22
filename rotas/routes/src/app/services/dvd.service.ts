import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  private dvd$ = this.dvdSubject$.asObservable();
  constructor() {
    timer(2000)
      .subscribe(() =>{
        this.dvdSubject$.next([
          {title:"DVD1", year: 2016, genre:"porn"},
          {title:"DVD2", year: 2016, genre:"porn"},
          {title:"DVD3", year: 2016, genre:"porn"}
        ])
      })
   }


   add(b: Dvd){
    let dvds = this.dvdSubject$.getValue();
    dvds.push(b);
   }
   remove(i: number){

    let dvds = this.dvdSubject$.getValue();
    if (i >= 0 && i < dvds.length)
        dvds.splice(i,1);
   }
   get(i: number):Observable<Dvd>{
    return this.dvd$.pipe(
      map(dvds => (i>=0 && i<dvds.length)? dvds[i]: null),
      delay(1000)
    )
    

   }
}
