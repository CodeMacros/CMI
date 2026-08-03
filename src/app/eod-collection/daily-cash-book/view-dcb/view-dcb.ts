import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-view-dcb',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './view-dcb.html',
  styleUrl: './view-dcb.css',
})
export class ViewDcb {

  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      viewDCBSearchForm: this.fb.group({}),
    });

  }

  viewDCBSearchFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Source ID',
      controlName: 'sourceId',
      placeholder: 'Enter Source ID',
      required: true
    },
     {
      type: 'text',
      label: 'List of PC\'s',
      controlName: 'listOfPcs',
      placeholder: 'Enter List of PCs',
      required: true
    },
     {
      type: 'text',
      label: 'List of MPC\'s',
      controlName: 'listOfMpcs',
      placeholder: 'Enter List of MPC\'s',
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

  get viewDCBSearchForm(): FormGroup {
    return this.mainForm.get('viewDCBSearchForm') as FormGroup;
  }

  Submit(){
     if (!this.commonService.validateForm(this.viewDCBSearchForm)) {
      return;
    }

    const searchData = this.viewDCBSearchForm.getRawValue();
    console.log('Search Data:', searchData);
  }

  clear(){
    this.commonService.clearForm(this.viewDCBSearchForm, this.viewDCBSearchFields);
  }
}
