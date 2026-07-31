import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from 'express';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-edit-inward',
  imports: [DynamicForm],
  templateUrl: './edit-inward.html',
  styleUrl: './edit-inward.css',
})
export class EditInward {

  editInwardForm!: FormGroup


  editInwardfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Inward Number',
      controlName: 'inwardNumber',
      placeholder: 'Enter Inward Number',
      required: true,
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
      visible: true,
      triggerChange: true,
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
      visible: false,
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
      visible: false,
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
      visible: false,
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
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['loan']
      }
    }
  ];

  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.editInwardForm = this.fb.group({});
  }

  get editForm(): FormGroup {
    return this.editInwardForm
  }


  onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'searchType') {
      return;
    }

    this.editInwardfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      field.visible = field.showWhen.values.includes(event.value);

      const control = this.editForm.get(field.controlName);

      if (!control) {
        return;
      }

      if (field.visible) {
        control.enable();
      } else {
        control.reset();
        control.disable();
      }

    });

  }

  editInward(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.editInwardForm);

    if (this.comSrv.validateForm(this.editInwardForm)) {
      console.log(this.editInwardForm.getRawValue())
    } else {
      console.log('editInwardForm is valid', this.comSrv.validateForm(this.editInwardForm));
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.editInwardForm, this.editInwardfields)
  }

}
