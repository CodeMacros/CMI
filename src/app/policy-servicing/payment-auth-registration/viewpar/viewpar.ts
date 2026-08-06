import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-viewpar',
  imports: [DynamicForm],
  templateUrl: './viewpar.html',
  styleUrl: './viewpar.css',
})
export class Viewpar {

  constructor(private see:FormBuilder, private detail:Common){}
  viewForm!: FormGroup;


  viewPar: DynamicField[] = [
    {
      type: 'number',
      label: 'PA ID',
      placeholder:'Enter PA Id',
      controlName: 'paId',
      required: true
    },

    {
      type: 'number',
      label: 'Sub PA ID',
      placeholder:'Enter PA Sub Id',
      controlName: 'subpaId',
      required: false
    }
  ]


  ngOnInit() {
    this.viewForm = this.see.group({
      viewPar: this.see.group({})
    })
  }


  get viewer() {
    return this.viewForm.get('viewPar') as FormGroup;
  }


  search() {
    const isValid = this.detail.validateForm(this.viewForm);

    if (isValid) {
      console.log(this.viewForm.getRawValue());
    } else {
      console.log('Form is invalid');
    }
  }
}
