import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-eft-approve-cashier',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './eft-approve-cashier.html',
  styleUrl: './eft-approve-cashier.css',
})
export class EftApproveCashier {


  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      eftApprovalForm: this.fb.group({}),
    });

  }

  eftApprovalFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Reference ID',
      controlName: 'referenceId',
      placeholder: '',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNo',
      placeholder: '',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'All',
      controlName: 'all',
      placeholder: '',
      required: true,
      disabled: true
    },
    {
      type: 'button',
      label: '',
      controlName: 'plus',
      buttonLabel: '+'
    }
  ]

  get eftApprovalForm(): FormGroup {
    return this.mainForm.get('eftApprovalForm') as FormGroup;
  }


  // Search(){
  //    if (!this.commonService.validateForm(this.mainForm)) {
  //     return;
  //   }

  //   const Data = this.mainForm.getRawValue();
  //   console.log('Fund Transfer Data:', Data);
  // }


}
