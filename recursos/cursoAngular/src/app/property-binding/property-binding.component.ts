import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  color: string = "accent";
  btnDisable = true;

  colors = ['primary', 'accent', 'warn', ''];
  idx = 0;
  
  ngOnInit() {
    setInterval( () => {
      this.idx = (this.idx + 1) % this.colors.length;
    } ,1000);
  }
}
