import { Component, inject } from '@angular/core';
import { DynamicField } from '../../modal/dynamic-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { Common } from '../../service/common';

@Component({
  selector: 'app-fund-transfer-entry',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './fund-transfer-entry.html',
  styleUrl: './fund-transfer-entry.css',
})
export class FundTransferEntry {

  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      fundTransferForm: this.fb.group({}),
    });

  }

  fundTransferfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal Number',
      required: true
    },
  ]

   get fundTransferForm(): FormGroup {
    return this.mainForm.get('fundTransferForm') as FormGroup;
  }


  Submit(){
     if (!this.commonService.validateForm(this.fundTransferForm)) {
      return;
    }

    const fundTransferData = this.fundTransferForm.getRawValue();
    console.log('Fund Transfer Data:', fundTransferData);
  }
}
