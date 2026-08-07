import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-cashier-slip',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './cashier-slip.html',
  styleUrl: './cashier-slip.css',
})
export class CashierSlip {

  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      printingSlipForm: this.fb.group({}),
    });

  }

  printingSlipFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Search By',
      controlName: 'searchBy',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Instrument No.', value: 'instrumentNo' },
        { label: 'DEO', value: 'deo' },
        { label: 'Date Range', value: 'dateRange' },
      ]
    },
    {
      type: 'select',
      label: 'Select DEO',
      controlName: 'selectDeo',
      placeholder: 'Select',
      required: true,
      options: [
        // { label: 'Renewal', value: '1' },
        // { label: 'Initial', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Instrument No.',
      controlName: 'instrumentNo',
      placeholder: 'Enter Instrument No',
      required: true,
    },
     {
      type: 'select',
      label: 'Select Branch',
      controlName: 'selectBranch',
      placeholder: 'Select',
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

  get printingSlipForm(): FormGroup {
    return this.mainForm.get('printingSlipForm') as FormGroup;
  }


  Submit() { }

}
