import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-track-inward',
  imports: [DynamicForm],
  templateUrl: './track-inward.html',
  styleUrl: './track-inward.css',
})
export class TrackInward {

  trackInwardForm!: FormGroup


  trackInwardfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Inward Number',
      controlName: 'inwardNumber',
      placeholder: 'Enter Inward Number',
      required: true
    },
    {
      type: 'text',
      label: 'Outward Number',
      controlName: 'outwardNumber',
      placeholder: 'Enter Outward Number',
      required: true
    },
    {
      type: 'select',
      label: 'Proposal/Policy/MF/Loan AC No',
      controlName: 'searchType',
      required: true,
      options: [
        {
          label: 'Proposal Number',
          value: 'proposal'
        },
        {
          label: 'Policy Number',
          value: 'policy'
        },
        {
          label: 'MF Number',
          value: 'mf'
        },
        {
          label: 'Loan Account Number',
          value: 'loan'
        }
      ]
    },
    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNumber',
      placeholder: 'Enter Proposal Number',
      required: true,
      showWhen: {
        controlName: 'searchType',
        values: ['proposal']
      }
    },
    {
      type: 'text',
      label: 'Policy Number',
      controlName: 'policyNumber',
      placeholder: 'Enter Policy Number',
      required: true,
      showWhen: {
        controlName: 'searchType',
        values: ['policy']
      }
    },
    {
      type: 'text',
      label: 'MF Number',
      controlName: 'mfNumber',
      placeholder: 'Enter MF Number',
      required: true,
      showWhen: {
        controlName: 'searchType',
        values: ['mf']
      }
    },
    {
      type: 'text',
      label: 'Loan Account Number',
      controlName: 'loanAccountNumber',
      placeholder: 'Enter Loan Account Number',
      required: true,
      showWhen: {
        controlName: 'searchType',
        values: ['loan']
      }
    }
  ];

  constructor(private fb: FormBuilder, private router: Router, private comSrv: Common) { }

  ngOnInit(): void {
    this.trackInwardForm = this.fb.group({});
  }

  get courierForm(): FormGroup {
    return this.trackInwardForm
  }


  trackInward(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.trackInwardForm);

    if (this.comSrv.validateForm(this.trackInwardForm)) {
      console.log(this.trackInwardForm.getRawValue())
    } else {
      console.log('trackInwardForm is valid', this.comSrv.validateForm(this.trackInwardForm));
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.trackInwardForm, this.trackInwardfields)
  }


}
