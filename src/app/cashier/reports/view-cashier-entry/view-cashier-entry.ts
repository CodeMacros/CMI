import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { CommonModule } from '@angular/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-view-cashier-entry',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './view-cashier-entry.html',
  styleUrl: './view-cashier-entry.css',
})
export class ViewCashierEntry {

  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      viewCashierEntryForm: this.fb.group({}),
    });

  }

  viewCashierEntryFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Status',
      controlName: 'status',
      placeholder: '-- Select Status --',
      required: true,
      options: [
        // { label: 'Renewal', value: '1' },
        // { label: 'Initial', value: '2' }
      ]
    },
  ]

  get viewCashierEntryForm(): FormGroup {
    return this.mainForm.get('viewCashierEntryForm') as FormGroup;
  }


  Submit() {
    //    if (!this.commonService.validateForm(this.fundTransferForm)) {
    //     return;
    //   }

    //   const fundTransferData = this.fundTransferForm.getRawValue();
    //   console.log('Fund Transfer Data:', fundTransferData);
  }

}
