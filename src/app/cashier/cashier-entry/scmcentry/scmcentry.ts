import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';
import { Dynamictable } from '../../../shared/dynamictable/dynamictable';
import { TableColumn } from '../../../modal/dynamicTable-field';
import { Common } from '../../../service/common';

declare var bootstrap: any;

@Component({
  selector: 'app-scmcentry',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm, Dynamictable],
  templateUrl: './scmcentry.html',
  styleUrl: './scmcentry.css',
})
export class Scmcentry {
  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }


  mainForm!: FormGroup;
  tableData: any[] = [];

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
      defaultValue: '31-07-2026',
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
      placeholder: 'Enter Bank Account No',
      required: true
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
      required: true,
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' }
      ]
    },

    {
      type: 'text',
      label: 'MICR Code',
      controlName: 'micrCode',
      placeholder: 'Enter MICR Code',
      required: true
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
      required: true,
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
      options: [{ label: 'NA', value: 'NA' }]
    },

    {
      type: 'text',
      label: 'Received Date',
      controlName: 'receivedDate',
      placeholder: 'receivedDate',
      required: true
    },

    {
      type: 'text',
      label: 'Proposal Date',
      controlName: 'proposalDate',
      placeholder: 'proposalDate',
      required: true
    },

    {
      type: 'select',
      label: 'Category ID',
      controlName: 'categoryId',
      placeholder: '-- Select Category --',
      required: true,
      options: [{ label: 'NA', value: 'NA' }]
    },

    {
      type: 'text',
      label: 'Series',
      controlName: 'series',
      placeholder: 'Enter Series',
      required: true
    },

    {
      type: 'text',
      label: 'Status',
      controlName: 'status',
      placeholder: 'Status',
      disabled: true,

    },

    {
      type: 'select',
      label: 'Frequency',
      controlName: 'frequency',
      placeholder: '-- Select Frequency --',
      required: true,
      options: [{ label: 'NA', value: 'NA' }]
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
      options: [
        { label: 'NA', value: 'NA' }
      ]
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
      options: [{ label: 'NA', value: 'NA' }]
    },

    {
      type: 'select',
      label: 'Proposer Relationship',
      controlName: 'proposerRelationship',
      placeholder: '-- Select Relationship --',
      options: [
        { label: 'NA', value: 'NA' }
      ],
      required: true
    },

    {
      type: 'text',
      label: 'Claim Approval Received',
      controlName: 'claimApprovalReceived',
      placeholder: 'Enter claimApprovalReceived',
      required: true
    },

    {
      type: 'textarea',
      label: 'Remarks',
      controlName: 'remarks',
      placeholder: 'Enter Remarks',
      col: "col-6"

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

  onAddClick(): void {
    if (this.commonService.validateForm(this.checkDraftForm)) {
      this.openProposalModal();
    }

  }


  openProposalModal(): void {

    const modal = document.getElementById('proposalModal');

    if (modal) {
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
    }
  }


  tableColumns = [
    { field: 'policyNo', header: 'Policy No' },
    { field: 'proposalNo', header: 'Proposal No' },
    { field: 'plan', header: 'Plan' },
    { field: 'proposalDate', header: 'Proposal Date' },
    { field: 'receivedDate', header: 'Received Date' },
    { field: 'premium', header: 'Premium' },
    { field: 'amount', header: 'Amount' },
    { field: 'channelType', header: 'Channel Type' },
    { field: 'option', header: 'Option' },
    // { field: 'option', header: 'Option', type: 'button', buttonLabel: 'Delete' }

  ];

  onAddProposalClick(): void {

    const isIndividualValid = this.commonService.validateForm(this.individualForm);
    const isProposalValid = this.commonService.validateForm(this.proposalForm);
    const isChannelValid = this.commonService.validateForm(this.channelForm);

    if (!isIndividualValid || !isProposalValid || !isChannelValid) {
      return;
    }

    const individual = this.individualForm.getRawValue();
    const proposal = this.proposalForm.getRawValue();
    const channel = this.channelForm.getRawValue();

    const tableRow = {
      policyNo: individual.policyNo,
      proposalNo: individual.proposalNo,
      plan: individual.plan,
      proposalDate: individual.proposalDate,
      receivedDate: individual.receivedDate,
      premium: individual.installmentPremium,
      amount: individual.amount,
      channelType: individual.channelType,
      option: '',

      formData: { individual, proposal, channel }
    };

    this.tableData.push(tableRow);

    this.closeProposalModal();
    this.commonService.clearForm(this.individualForm, this.individualDetails);
    this.commonService.clearForm(this.proposalForm, this.proposalfields)
    this.commonService.clearForm(this.channelForm, this.channelfields)

    // console.log(this.tableData);

  }



  closeProposalModal(): void {
    const modal = document.getElementById('proposalModal');
    if (modal) {
      const bsModal = bootstrap.Modal.getInstance(modal);

      if (bsModal) {
        bsModal.hide();
      }
    }
  }

  Submit(): void {

    if (!this.commonService.validateForm(this.checkDraftForm)) {
      return;
    }

    if (this.tableData.length === 0) {
      alert('Please add at least one proposal.');
      return;
    }

    const payload = {
      chequeDetails: this.checkDraftForm.getRawValue(),
      proposals: this.tableData.map(row => row.formData)
    };

    console.log(payload);

  }
  Clear() {
    this.commonService.clearForm(this.checkDraftForm, this.checkDraftfields);
    this.tableData = [];
  }

}
