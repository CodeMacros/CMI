import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-cda-file-upload',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm,],
  templateUrl: './cda-file-upload.html',
  styleUrl: './cda-file-upload.css',
})
export class CdaFileUpload {

  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;
  tableData: any[] = [];

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      cdaForm: this.fb.group({}),
    });

  }

  cdaFields: DynamicField[] = [
    {
      type: 'file',
      label: 'Choose File',
      controlName: 'document',
      required: true
    }
  ]

  get cdaForm(): FormGroup {
    return this.mainForm.get('cdaForm') as FormGroup;
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
    //  if (!this.commonService.validateForm(this.approvalForm)) {
    //   return;
    // }

    // const approvalData = this.approvalForm.getRawValue();
    // console.log('Approval Data:', approvalData);
  }
}
