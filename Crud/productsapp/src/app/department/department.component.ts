import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  depName: string ='';
  departments: Department[] = [
    {name:'dep1'}
  ];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.get()
      .subscribe((deps) => this.departments = deps);    
      
  }

  save(){
    this.departmentService.add({name: this.depName})
      .subscribe(
        (dep) =>{
          console.log(dep);
          this.clearFilds();
        },(err) => console.error(err))
  }
  cancel(){

  }
  edit(dep: Department){
    this.departmentService.del({name: this.depName})
    .subscribe(
      (dep) =>{
        console.log(dep);
        this.clearFilds();
      },(err) => console.error(err))
  }
  delete(dep: Department){
    
  }
  clearFilds(){
    this.depName = '';
  }

}
