import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  check: boolean = true;

  users = [
    {login: 'bob', role: 'admin', lastLogin: new Date('2/2/2019')},
    {login: 'lia', role: 'user', lastLogin: new Date('4/25/2019')},
    {login: 'robert', role: 'admin', lastLogin: new Date('12/22/2019')},
    {login: 'list', role: 'user', lastLogin: new Date('3/21/2019')}
  ]

  constructor() { }

  ngOnInit() {
  }

}
