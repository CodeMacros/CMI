import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-capture-modify-dcb',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './capture-modify-dcb.html',
  styleUrl: './capture-modify-dcb.css',
})
export class CaptureModifyDcb {
 
  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;


  ngOnInit(): void {
    this.mainForm = this.fb.group({
      captureModifyDcbForm: this.fb.group({}),
    });

  }

  captureModifyDcbFields: DynamicField[] = [
    
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
    },
  ]

  get captureModifyDcbForm(): FormGroup {
    return this.mainForm.get('captureModifyDcbForm') as FormGroup;
  }

Submit() {
   if (!this.commonService.validateForm(this.captureModifyDcbForm)) {
      return;
    }

    const captureModifyDcbData = this.captureModifyDcbForm.getRawValue();
    console.log('Capture Modify DCB Data:', captureModifyDcbData);
  }

  Clear() {
    this.commonService.clearForm(this.captureModifyDcbForm, this.captureModifyDcbFields);
  }
}
