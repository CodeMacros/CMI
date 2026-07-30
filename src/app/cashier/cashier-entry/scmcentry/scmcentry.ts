import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-scmcentry',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './scmcentry.html',
  styleUrl: './scmcentry.css',
})
export class Scmcentry {

  constructor(private fb: FormBuilder) { }


  mainForm!: FormGroup;

  checkDraftfields: DynamicField[] = [

    {
      type: 'text',
      label: 'Cheq/Draft No',
      controlName: 'chequeDraftNo',
      placeholder: 'Enter Cheq/Draft No',
      required: true
    },

    {
      type: 'date',
      label: 'Received Date',
      controlName: 'receivedDate',
      required: true,
      defaultValue: '30-07-2026',
      disabled: true
    },

    {
      type: 'text',
      label: 'Cheq/Draft Date',
      controlName: 'chequeDraftDate',
      placeholder: 'dd MMM yyyy',
      required: true
    },

    {
      type: 'select',
      label: 'Pay Mode',
      controlName: 'payMode',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Cheque', value: 'cheque' },
        { label: 'Cash', value: 'cash' },
        { label: 'NEFT', value: 'neft' },
        { label: 'RTGS', value: 'rtgs' }
      ]
    },

    {
      type: 'select',
      label: 'Cheque Type',
      controlName: 'chequeType',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Local', value: 'local' },
        { label: 'Outstation', value: 'outstation' }
      ]
    },

    {
      type: 'number',
      label: 'Amount',
      controlName: 'amount',
      placeholder: 'Enter Amount',
      required: true
    },

    {
      type: 'text',
      label: 'Bank Account No',
      controlName: 'bankAccountNo',
      placeholder: 'Enter Bank Account No'
    },

    {
      type: 'text',
      label: 'Account Holder Name',
      controlName: 'accountHolderName',
      placeholder: 'Enter Account Holder Name',
      required: true
    },

    {
      type: 'select',
      label: 'AML Document Submitted',
      controlName: 'amlDocument',
      placeholder: '-- Select --',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' }
      ]
    },

    {
      type: 'text',
      label: 'MICR Code',
      controlName: 'micrCode',
      placeholder: 'Enter MICR Code'
    },

    {
      type: 'text',
      label: 'IFSC Code',
      controlName: 'ifscCode',
      placeholder: 'Enter IFSC Code',
      required: true
    },

    {
      type: 'select',
      label: 'Instrument Type',
      controlName: 'instrumentType',
      placeholder: '-- Select --',
      options: [
        { label: 'Cheque', value: 'cheque' },
        { label: 'Demand Draft', value: 'dd' }
      ]
    },

    {
      type: 'text',
      label: 'Bank',
      controlName: 'bank',
      placeholder: 'Enter Bank Name',
      required: true
    },

    {
      type: 'text',
      label: 'Branch',
      controlName: 'branch',
      placeholder: 'Enter Branch Name',
      required: true
    },

    {
      type: 'select',
      label: 'State',
      controlName: 'state',
      placeholder: '-- Select State --',
      required: true,
      options: [
        { label: 'Maharashtra', value: 'MH' },
        { label: 'Gujarat', value: 'GJ' }
      ]
    },

    {
      type: 'select',
      label: 'City',
      controlName: 'city',
      placeholder: '-- Select City --',
      required: true,
      options: [
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Pune', value: 'Pune' }
      ]
    }

  ];

  individualDetails: DynamicField[] = [
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
    placeholder: '-- Select Plan --',
    required: true,
    options: []
  },

  {
    type: 'text',
    label: 'Received Date',
    controlName: 'receivedDate',
    required: true
  },

  {
    type: 'text',
    label: 'Proposal Date',
    controlName: 'proposalDate',
    required: true
  },

  {
    type: 'select',
    label: 'Category ID',
    controlName: 'categoryId',
    placeholder: '-- Select Category --',
    required: true,
    options: []
  },

  {
    type: 'text',
    label: 'Series',
    controlName: 'series',
    placeholder: 'Enter Series'
  },

  {
    type: 'text',
    label: 'Status',
    controlName: 'status',
    disabled: true
  },

  {
    type: 'select',
    label: 'Frequency',
    controlName: 'frequency',
    placeholder: '-- Select Frequency --',
    required: true,
    options: []
  },

  {
    type: 'text',
    label: 'Installment Premium',
    controlName: 'installmentPremium',
    placeholder: 'Enter Installment Premium',
    required: true
  },

  {
    type: 'text',
    label: 'Amount',
    controlName: 'amount',
    placeholder: 'Enter Amount',
    required: true
  },

  {
    type: 'select',
    label: 'Channel Type',
    controlName: 'channelType',
    placeholder: '-- Select Channel Type --',
    required: true,
    options: []
  },

  {
    type: 'select',
    label: 'New Fund Allocation',
    controlName: 'fundAllocation',
    options: [
      { label: 'NA', value: 'NA' }
    ]
  },

  {
    type: 'select',
    label: 'Payment Type',
    controlName: 'paymentType',
    placeholder: '-- Select Payment Type --',
    required: true,
    options: []
  },

  {
    type: 'select',
    label: 'Proposer Relationship',
    controlName: 'proposerRelationship',
    placeholder: '-- Select Relationship --',
    options: []
  },

  {
    type: 'text',
    label: 'Claim Approval Received',
    controlName: 'claimApprovalReceived'
  },

  {
    type: 'text',
    label: 'Remarks',
    controlName: 'remarks',
    placeholder: 'Enter Remarks',
    
  }

];

 proposalfields: DynamicField[] = [
    {
    type: 'text',
    label: 'First Name',
    controlName: 'firstName',
    placeholder: 'Enter First Name'
  },
  {
    type: 'text',
    label: 'Middle Name',
    controlName: 'middleName',
    placeholder: 'Enter Middle Name'
  },
  {
    type: 'text',
    label: 'Last Name',
    controlName: 'lastName',
    placeholder: 'Enter Last Name'
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
    placeholder: 'Enter Home Phone No'
  },
  {
    type: 'text',
    label: 'Office Phone No',
    controlName: 'officePhoneNo',
    placeholder: 'Enter Office Phone No'
  },

  {
    type: 'text',
    label: 'Mobile No',
    controlName: 'mobileNo',
    placeholder: 'Enter Mobile No'
  },
  {
    type: 'select',
    label: 'State',
    controlName: 'state',
    placeholder: '-- Select State --',
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
    placeholder: '-- Select City --',
    options: [
      { label: 'Mumbai', value: 'Mumbai' },
      { label: 'Pune', value: 'Pune' },
      { label: 'Nagpur', value: 'Nagpur' }
    ]
  },
  {
    type: 'text',
    label: 'Pin Code',
    controlName: 'pinCode',
    placeholder: 'Enter Pin Code'
  },

  {
    type: 'select',
    label: 'Country',
    controlName: 'country',
    placeholder: '-- Select Country --',
    options: [
      { label: 'India', value: 'India' },
      { label: 'USA', value: 'USA' }
    ]
  }

  ];


  channelfields: DynamicField[] = [
    {
      type: 'select',
      label: 'Channel',
      controlName: 'channel',
      placeholder: '-- Select Channel --',
      required: true,
      options: [
        { label: 'Agent', value: 'Agent' },
        { label: 'Broker', value: 'Broker' },
        { label: 'Direct', value: 'Direct' }
      ]
    },
    {
      type: 'text',
      label: 'IA Code',
      controlName: 'iaCode',
      placeholder: 'Enter IA Code',
      required: true
    },
    {
      type: 'text',
      label: 'IA Name',
      controlName: 'iaName',
      placeholder: 'Enter IA Name',
      required: true
    },
    {
      type: 'text',
      label: 'UM Name',
      controlName: 'umName',
      placeholder: 'Enter UM Name',
      required: true
    },
    {
      type: 'text',
      label: 'Code 1',
      controlName: 'code1',
      placeholder: 'Enter Code 1',
      required: true
    },
    {
      type: 'text',
      label: 'Code 2',
      controlName: 'code2',
      placeholder: 'Enter Code 2'
    },
    {
      type: 'text',
      label: 'Code 3',
      controlName: 'code3',
      placeholder: 'Enter Code 3'
    },
    {
      type: 'text',
      label: 'Worksite No',
      controlName: 'worksiteNo',
      placeholder: 'Enter Worksite Number'
    }
  ];

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      checkDraftForm: this.fb.group({}),
      individualForm: this.fb.group({}),
      proposalForm: this.fb.group({}),
      channelForm: this.fb.group({}),
    });

  }

  get checkDraftForm(): FormGroup {
    return this.mainForm.get('checkDraftForm') as FormGroup;
  }

  get individualForm(): FormGroup {
    return this.mainForm.get('individualForm') as FormGroup;
  }

  get proposalForm(): FormGroup {
    return this.mainForm.get('proposalForm') as FormGroup;
  }

  get channelForm(): FormGroup {
    return this.mainForm.get('channelForm') as FormGroup;
  }

  openedSection = '';
   toggleAccordion(section: string) {

    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }

  }

 showAlertModal = false;

  openAlertModal(): void {
    this.showAlertModal = true;
  }

  closeAlertModal(): void {
    this.showAlertModal = false;
  }

}
