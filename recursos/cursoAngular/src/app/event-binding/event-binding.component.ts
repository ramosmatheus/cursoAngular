import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  btnName = 'Meu Botão';
  i = 0;

  constructor() { }

  spinnerMode = "determinate";
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;
  inputName = "Matheus";


  ngOnInit() {
  }

  salvar(){
    console.log("Você clicou no bottão save");
  }
  inc(){
    this.i++;
    this.btnName = 'Mudou' + ' ' + this.i;

  }
  btnDesabilitar(){
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate';
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
      this.i = 0;
    }, 3000 );
  }

  cbChange(event){
    this.selectDisabled = event.checked;
  }
  selectionChange(event){
    this.selectedOption = event.value;
  }
  // inputEvent(event){
  //   console.log(event.target.value);
  //   console.log(this.inputName);
    
  // }

}
