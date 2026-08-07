import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { Common } from '../../service/common';

@Component({
  selector: 'app-correct-awb',
  imports: [DynamicForm],
  templateUrl: './correct-awb.html',
  styleUrl: './correct-awb.css',
})
export class CorrectAwb implements OnInit {
  awbForm!: FormGroup


  awbfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Outward Number',
      controlName: 'outwardNumber',
      placeholder: 'Enter Outward Number',
      required: true,
    },
  ];

  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.awbForm = this.fb.group({});
  }

  get editForm(): FormGroup {
    return this.awbForm
  }


  search(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.awbForm);

    if (this.comSrv.validateForm(this.awbForm)) {
      console.log(this.awbForm.getRawValue())
    } else {
      console.log('awbForm is valid', this.comSrv.validateForm(this.awbForm));
    }

  }

}