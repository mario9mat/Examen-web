import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {
  formulario: FormGroup;
  
  constructor(public form:FormBuilder) { 
    this.formulario=this.form.group({
      'nombre': ['', [Validators.minLength(4),Validators.maxLength(30),Validators.required]],
      'pais': ['', [Validators.required]],
      'obs': ['', [Validators.minLength(1),Validators.maxLength(250),Validators.required]],
    });
  }

  
  ngOnInit(): void {
  }
  
  
  Validar(){
    console.log(this.formulario.value); 
  }
}
