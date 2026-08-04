import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';
import { Dynamictable } from '../../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-loan-repayment',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm, Dynamictable],
  templateUrl: './loan-repayment.html',
  styleUrl: './loan-repayment.css',
})
export class LoanRepayment {

  mainForm!: FormGroup;

  openedSection = '';
  tableData: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      policyForm: this.fb.group({}),
      proposerForm: this.fb.group({}),
      loanForm: this.fb.group({}),
      CustomerBankForm: this.fb.group({}),

    });
  }


  policyFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Policy Number',
      controlName: 'policyNo',
      placeholder: 'Enter Policy Number',
      required: true
    },
    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal Number',
      required: true
    },
    {
      type: 'select',
      label: 'Plan',
      controlName: 'plan',
      placeholder: '-- Select --',
      required: true,
      disabled: true,
      col: 'col-6',
      options: [
        { label: 'Plan 1', value: '1' },
        { label: 'Plan 2', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Received Date',
      controlName: 'receivedDate',
      placeholder: 'Enter Received Date',
      required: true,
      defaultValue: '31-07-2026',
      disabled: true
    },
    {
      type: 'text',
      label: 'Proposal Date',
      controlName: 'proposalDate',
      placeholder: 'Enter Proposal Date',
      required: true,
      defaultValue: '04-08-2026',
      disabled: true
    },
    {
      type: 'text',
      label: 'Series',
      controlName: 'series',
      placeholder: 'Enter series',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Status',
      controlName: 'status',
      placeholder: 'Enter Status',
      required: true,
      disabled: true
    },
    {
      type: 'select',
      label: 'Frequency',
      controlName: 'Frequency',
      placeholder: '-- Select State --',
      options: [
        { label: 'Frequency 1', value: '1' },
        { label: 'Frequency 2', value: '2' }
      ],
      disabled: true,
      required: true,
    },
    {
      type: 'select',
      label: 'Installment Premium',
      controlName: 'installmentPremium',
      placeholder: 'Enter Installment Premium',
      required: true,
      disabled: true

    },
    {
      type: 'select',
      label: 'Channel Type',
      controlName: 'channelType',
      placeholder: '-- Select City --',
      options: [
        { label: 'channel 1', value: '1' },
        { label: 'channel 2', value: '2' }
      ],
      required: true,
      disabled: true
    },
    {
      type: 'select',
      label: 'New Fund Allocation',
      controlName: 'newFundAllocation',
      placeholder: '-- Select City --',
      options: [
        { label: 'fund 1', value: '1' },
        { label: 'fund 2', value: '2' }
      ],
      required: true,
      disabled: true
    }
  ];

  proposerFields: DynamicField[] = [
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

    // {
    //   type: 'text',
    //   label: 'Mobile No',
    //   controlName: 'mobileNo',
    //   placeholder: 'Enter Mobile No'
    // },
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

  loanFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Select Loan',
      controlName: 'selectLoan',
      placeholder: '-- Select Loan --',
      options: [
        { label: 'Interest Payment', value: 'interestPayment' },
        { label: 'Part Payment of Loan', value: 'partPaymentofLoan' },
        { label: 'Full Payment of Loan', value: 'fullPaymentofLoan' }
      ]
    },

  ];


  CustomerBankFeilds: DynamicField[] = [
    {
      type: 'select',
      label: 'Select Code',
      controlName: 'selectCode',
      placeholder: '-- Select Code --',
      options: [
        { label: 'MICR', value: 'MICR' },
        { label: 'IFSC', value: 'IFSC' },

      ]
    },
    {
      type: 'text',
      label: 'MICR',
      controlName: 'MICR',
      placeholder: 'Enter MICR',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'IFSC',
      controlName: 'IFSC',
      placeholder: 'Enter IFSC',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Bank Account No',
      controlName: 'bankAccountNo',
      placeholder: 'Enter Bank Account No',
      required: true,
    },
    {
      type: 'text',
      label: 'Bank Name',
      controlName: 'bankName',
      placeholder: 'Enter Bank Name',
      disabled: true,
      required: true
    },
    {
      type: 'text',
      label: 'Branch Name',
      controlName: 'branchName',
      placeholder: 'Enter Branch Name',
      disabled: true,
      required: true
    },

  ];

  get policyForm(): FormGroup {
    return this.mainForm.get('policyForm') as FormGroup;
  }

  get proposerForm(): FormGroup {
    return this.mainForm.get('proposerForm') as FormGroup;
  }

  get loanForm(): FormGroup {
    return this.mainForm.get('loanForm') as FormGroup;
  }

  get CustomerBankForm(): FormGroup {
    return this.mainForm.get('CustomerBankForm') as FormGroup;
  }


  toggleAccordion(section: string) {
    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.CustomerBankForm.get('selectCode')?.valueChanges.subscribe(value => {
        this.toggleBankFields(value);
      });
    });
  }

  toggleBankFields(value: string) {

    const micr = this.CustomerBankForm.get('MICR');
    const ifsc = this.CustomerBankForm.get('IFSC');

    if (value === 'MICR') {
      micr?.enable();
      ifsc?.disable();
      ifsc?.reset();
    }
    else if (value === 'IFSC') {
      ifsc?.enable();
      micr?.disable();
      micr?.reset();
    }
    else {
      micr?.disable();
      ifsc?.disable();
    }
  }



  tableColumns = [
    { field: 'CheckDraftNo', header: 'Check/Draft No' },
    { field: 'CheckDraftDate', header: 'Check/Draft Date' },
    { field: 'PayMode', header: 'Pay Mode' },
    { field: 'PaymentType', header: 'Payment Type' },
    { field: 'Amount', header: 'Amount' },
    { field: 'Bank', header: 'Bank' },
    { field: 'Delete', header: 'Option', type: 'button', buttonLabel: 'Delete' }

  ];
}
