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
    // {
    //   type: 'text',
    //   label: 'Inward Number',
    //   controlName: 'inwardNumber',
    //   placeholder: 'Enter Inward Number',
    //   required: true
    // },
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

  documentField: DynamicField[] = [

    {
      type: 'select',
      label: 'Inwrd Category',
      controlName: 'documentSubCategory',
      required: true,
      options: [
        { label: 'Inital', value: 'intial' },
        { label: 'Renewal', value: 'renewal' },
        { label: 'Group', value: 'group' },
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
  ];

  proposalDetailsFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal No.',
      controlName: 'proposalNo',
      required: true,
      placeholder: 'Enter Proposal No.'
    },
    {
      type: 'select',
      label: 'Product Name',
      controlName: 'productName',
      options: [
        { label: 'Product 1', value: '1' },
        { label: 'Product 2', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'Proposal Category',
      controlName: 'proposalCategory',
      options: [
        { label: 'Category 1', value: '1' },
        { label: 'Category 2', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'First Name',
      controlName: 'firstName',
      required: true,
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
      required: true,
      placeholder: 'Enter Last Name',
      inputType: 'alpha'
    },
    {
      type: 'number',
      label: 'Sum Assured',
      controlName: 'sumAssured',
      placeholder: 'Enter Sum Assured'
    },
    {
      type: 'number',
      label: 'Premium Amount',
      controlName: 'premiumAmount',
      required: true,
      placeholder: 'Enter Premium Amount'
    },

    {
      type: 'select',
      label: 'Frequency',
      controlName: 'frequency',
      required: true,
      options: [
        { label: 'Monthly', value: 'Monthly' },
        { label: 'Quarterly', value: 'Quarterly' },
        { label: 'Half Yearly', value: 'HalfYearly' },
        { label: 'Yearly', value: 'Yearly' }
      ]
    },
    {
      type: 'select',
      label: 'Are you serving in Defence?',
      controlName: 'servingInDefence',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },
    {
      type: 'select',
      label: 'Occupation',
      controlName: 'occupation',
      required: true,
      options: [
        { label: 'Private', value: 'Private' },
        { label: 'Government', value: 'Government' },
        { label: 'Business', value: 'Business' },
        { label: 'Other', value: 'Other' }
      ]
    },
    {
      type: 'text',
      label: 'Mobile Number',
      controlName: 'mobile',
      required: true,
      placeholder: 'Enter Mobile Number',
      pattern: /^[6-9]\d{9}$/,
      inputType: 'number',
      maxLength: 10,
      patternMessage: 'Please enter valid mobile number.'
    },

    {
      type: 'select',
      label: 'Alternate mode registration',
      controlName: 'alternateModeRegistration',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },
    {
      type: 'select',
      label: 'Benefit Illustration',
      controlName: 'benefitIllustration',
      required: true,
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },
    {
      type: 'select',
      label: 'Need Analysis',
      controlName: 'needAnalysis',
      required: true,
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },
    {
      type: 'select',
      label: 'FACTA Form',
      controlName: 'factaForm',
      required: true,
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },

    {
      type: 'select',
      label: 'PAN Copy',
      controlName: 'panCopy',
      required: true,
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },
    {
      type: 'select',
      label: 'Form 60',
      controlName: 'form60',
      required: true,
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },
    {
      type: 'select',
      label: 'Bank Document Details',
      controlName: 'bankDocumentDetails',
      required: true,
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
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

  openedSection!: string;
  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.discrepancyForm = this.fb.group({
      documnetForm: this.fb.group({}),
      courierForm: this.fb.group({}),
      paymentForm: this.fb.group({}),
      proposalDetailsForm: this.fb.group({}),
      channelDetailsForm: this.fb.group({}),
    });
  }

  get documnetForm(): FormGroup {
    return this.discrepancyForm.get('documnetForm') as FormGroup;
  }

  get courierForm(): FormGroup {
    return this.discrepancyForm.get('courierForm') as FormGroup;
  }

  get paymentForm(): FormGroup {
    return this.discrepancyForm.get('paymentForm') as FormGroup;
  }

  get proposalDetailsForm(): FormGroup {
    return this.discrepancyForm.get('proposalDetailsForm') as FormGroup;
  }

  get channelDetailsForm(): FormGroup {
    return this.discrepancyForm.get('proposalDetailsForm') as FormGroup;
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
    this.comSrv.clearForm(this.paymentForm, this.paymentField)
    this.comSrv.clearForm(this.channelDetailsForm, this.channelDetailsFields)
    this.comSrv.clearForm(this.documnetForm, this.documentField)
    this.comSrv.clearForm(this.proposalDetailsForm, this.proposalDetailsFields)
  }

}
