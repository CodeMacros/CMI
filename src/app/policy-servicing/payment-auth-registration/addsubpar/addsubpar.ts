import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-addsubpar',
  imports: [DynamicForm],
  templateUrl: './addsubpar.html',
  styleUrl: './addsubpar.css',
})
export class Addsubpar {


  constructor(private fb: FormBuilder,private see:Common) { }
  valueForm!: FormGroup;


  addsubPar: DynamicField[] = [
    {
      type: 'number',
      label: 'PA ID',
      placeholder:'Enter PA Id',
      controlName: 'paId',
      required: true
    },

    {
      type: 'text',
      label: 'Pan No',
      placeholder:'Enter Pan No',
      controlName: 'panNo',
      required: false
    },
    {
      type: 'number',
      label: 'Pincode',
      placeholder:'Enter Pincode',
      controlName: 'pincode',
      required: false
    },
  ]



  ngOnInit() {
    this.valueForm = this.fb.group({
      addsubPar: this.fb.group({})
    })
  }


  get addsuber() {
    return this.valueForm.get('addsubPar') as FormGroup;
  }


  submit() {
    const isValid = this.see.validateForm(this.valueForm);

    if (isValid) {
      console.log(this.valueForm.getRawValue());
    } else {
      console.log('Form is invalid');
    }
  }


}
