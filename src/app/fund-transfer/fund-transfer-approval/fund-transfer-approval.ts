import { Component, inject } from '@angular/core';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';

@Component({
  selector: 'app-fund-transfer-approval',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './fund-transfer-approval.html',
  styleUrl: './fund-transfer-approval.css',
})
export class FundTransferApproval {
commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      approvalForm: this.fb.group({}),
    });

  }

  approvalfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal Number',
      required: true
    },
  ]

  get approvalForm(): FormGroup {
    return this.mainForm.get('approvalForm') as FormGroup;
  }

  Submit(){
     if (!this.commonService.validateForm(this.approvalForm)) {
      return;
    }

    const approvalData = this.approvalForm.getRawValue();
    console.log('Approval Data:', approvalData);
  }
}
