import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  primeiroNome = 'Matheus';
  age = 100;
  person={
    primeiroNome: 'Matheus',
    sobrenome: 'Ramos',
    idade: 20,
    rua: 'Vivaldo Ramos'
  }

  constructor() { }

  ngOnInit() {
  }

}
