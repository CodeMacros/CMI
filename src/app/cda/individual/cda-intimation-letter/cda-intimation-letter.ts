import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-cda-intimation-letter',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './cda-intimation-letter.html',
  styleUrl: './cda-intimation-letter.css',
})
export class CdaIntimationLetter {


  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      intimationForm: this.fb.group({}),
    });

  }

  intimationFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal No.',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal Number',
      required: true
    },
    {
      type: 'text',
      label: 'Policy No.',
      controlName: 'policyNo',
      placeholder: 'Enter Policy Number',
      required: true
    },
    {
      type: 'text',
      label: 'Cheque No.',
      controlName: 'chequeNo',
      placeholder: 'Enter Cheque Number',
      required: true
    }
  ]

  get intimationForm(): FormGroup {
    return this.mainForm.get('intimationForm') as FormGroup;
  }


  Submit() {
    if (!this.commonService.validateForm(this.mainForm)) {
      return;
    }

    const fundTransferData = this.mainForm.getRawValue();
    console.log('Fund Transfer Data:', fundTransferData);
  }

  clear() {
    this.commonService.clearForm(this.mainForm, this.intimationFields)
  }
}
