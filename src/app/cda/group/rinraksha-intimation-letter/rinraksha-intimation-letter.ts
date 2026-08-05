import { Component, OnInit } from '@angular/core';
import { Common } from '../../../service/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-rinraksha-intimation-letter',
  imports: [DynamicForm],
  templateUrl: './rinraksha-intimation-letter.html',
  styleUrl: './rinraksha-intimation-letter.css',
})
export class RinrakshaIntimationLetter implements OnInit {
  rinRakshaIntimationForm!: FormGroup
  rinRakshaIntimationFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Membership Form Number',
      controlName: 'formNumber',
      placeholder: 'Enter Membership Form Number',
      required: true
    },
    {
      type: 'text',
      label: 'Cheque/Draft No',
      controlName: 'chequeNumber',
      placeholder: 'Enter Cheque/Draft Number',
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
    this.rinRakshaIntimationForm = this.fb.group({})
  }


  onSubmit() {
    if (this.comSrv.validateForm(this.rinRakshaIntimationForm)) {
      console.log(this.rinRakshaIntimationForm.getRawValue())
    } else {
      console.log('trackInwardForm is valid', this.comSrv.validateForm(this.rinRakshaIntimationForm));
    }
  }


}