import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';
import { CommonModule } from '@angular/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-upload-piwc',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './upload-piwc.html',
  styleUrl: './upload-piwc.css',
})
export class UploadPiwc {


  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }

  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      updatePIWCForm: this.fb.group({}),

    });

  }


  updatePIWCFields: DynamicField[] = [
    {
      type: 'select',
      label: 'PIWC Type',
      controlName: 'piwcType',
      placeholder: '-- Select --',
      required: true,
      options: [
        {
          label: 'Update Audio PIWC Details',
          value: 'updateAudio'
        },
        {
          label: 'Update Insta PIWC Details',
          value: 'updateInsta'
        },
        {
          label: 'Update Video PIWC Details',
          value: 'updateVideo'
        }
      ]
    },
    {
      type: 'select',
      label: 'Update Mode',
      controlName: 'updateMode',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Single Update', value: 'singleUpdate' },
        { label: 'Bulk Update', value: 'bulkUpdate' }
      ]
    },

    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal Number',
      required: true,
    }
  ];

  get updatePIWCForm(): FormGroup {
    return this.mainForm.get('updatePIWCForm') as FormGroup;
  }





  Search() {
    if (!this.commonService.validateForm(this.updatePIWCForm)) {
      return;
    }

    const updatePiwcData = this.updatePIWCForm.getRawValue();
    console.log('PIWC Data:', updatePiwcData);
  }


}
