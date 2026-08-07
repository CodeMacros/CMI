import { Component, inject } from '@angular/core';
import { DynamicField } from '../../../modal/dynamic-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-scmcfile-upload',
   imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './scmcfile-upload.html',
  styleUrl: './scmcfile-upload.css',
})
export class SCMCFileUpload {

  
  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      scmcFileForm: this.fb.group({}),
    });

  }

  scmcFileFields: DynamicField[] = [
    {
      type: 'text',
      label: 'File Upload Date',
      controlName: 'fileUploadDate',
      placeholder: 'DD-MM-YYYY',
      required: true,
    },
  ]

  get scmcFileForm(): FormGroup {
    return this.mainForm.get('scmcFileForm') as FormGroup;
  }


  Submit() {
    //    if (!this.commonService.validateForm(this.fundTransferForm)) {
    //     return;
    //   }

    //   const fundTransferData = this.fundTransferForm.getRawValue();
    //   console.log('Fund Transfer Data:', fundTransferData);
  }

}
