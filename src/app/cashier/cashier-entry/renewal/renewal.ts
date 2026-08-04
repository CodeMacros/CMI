import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-renewal',
  imports: [DynamicForm, Dynamictable],
  templateUrl: './renewal.html',
  styleUrl: './renewal.css',
})
export class Renewal {
 renewalyForm!: FormGroup

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

  paymentField: DynamicField[] = [
    {
      type: 'text',
      label: 'Mode of Payment',
      controlName: 'modeofPayment',
      placeholder: 'Enter Mode of Payment',
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

  cashierEntryFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Policy No',
      controlName: 'policyNo',
      placeholder: 'Enter Policy No',
      required: true
    },
    {
      type: 'text',
      label: 'Proposal No',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal No',
      required: true
    },
    {
      type: 'select',
      label: 'Plan',
      controlName: 'plan',
      required: true,
      options: [
        { label: 'Plan 1', value: 'plan1' },
        { label: 'Plan 2', value: 'plan2' }
      ]
    },

    {
      type: 'date',
      label: 'Received Date',
      controlName: 'receivedDate',
      required: true
    },
    {
      type: 'date',
      label: 'Proposal Date',
      controlName: 'proposalDate',
      required: true
    },
    {
      type: 'select',
      label: 'Category ID',
      controlName: 'categoryId',
      required: true,
      options: [
        { label: 'Category 1', value: '1' },
        { label: 'Category 2', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Series',
      controlName: 'series',
      readonly: true
    },

    {
      type: 'text',
      label: 'Status',
      controlName: 'status',

      readonly: true
    },
    {
      type: 'select',
      label: 'Frequency',
      controlName: 'frequency',
      required: true,
      options: [
        { label: 'Monthly', value: 'M' },
        { label: 'Quarterly', value: 'Q' },
        { label: 'Half Yearly', value: 'H' },
        { label: 'Yearly', value: 'Y' }
      ]
    },
    {
      type: 'number',
      label: 'Installment Premium',
      controlName: 'installmentPremium',
      placeholder: 'Enter Installment Premium',
      required: true
    },
    {
      type: 'select',
      label: 'Channel Type',
      controlName: 'channelType',
      required: true,
      options: [
        { label: 'Agency', value: 'agency' },
        { label: 'Direct', value: 'direct' }
      ]
    },

    {
      type: 'select',
      label: 'New Fund Allocation',
      controlName: 'newFundAllocation',
      options: [
        { label: 'NA', value: 'NA' },
        { label: 'Yes', value: 'YES' },
        { label: 'No', value: 'NO' }
      ]
    }
  ];

  proposalDetailsFields: DynamicField[] = [
    {
      type: 'text',
      label: 'First Name',
      controlName: 'firstName',
      placeholder: 'Enter First Name',
      inputType: 'alpha'
    },
    {
      type: 'text',
      label: 'Middle Name',
      controlName: 'middleName',
      placeholder: 'Enter Middle Name',
      inputType: 'alpha'
    },
    {
      type: 'text',
      label: 'Last Name',
      controlName: 'lastName',
      placeholder: 'Enter Last Name',
      inputType: 'alpha'
    },
    {
      type: 'text',
      label: 'Address 1',
      controlName: 'address1',
      placeholder: 'Enter Address 1'
    },

    {
      type: 'text',
      label: 'Address 2',
      controlName: 'address2',
      placeholder: 'Enter Address 2'
    },
    {
      type: 'text',
      label: 'Address 3',
      controlName: 'address3',
      placeholder: 'Enter Address 3'
    },
    {
      type: 'text',
      label: 'Home Phone No',
      controlName: 'homePhoneNo',
      placeholder: 'Enter Home Phone No',
      inputType: 'number',
      minLength: 10,
      maxLength: 10
    },
    {
      type: 'text',
      label: 'Office Phone No',
      controlName: 'officePhoneNo',
      placeholder: 'Enter Office Phone No',
      inputType: 'number',
      minLength: 10,
      maxLength: 10
    },

    {
      type: 'text',
      label: 'Mobile No',
      controlName: 'mobileNo',
      placeholder: 'Enter Mobile No',
      inputType: 'number',
      minLength: 10,
      maxLength: 10
    },
    {
      type: 'select',
      label: 'State',
      controlName: 'state',
      triggerChange: true,
      options: [
        { label: 'Maharashtra', value: 'MH' },
        { label: 'Gujarat', value: 'GJ' },
        { label: 'Delhi', value: 'DL' }
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
      type: 'text',
      label: 'Pin Code',
      controlName: 'pinCode',
      placeholder: 'Enter Pin Code',
      inputType: 'number',
      minLength: 6,
      maxLength: 6
    },

    {
      type: 'select',
      label: 'Country',
      controlName: 'country',
      options: [
        { label: 'India', value: 'India' }
      ]
    }
  ];

  channelDetailsFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Channel',
      controlName: 'channel',
      placeholder: 'Enter Channel',
      required: true,
      inputType: 'alpha'
    },
    {
      type: 'text',
      label: 'Code 1',
      controlName: 'code1',
      placeholder: 'Enter Code 1',
      required: true,
      inputType: 'alphanumeric'
    },
    {
      type: 'text',
      label: 'Code 2',
      controlName: 'code2',
      placeholder: 'Enter Code 2',
      inputType: 'alphanumeric'
    },
    {
      type: 'text',
      label: 'Code 3',
      controlName: 'code3',
      placeholder: 'Enter Code 3',
      inputType: 'alphanumeric'
    },
    {
      type: 'text',
      label: 'Worksite No',
      controlName: 'worksiteNo',
      placeholder: 'Enter Worksite No',
      inputType: 'alphanumeric'
    }
  ];


  tableColumns = [
    {
      field: 'chequeDraftNo',
      header: 'Cheq/Draft No'
    },
    {
      field: 'ocrNonOcr',
      header: 'OCR/Non-OCR'
    },
    {
      field: 'chequeDraftDate',
      header: 'Cheq/Draft Date'
    },
    {
      field: 'ifscCode',
      header: 'IFSC Code'
    },
    {
      field: 'accountHolderName',
      header: 'Account Holder Name'
    },
    {
      field: 'bankAccountNo',
      header: 'Bank Account No'
    },
    {
      field: 'payMode',
      header: 'Pay Mode'
    },
    {
      field: 'paymentType',
      header: 'Payment Type'
    },
    {
      field: 'amount',
      header: 'Amount'
    },
    {
      field: 'bank',
      header: 'Bank'
    },
    {
      field: 'delete',
      header: 'Delete'
    }
  ];


  openedSection!: string;
  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.renewalyForm = this.fb.group({
      cashierEntryForm: this.fb.group({}),
      courierForm: this.fb.group({}),
      paymentForm: this.fb.group({}),
      proposalDetailsForm: this.fb.group({}),
      channelDetailsForm: this.fb.group({}),
    });
  }

