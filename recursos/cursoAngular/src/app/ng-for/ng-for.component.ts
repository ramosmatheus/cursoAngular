import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names=[
    'Matheus',
    'Alana',
    'Wick',
    'Rubens'
  ];

  cities = [
    {name: 'São paulo', state: 'SP'},
    {name: 'Paranavaí', state: 'PR'},
    {name: 'Piraiaba', state: 'MT'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
