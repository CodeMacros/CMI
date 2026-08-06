import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-modifypar',
  imports: [DynamicForm],
  templateUrl: './modifypar.html',
  styleUrl: './modifypar.css',
})
export class Modifypar {

  constructor(private data: FormBuilder,private val:Common) { }

  modifyForm!: FormGroup;


  modifyPar: DynamicField[] = [
    {
      type: 'number',
      label: 'PA ID',
      placeholder:'Enter Pa Id',
      controlName: 'paId',
      required: true
    },

    {
      type: 'number',
      label: 'Sub PA ID',
      placeholder:'Enter Sub Pa Id',
      controlName: 'subpaId',
      required: false
    }
  ]


  ngOnInit() {
    this.modifyForm = this.data.group({
      modifyPar: this.data.group({})
    })
  }


  get modifier() {
    return this.modifyForm.get('modifyPar') as FormGroup;
  }


  search() {
    const isValid = this.val.validateForm(this.modifyForm);

    if (isValid) {
      console.log(this.modifyForm.getRawValue());
    } else {
      console.log('Form is invalid');
    }
  }
}