  get cashierEntryForm(): FormGroup {
    return this.renewalyForm.get('cashierEntryForm') as FormGroup;
  }

  get courierForm(): FormGroup {
    return this.renewalyForm.get('courierForm') as FormGroup;
  }

  get paymentForm(): FormGroup {
    return this.renewalyForm.get('paymentForm') as FormGroup;
  }

  get proposalDetailsForm(): FormGroup {
    return this.renewalyForm.get('proposalDetailsForm') as FormGroup;
  }

  get channelDetailsForm(): FormGroup {
    return this.renewalyForm.get('proposalDetailsForm') as FormGroup;
  }

  toggleAccordion(section: string) {
    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }
  }

  onSubmit() {
    if (this.comSrv.validateForm(this.renewalyForm)) {
      console.log(this.renewalyForm.getRawValue())
    } else {
      console.log('trackInwardForm is valid', this.comSrv.validateForm(this.renewalyForm));
    }
  }

  clear(): void {
    this.comSrv.clearForm(this.courierForm, this.courierfields)
    this.comSrv.clearForm(this.paymentForm, this.paymentField)
    this.comSrv.clearForm(this.channelDetailsForm, this.channelDetailsFields)
    this.comSrv.clearForm(this.cashierEntryForm, this.cashierEntryFields)
    this.comSrv.clearForm(this.proposalDetailsForm, this.proposalDetailsFields)
  }
}
