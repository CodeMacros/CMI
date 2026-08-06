import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-micr-code',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm, Dynamictable],
  templateUrl: './micr-code.html',
  styleUrl: './micr-code.css',
})
export class MicrCode {


  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;
  tableData: any[] = [];
  selectedMode = '';

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      micrForm: this.fb.group({}),
      singleEntryForm: this.fb.group({}),
      bulkUploadForm: this.fb.group({})
    });


    setTimeout(() => {
      this.micrForm.get('selectMode')?.valueChanges.subscribe(value => {
        this.selectedMode = value;
      });
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
      label: 'City MICR Code',
      controlName: 'citymicrCode',
      placeholder: 'Enter City MICR Code',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Branch MICR Code',
      controlName: 'branchmicrCode',
      placeholder: 'Enter Branch MICR Code',
      required: true,
      disabled: true
    },
    {
      type: 'select',
      label: 'Bank Name',
      controlName: 'bankName',
      placeholder: '-- Select  --',
      required: true,
      options: [
        { label: 'MICR', value: 'MICR' },
        { label: 'IFSC', value: 'IFSC' },

      ]
    },
    {
      type: 'select',
      label: 'City Name',
      controlName: 'cityName',
      placeholder: '-- Select  --',
      required: true,
      options: [
        { label: 'MICR', value: 'MICR' },
        { label: 'IFSC', value: 'IFSC' },

      ]
    },
    {
      type: 'text',
      label: 'Branch Name',
      controlName: 'branchName',
      placeholder: 'Enter Branch Name',
      required: true
    },

  ]

  builkUploadFields: DynamicField[] = [
    {
      type: 'file',
      label: 'Choose File',
      controlName: 'document',
      required: true
    }
  ]

  get micrForm(): FormGroup {
    return this.mainForm.get('micrForm') as FormGroup;
  }

  get singleEntryForm(): FormGroup {
    return this.mainForm.get('singleEntryForm') as FormGroup;
  }

  get bulkUploadForm(): FormGroup {
    return this.mainForm.get('bulkUploadForm') as FormGroup;
  }

  Submit() {
    if (!this.commonService.validateForm(this.singleEntryForm)) {
      return;
    }

    const payload = {
      selectedMode: this.selectedMode,
      data: this.singleEntryForm.getRawValue()
    };

    console.log(payload);
  }

  clear() {
    this.commonService.clearForm(this.singleEntryForm, this.singleEntryFields)
  }

  tableColumns = [
    { field: 'CheckDraftNo', header: 'No' },
    { field: 'CheckDraftDate', header: 'File Name' },
    { field: 'PayMode', header: 'File Size' },
    { field: 'PaymentType', header: 'File Type' },
    { field: 'Amount', header: 'Upload Type' },
    { field: 'Bank', header: 'Description' },
    { field: 'Delete', header: 'Option', type: 'button', buttonLabel: 'Delete' }

  ];

  upload() {
    if (!this.commonService.validateForm(this.bulkUploadForm)) {
    return;
  }

  const payload = {
    selectedMode: this.selectedMode,
    data: this.bulkUploadForm.getRawValue(),
    tableData: this.tableData
  };

  console.log(payload);

  }
}
