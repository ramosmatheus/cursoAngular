import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../client.model';


@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {
  onEdit: boolean = false;
  @Input() client: Client;
  @Output() updateClient = new EventEmitter<Client>();
  @Output() deleteClient = new EventEmitter<any>();

  name: string;
  age: number;

  constructor() { }

  ngOnInit() {
  }

  editar(){
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }
  remove(){
    this.deleteClient.emit();
  }
  save(){
    this.onEdit = false;
    this.updateClient.emit(
      {name: this.name, age: this.age}
    );
  }

}
