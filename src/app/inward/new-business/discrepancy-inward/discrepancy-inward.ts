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
      type: 'text',
      label: 'Proposal /Policy Number/ Form Number',
      controlName: 'proposalPolicyFormNum',
      placeholder: 'Enter Proposal Number/Policy Number/ Form Number',
      required: true,
    },
    {
      type: 'text',
      label: 'Proposal /Policy Status',
      controlName: 'proposalPolicyStatus',
      placeholder: 'Enter Proposal /Policy Status',
      required: true,
    },
    {
      type: 'text',
      label: 'Received Date',
      controlName: 'receivedDate',
      required: true,
      defaultValue: '31-07-2026',
      disabled: true
    },
    {
      type: 'select',
      label: 'Received From',
      controlName: 'receivedFrom',
      required: true,
      options: [
        { label: 'Channel', value: '1' },
        { label: 'Customer', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'Received By',
      controlName: 'receivedBy',
      required: true,
      options: [
        { label: 'Courier', value: '1' },
        { label: 'Hand Delivery', value: '2' }
      ]
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
      type: 'text',
      label: 'Remarks',
      controlName: 'remarks',
      placeholder: 'Enter Remarks',
      col: "col-6"
    },
  ];


  documentField: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal / Policy Number',
      controlName: 'proposalPolicyNum',
      placeholder: 'Enter Proposal / Policy Number',
      required: true
    },
    {
      type: 'text',
      label: 'Instrument Number',
      controlName: 'instrumentNumber',
      placeholder: 'Enter Instrument Number',
      required: true
    },
    {
      type: 'text',
      label: 'Instrument Amount',
      controlName: 'instrumentAmount',
      placeholder: 'Enter Proposal / Policy Number',
      required: true
    },
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
