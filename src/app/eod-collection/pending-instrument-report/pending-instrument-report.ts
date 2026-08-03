import { Component } from '@angular/core';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../modal/dynamic-field';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Common } from '../../service/common';
import { Dynamictable } from '../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-pending-instrument-report',
  imports: [DynamicForm , Dynamictable],
  templateUrl: './pending-instrument-report.html',
  styleUrl: './pending-instrument-report.css',
})
export class PendingInstrumentReport {

  pendingInsForm!: FormGroup

  pendingInsDetailForm!: FormGroup
  pendingInsfields: DynamicField[] = [
    {
      type: 'select',
      label: 'Branch',
      controlName: 'lodegmentCategory',
      required: true,
      options: [
        {
          label: 'Mumbai',
          value: 'mumbai'
        },
      ]
    },
    {
      type: 'select',
      label: 'Reports',
      controlName: 'report',
      required: true,
      options: [
        {
          label: 'Active',
          value: 'active'
        },
      ]
    }
  ];

  pendingInsDetailfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Generated at',
      controlName: 'generatedAt',
      required: true,
      defaultValue: 'Ho',
      disabled: true,
    },
    {
      type: 'text',
      label: 'Generated Date',
      controlName: 'generatedDate',
      required: true,
      defaultValue: '2026-07-31',
      disabled: true,
    },
    {
      type: 'text',
      label: 'Location',
      controlName: 'location',
      required: true,
      defaultValue: 'All Branches',
      disabled: true,
    },
    {
      type: 'text',
      label: 'Instrument In Hand as on',
      controlName: 'instrumentInHandAsOn',
      required: true,
      defaultValue: '2026-07-31',
      disabled: true,
    }
  ];

  tableColumns = [
  { field: 'srNo', header: 'No.' },
  { field: 'transactionDate', header: 'Transaction Date' },
  { field: 'proposalNo', header: 'Proposal No / Policy No / Master Policy No / Customer ID / SCMC-id / Form No.' },
  { field: 'plan', header: 'Plan' },
  { field: 'bank', header: 'Bank' },
  { field: 'branch', header: 'Branch' },
  { field: 'city', header: 'City' },
  { field: 'paymentMode', header: 'Mode of Payment' },
  { field: 'chequeDdNumber', header: 'Ch/DD Number' },
  { field: 'chequeDdDate', header: 'Ch/DD Date' },
  { field: 'amount', header: 'Amount' },
  { field: 'sbiLifeBranch', header: 'SBILife Branch' },
  { field: 'sbiLifeBranch', header: 'SBILife Branch' },
  { field: 'sbiLifeBranch', header: 'SBILife Branch' },
  { field: 'sbiLifeBranch', header: 'SBILife Branch' },
  { field: 'sbiLifeBranch', header: 'SBILife Branch' },
  { field: 'sbiLifeBranch', header: 'SBILife Branch' },
];

  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.pendingInsForm = this.fb.group({})
    this.pendingInsDetailForm = this.fb.group({})
  }




  pendingIns(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.pendingInsForm);

    if (this.comSrv.validateForm(this.pendingInsForm)) {
      console.log(this.pendingInsForm.getRawValue())
    } else {
      console.log(' pendingInsForm is valid', this.comSrv.validateForm(this.pendingInsForm));
      console.log(this.pendingInsForm.value);
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.pendingInsForm, this.pendingInsfields)
  }


  onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'searchType') {
      return;
    }

    this.pendingInsfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      field.visible = field.showWhen.values.includes(event.value);

      const control = this.pendingInsForm.get(field.controlName);

      if (!control) {
        return;
      }

      if (field.visible) {
        control.enable();
      } else {
        control.reset();
        control.disable();
      }

    });

  }


}
