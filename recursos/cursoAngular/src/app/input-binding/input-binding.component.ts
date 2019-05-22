import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client/client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string;
  @Input('otherName') lastName: string;
  @Input() age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      {id:1, name: 'bob', age:30},
      {id:2, name: 'ana', age:23},
      {id:3, name: 'banana', age:12},
    ]
   }

  ngOnInit() {
  }

}
