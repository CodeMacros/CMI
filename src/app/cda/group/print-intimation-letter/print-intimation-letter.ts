import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Common } from '../../../service/common';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-print-intimation-letter',
  imports: [DynamicForm],
  templateUrl: './print-intimation-letter.html',
  styleUrl: './print-intimation-letter.css',
})
export class PrintIntimationLetter implements OnInit {
  cdaIntimationForm!: FormGroup
  cdaIntimationFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Membership Form Number',
      controlName: 'formNumber',
      placeholder: 'Enter Membership Form Number',
      required: true
    },
    {
      type: 'text',
      label: 'Cheque/DD. Number',
      controlName: 'chequeNumber',
      placeholder: 'Enter Cheque/DD. Number',
      required: true
    },
    {
      type: 'date',
      label: 'Date of Dishonored Instrument Received',
      controlName: 'dateInstrRec',
      required: true
    }
  ];

  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.cdaIntimationForm = this.fb.group({})
  }


  onSubmit() {
    if (this.comSrv.validateForm(this.cdaIntimationForm)) {
      console.log(this.cdaIntimationForm.getRawValue())
    } else {
      console.log('trackInwardForm is valid', this.comSrv.validateForm(this.cdaIntimationForm));
    }
  }


}