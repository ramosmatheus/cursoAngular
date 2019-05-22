import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {
  clientForm = this.fb.group({ 
    firstName: ['', [
      Validators.required,
      Validators.minLength(4)
    ]], 
    lastName: ['',[
      Validators.required
    ]], 
    birth: [new Date(), [
      Validators.required,
    ]], 
    age: [0,[
      Validators.max(150),
      Validators.min(1)
    ]],
    email: ['',[
      Validators.required,
      Validators.email
      
    ]], 
    street: ['',[
      Validators.required
    ]], 
    city: ['',[
      Validators.required
    ]],  
    state: ['',[
      Validators.required,
      Validators.min(2),
      Validators.max(2),
    ]], 
    phone1: ['',[
      Validators.required
    ]], 
    phone2: ['',[
      Validators.required
    ]],  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
