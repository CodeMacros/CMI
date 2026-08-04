import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { Common } from '../../service/common';
import { DynamicField } from '../../modal/dynamic-field';

@Component({
  selector: 'app-view-piwc',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './view-piwc.html',
  styleUrl: './view-piwc.css',
})
export class ViewPiwc {

  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }

  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      PIWCForm: this.fb.group({}),

    });

  }


  PIWCFields: DynamicField[] = [
  {
    type: 'select',
    label: 'PIWC Details Type',
    controlName: 'SelectedType',
    required: true,
    triggerChange: true,
    options: [
      {
        label: 'View Audio PIWC Details',
        value: 'Audio'
      },
      {
        label: 'View Insta PIWC Details',
        value: 'Insta'
      },
      {
        label: 'View Video PIWC Details',
        value: 'Video'
      }
    ]
  },
  {
    type: 'text',
    label: 'Proposal Number',
    controlName: 'proposalNo',
    placeholder: 'Enter Proposal Number',
    required: true,
    visible: false  
  }
];

  get PIWCForm(): FormGroup {
    return this.mainForm.get('PIWCForm') as FormGroup;
  }


   onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'SelectedType') {
      return;
    }

    const proposalField = this.PIWCFields.find(
      f => f.controlName === 'proposalNo'
    );

    if (proposalField) {
      proposalField.visible = !!event.value;
    }

    if (!event.value) {
      this.PIWCForm.get('proposalNo')?.reset();
    }
  }


  Search() {
    if (!this.commonService.validateForm(this.PIWCForm)) {
      return;
    }

    const piwcData = this.PIWCForm.getRawValue();
    console.log('PIWC Data:', piwcData);
  }

}
