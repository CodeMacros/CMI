import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-renewal-document',
  imports: [DynamicForm],
  templateUrl: './renewal-document.html',
  styleUrl: './renewal-document.css',
})
export class RenewalDocument {

  mainForm!: FormGroup

  courierfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Requirement Category',
      controlName: 'requirementCategory',
      placeholder: 'Enter Requirement Category',
      required: true,
    },
    {
      type: 'date',
      label: 'Received Date',
      controlName: 'receivedDate',
      required: true,
      defaultValue: '2026-07-31',
      disabled: true
    },

    {
      type: 'text',
      label: 'Received By',
      controlName: 'receivedBy',
      placeholder: 'Enter Received By',
      required: true,
    },

    {
      type: 'text',
      label: 'Proposal / Policy No',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal / Policy No',
      required: true,
    },
    {
      type: 'text',
      label: 'Folder to save Image',
      controlName: 'foldertosaveImage',
      placeholder: 'Enter Folder to save Image',
      required: true
    },

    {
      type: 'date',
      label: 'Document Sign date ',
      controlName: 'documentSigndate ',
      required: true,
    },
    {
      type: 'text',
      label: 'Reports',
      controlName: 'reports',
      placeholder: 'Enter Reports',
    },
  ];

  documentField: DynamicField[] = [

    {
      type: 'select',
      label: 'Inwrd Category',
      controlName: 'documentSubCategory',
      required: true,
      options: [
        { label: 'Renewal', value: 'renewal' },
        // { label: 'Policy', value: 'policy' },
        // { label: 'Membership', value: 'membership' },
        // { label: 'Loan', value: 'loan' }
      ]
    },
    {
      type: 'select',
      label: 'Policy No/Proposal No/Membership Form No/Loan Account No',
      controlName: 'documentNumberType',
      required: true,
      col: 'col-6',
      options: [
        { label: 'Policy Number', value: 'policy' },
        { label: 'Proposal Number', value: 'proposal' },
        { label: 'Membership Form Number', value: 'membership' },
        { label: 'Loan Account Number', value: 'loan' }
      ]
    }
  ]

  openedSection!: string

  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      documnetForm: this.fb.group({}),
      courierForm: this.fb.group({}),
    });
    this.comSrv.loadStates(this.courierfields)
  }


  get courierForm(): FormGroup {
    return this.mainForm.get('courierForm') as FormGroup;
  }

  get documnetForm(): FormGroup {
    return this.mainForm.get('documnetForm') as FormGroup;
  }

  toggleAccordion(section: string) {
    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }
  }

  onFieldChanged(event: any) {
    console.log(event);
    switch (event.controlName) {
      case 'state':
        this.comSrv.loadCities(event.value, this.courierfields, this.courierForm);
        break;
      // case 'city':
      //   console.log('Selected City:', event.value);
      //   break;
    }

  }

  onSubmit() {
    if (this.comSrv.validateForm(this.mainForm)) {
      console.log(this.mainForm.getRawValue())
    } else {
      console.log('Form is valid', this.comSrv.validateForm(this.mainForm));
    }
  }

  clear(): void {
    this.comSrv.clearForm(this.courierForm, this.courierfields)
    this.comSrv.clearForm(this.documnetForm, this.documentField)
  }

}
