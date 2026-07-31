import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-discrepancy-inward',
  imports: [DynamicForm],
  templateUrl: './discrepancy-inward.html',
  styleUrl: './discrepancy-inward.css',
})
export class DiscrepancyInward implements OnInit {
  discrepancyForm!: FormGroup

  courierfields: DynamicField[] = [
      {
      type: 'text',
      label: 'Inward Number',
      controlName: 'inwardNumber',
      placeholder: 'Enter Inward Number',
      required: true
    },
    {
      type: 'select',
      label: 'Renewal/Initial',
      controlName: 'renewalInitial',
      required: true,
      options: [
        { label: 'Renewal', value: '1' },
        { label: 'Initial', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'Received By',
      controlName: 'receivedBy',
      required: true,
      options: [
        { label: 'Inward', value: '1' },
        { label: 'Outward', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Received Date',
      controlName: 'receivedDate',
      required: true,
      defaultValue: '30-07-2026',
      disabled: true
    },
    {
      type: 'text',
      label: 'Courier Agency Name',
      controlName: 'courierAgencyName',
      placeholder: 'Enter Courier Agency Name',
      required: true
    },
    {
      type: 'text',
      label: 'AWB Number',
      controlName: 'awbNumber',
      placeholder: 'Enter AWB Number',
      required: true
    },
    {
      type: 'select',
      label: 'State',
      controlName: 'state',
      options: [
        { label: 'Maharashtra', value: 'MH' },
        { label: 'Bihar', value: 'BR' }
      ]
    },
    {
      type: 'select',
      label: 'City',
      controlName: 'city',
      options: [
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Pune', value: 'Pune' }
      ]
    },
    {
      type: 'select',
      label: 'Document HandOver To',
      controlName: 'documentHandOverTo',
      required: true,
      options: [
        { label: 'Agency 1', value: '1' },
        { label: 'Agency 2', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Remarks',
      controlName: 'remarks',
      placeholder: 'Enter Remarks',
      col: "col-6"
    },
    {
      type: 'text',
      label: 'Additional Information',
      controlName: 'additionalInformation',
      placeholder: 'Enter Additional Information',
      col: "col-6"
    },
  ];


  documentField: DynamicField[] = [

    {
      type: 'select',
      label: 'Document Sub Category',
      controlName: 'documentSubCategory',
      required: true,
      options: [
        { label: 'Proposal', value: 'proposal' },
        { label: 'Policy', value: 'policy' },
        { label: 'Membership', value: 'membership' },
        { label: 'Loan', value: 'loan' }
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


  openedSection!: string;
  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.discrepancyForm = this.fb.group({
      courierForm: this.fb.group({}),
      documentForm: this.fb.group({}),
    });
  }

  get courierForm(): FormGroup {
    return this.discrepancyForm.get('courierForm') as FormGroup;
  }

  get documentForm(): FormGroup {
    return this.discrepancyForm.get('documentForm') as FormGroup;
  }

  toggleAccordion(section: string) {
    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }
  }

  onSubmit() {
    if (this.comSrv.validateForm(this.discrepancyForm)) {
      console.log(this.discrepancyForm.getRawValue())
    } else {
      console.log('trackInwardForm is valid', this.comSrv.validateForm(this.discrepancyForm));
    }
  }

  clear(): void {
    this.comSrv.clearForm(this.courierForm, this.courierfields)
    this.comSrv.clearForm(this.documentForm, this.documentField)
  }

}
