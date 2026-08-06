import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-duplicate-deposit-slip',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './duplicate-deposit-slip.html',
  styleUrl: './duplicate-deposit-slip.css',
})
export class DuplicateDepositSlip {

  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      duplicateSlipForm: this.fb.group({}),
    });

  }

  duplicateSlipFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Duplicate Deposit Slip Category',
      controlName: 'duplicateDepositSlipCategory',
      placeholder: 'Select Duplicate Deposit Slip Category',
      required: true,
      options: [
        // { label: 'Renewal', value: '1' },
        // { label: 'Initial', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'Branch',
      controlName: 'branch',
      placeholder: 'Select Branch',
      required: true,
      options: [
        // { label: 'Renewal', value: '1' },
        // { label: 'Initial', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'From Date',
      controlName: 'fromDate',
      placeholder: '06-08-2026',
      required: true,
    },
    {
      type: 'text',
      label: 'To Date',
      controlName: 'toDate',
      placeholder: '06-08-2026',
      required: true,

    },
  ]

  get duplicateSlipForm(): FormGroup {
    return this.mainForm.get('duplicateSlipForm') as FormGroup;
  }


  Submit() {
    //    if (!this.commonService.validateForm(this.fundTransferForm)) {
    //     return;
    //   }

    //   const fundTransferData = this.fundTransferForm.getRawValue();
    //   console.log('Fund Transfer Data:', fundTransferData);
  }

}
