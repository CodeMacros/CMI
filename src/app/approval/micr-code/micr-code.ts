import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-micr-code',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './micr-code.html',
  styleUrl: './micr-code.css',
})
export class MicrCode {

  
  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      micrForm: this.fb.group({}),
      singleEntryForm: this.fb.group({}),
    });

  }

  micrFields: DynamicField[] = [
      {
      type: 'select',
      label: 'Select Mode',
      controlName: 'selectMode',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Single Entry', value: 'singleEntry' },
        { label: 'Bulk Upload', value: 'bulkUpload' }
      ]
    }
  ]

   singleEntryFields: DynamicField[] = [
    {
      type: 'text',
      label: 'MICR Code',
      controlName: 'micrCode',
      placeholder: 'Enter MICR Code',
      required: true,
    },
    {
      type: 'text',
      label: 'Bank MICR Code',
      controlName: 'bankmicrCode',
      placeholder: 'Enter Bank MICR Code',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Bank MICR Code',
      controlName: 'bankmicrCode',
      placeholder: 'Enter Bank MICR Code',
      required: true,
      disabled: true
    },
    {
      type: 'select',
      label: 'Select Code',
      controlName: 'selectCode',
      placeholder: '-- Select Code --',
      options: [
        { label: 'MICR', value: 'MICR' },
        { label: 'IFSC', value: 'IFSC' },

      ]
    },
    
    {
      type: 'text',
      label: 'IFSC',
      controlName: 'IFSC',
      placeholder: 'Enter IFSC',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Bank Account No',
      controlName: 'bankAccountNo',
      placeholder: 'Enter Bank Account No',
      required: true,
    },
    {
      type: 'text',
      label: 'Bank Name',
      controlName: 'bankName',
      placeholder: 'Enter Bank Name',
      disabled: true,
      required: true
    },
    {
      type: 'text',
      label: 'Branch Name',
      controlName: 'branchName',
      placeholder: 'Enter Branch Name',
      disabled: true,
      required: true
    },

  ]

   get micrForm(): FormGroup {
    return this.mainForm.get('micrForm') as FormGroup;
  }

   get singleEntryForm(): FormGroup {
    return this.mainForm.get('singleEntryForm') as FormGroup;
  }


  Submit(){
    //  if (!this.commonService.validateForm(this.mainForm)) {
    //   return;
    // }

    // const Data = this.mainForm.getRawValue();
    // console.log('Fund Transfer Data:', Data);
  }

}
