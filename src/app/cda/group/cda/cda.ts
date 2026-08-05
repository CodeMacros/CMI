import { Component, OnInit } from '@angular/core';
import { Common } from '../../../service/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-cda',
  imports: [DynamicForm],
  templateUrl: './cda.html',
  styleUrl: './cda.css',
})
export class Cda implements OnInit {
  cdaForm!: FormGroup
  cdaFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Cheque Number',
      controlName: 'chequeNumber',
      placeholder: 'Enter Cheque Number',
      required: true
    },
    {
      type: 'text',
      label: 'Form Number',
      controlName: 'formNumber',
      placeholder: 'Enter Form Number',
      required: true
    },
    {
      type: 'text',
      label: 'Policy Number',
      controlName: 'policyNumber',
      placeholder: 'Enter Policy Number',
      required: true
    },
    {
      type: 'checkbox',
      label: 'SCMC',
      controlName: 'dateInstrRec',
      required: true
    }
  ];

  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.cdaForm = this.fb.group({})
  }


  onSubmit() {
    if (this.comSrv.validateForm(this.cdaForm)) {
      console.log(this.cdaForm.getRawValue())
    } else {
      console.log('trackInwardForm is valid', this.comSrv.validateForm(this.cdaForm));
    }
  }
}