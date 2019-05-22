import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Department } from './department';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly url = 'http://localhost:3000/departments';

  private departmentSubject$: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>(null);
  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  get(): Observable<Department[]> {
    if (!this.loaded) {
      this.http.get<Department[]>(this.url)
        .pipe(tap((deps) => console.log(deps)))
        .subscribe(this.departmentSubject$);
      this.loaded = true;
    }
    return this.departmentSubject$.asObservable();
  }
  post() {

  }
  add(d: Department): Observable<Department> {
    return this.http.post<Department>(this.url, d)
    .pipe(
      tap((dep: Department) => this.departmentSubject$.getValue().push(dep))
    )
  }

  del(dep: Department): Observable<any>{
    return this.http.delete(`${this.url}/${dep.id}`)
    .pipe(
      tap(() =>{
        let departments = this.departmentSubject$.getValue();
        let i = departments.findIndex(d => d.id === dep.id);
        if (i>=0)
          departments.splice(i,1);  
      }))
  }
  
}
