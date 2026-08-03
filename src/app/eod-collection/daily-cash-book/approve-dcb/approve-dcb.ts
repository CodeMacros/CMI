import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-approve-dcb',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './approve-dcb.html',
  styleUrl: './approve-dcb.css',
})

export class ApproveDcb {

  commonService = inject(Common);
  
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      approveDCBForm: this.fb.group({}),
  
    });

  }

  approveDCBFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Branch Name',
      controlName: 'branchName',
      placeholder: 'Enter Branch Name',
      required: true
    },
     {
      type: 'text',
      label: 'Branch Code',
      controlName: 'branchCode',
      placeholder: 'Enter Branch Code',
      required: true
    },
     {
      type: 'text',
      label: 'DCB Search Date',
      controlName: 'dcbSearchDate',
      placeholder: 'Enter DCB Search Date',
      required: true
    }
  ]

  get approveDCBForm(): FormGroup {
    return this.mainForm.get('approveDCBForm') as FormGroup;
  }


  Submit(){
     if (!this.commonService.validateForm(this.approveDCBForm)) {
      return;
    }

    const approveDCBData = this.approveDCBForm.getRawValue();
    console.log('Approve DCB Data:', approveDCBData);
  }

  clear(){
    this.commonService.clearForm(this.approveDCBForm, this.approveDCBFields);
  }

}
