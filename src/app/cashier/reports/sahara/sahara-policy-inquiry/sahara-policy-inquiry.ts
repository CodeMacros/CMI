import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../../modal/dynamic-field';
import { Common } from '../../../../service/common';
import { DynamicForm } from '../../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-sahara-policy-inquiry',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './sahara-policy-inquiry.html',
  styleUrl: './sahara-policy-inquiry.css',
})
export class SaharaPolicyInquiry {

  
  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      saharaPolicyEnquiryForm: this.fb.group({}),
    });

  }

  saharaPolicyEnquiryFields: DynamicField[] = [
   
    {
      type: 'text',
      label: 'Policy Number',
      controlName: 'policyNo',
      placeholder: 'Enter Policy Number',
      required: true,
    },
  ]

  get saharaPolicyEnquiryForm(): FormGroup {
    return this.mainForm.get('saharaPolicyEnquiryForm') as FormGroup;
  }


  Submit() {

  }


}
