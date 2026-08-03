import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { Common } from '../../service/common';
import { DynamicField } from '../../modal/dynamic-field';

@Component({
  selector: 'app-view-piwc',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './view-piwc.html',
  styleUrl: './view-piwc.css',
})
export class ViewPiwc {

  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }

  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      PIWCForm: this.fb.group({}),

    });

  }

  PIWCFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal Number',
      required: true
    },
  ]

  get PIWCForm(): FormGroup {
    return this.mainForm.get('PIWCForm') as FormGroup;
  }


  Submit() {
    if (!this.commonService.validateForm(this.PIWCForm)) {
      return;
    }

    const fundTransferData = this.PIWCForm.getRawValue();
    console.log('Fund Transfer Data:', fundTransferData);
  }

}
