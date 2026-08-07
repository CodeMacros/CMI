import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-ipcashier-entry',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './ipcashier-entry.html',
  styleUrl: './ipcashier-entry.css',
})
export class IPCashierEntry {

  
  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      ipCashierEntryForm: this.fb.group({}),
    });

  }

  ipCashierEntryFields: DynamicField[] = [
    {
      type: 'text',
      label: 'File Upload Date',
      controlName: 'fileUploadDate',
      placeholder: 'DD-MM-YYYY',
      required: true,
    },
  ]

  get ipCashierEntryForm(): FormGroup {
    return this.mainForm.get('ipCashierEntryForm') as FormGroup;
  }


  Submit() {
    //    if (!this.commonService.validateForm(this.fundTransferForm)) {
    //     return;
    //   }

    //   const fundTransferData = this.fundTransferForm.getRawValue();
    //   console.log('Fund Transfer Data:', fundTransferData);
  }

}
