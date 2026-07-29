import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicForm } from '../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../modal/dynamic-field';


@Component({
  selector: 'app-inward',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './inward.html',
  standalone: true,
  styleUrl: './inward.css',
})
export class Inward implements OnInit {

  mainForm!: FormGroup

  courierfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Received Date',
      controlName: 'ReceivedDate',
      placeholder: 'Enter Received Date',
      required: true,
      defaultValue: '29-07-2026',
      disabled: true
    },
    {
      type: 'select',
      label: 'Received By',
      controlName: 'receivedBy',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Inward', value: '1' },
        { label: 'Outward', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'Received From',
      controlName: 'receivedFrom',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Agency 1', value: '1' },
        { label: 'Agency 2', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Courier Agency Name',
      controlName: 'agencyName',
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
      placeholder: '-- Select State --',
      options: [
        { label: 'Maharashtra', value: '1' },
        { label: 'Bihar', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'City',
      controlName: 'city',
      placeholder: '-- Select City --',
      options: [
        { label: 'Mumbai', value: '1' },
        { label: 'Pune', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Remarks',
      controlName: 'remarks',
      placeholder: 'Enter Remarks'
    },
    {
      type: 'select',
      label: 'Document HandOver To',
      controlName: 'handOverTo',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Agency 1', value: '1' },
        { label: 'Agency 2', value: '2' }
      ]
    }
  ];


  proposalfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal No',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal Number',
      required: true
    },
    {
      type: 'select',
      label: 'Product Name',
      controlName: 'productName',
      placeholder: '-- Select Product --',
      required: true,
      options: [
        { label: 'SBI Life - Smart Platina Advantage', value: 'SBI Life - Smart Platina Advantage' }
      ]
    },
    {
      type: 'select',
      label: 'Proposal Category',
      controlName: 'proposalCategory',
      placeholder: '-- Select Category --',
      required: true,
      options: [
        { label: 'Individual', value: 'Individual' }
      ]
    },
    {
      type: 'text',
      label: 'First Name',
      controlName: 'firstName',
      placeholder: 'Enter First Name',
      required: true
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
      placeholder: 'Enter Last Name',
      required: true
    },
    {
      type: 'number',
      label: 'Sum Assured',
      controlName: 'sumAssured',
      placeholder: 'Enter Sum Assured',
      allowOnlyNumbers: true
    },
    {
      type: 'number',
      label: 'Premium Amount',
      controlName: 'premiumAmount',
      placeholder: 'Enter Premium Amount',
      required: true,
      allowOnlyNumbers: true
    },
    {
      type: 'select',
      label: 'Frequency',
      controlName: 'frequency',
      placeholder: '-- Select Frequency --',
      required: true,
      options: [
        { label: 'Yearly', value: 'Yearly' },
        { label: 'Half Yearly', value: 'Half Yearly' },
        { label: 'Quarterly', value: 'Quarterly' },
        { label: 'Monthly', value: 'Monthly' }
      ]
    },
    {
      type: 'select',
      label: 'Are you serving in Defence?',
      controlName: 'defence',
      placeholder: '-- Select --',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },
    {
      type: 'select',
      label: 'Occupation',
      controlName: 'occupation',
      placeholder: '-- Select Occupation --',
      required: true,
      options: []
    },
    {
      type: 'text',
      label: 'Mobile Number',
      controlName: 'mobile',
      required: true,
      placeholder: 'Enter Mobile Number',
      pattern: /^[6-9]\d{9}$/,
      allowOnlyNumbers: true,
      maxLength: 10,
      patternMessage: 'Please enter valid mobile number.'
    },
    {
      type: 'select',
      label: 'Alternate Mode Registration',
      controlName: 'alternateModeRegistration',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },
    {
      type: 'select',
      label: 'Benefit Illustration',
      controlName: 'benefitIllustration',
      placeholder: '-- Select --',
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
      placeholder: '-- Select --',
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
      placeholder: '-- Select --',
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
      placeholder: '-- Select --',
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
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
      ]
    },
    {
      type: 'select',
      label: 'Bank Document Details',
      controlName: 'bankDocument',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
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


  ReceivedDate = '';
  receivedBy = '';
  receivedFrom = '';
  agencyName = '';
  awbNumber = '';
  handOverTo = '';

  // accordion start from here
  openedSection = '';




  constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
    this.mainForm = this.fb.group({
      courierForm: this.fb.group({}),
      proposalForm: this.fb.group({}),
      channelForm: this.fb.group({}),
    });

  }


  get courierForm(): FormGroup {
    return this.mainForm.get('courierForm') as FormGroup;
  }

  get proposalForm(): FormGroup {
    return this.mainForm.get('proposalForm') as FormGroup;
  }

  get channelForm(): FormGroup {
    return this.mainForm.get('channelForm') as FormGroup;
  }




  toggleAccordion(section: string) {

    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }

  }

  // accordion 1 
  proposalNo = '';
  productName = '';
  proposalCategory = '';
  firstName = '';
  middleName = '';
  lastName = '';
  sumAssured = '';
  premiumAmount = '';
  frequency = '';
  defence = '';
  occupation = '';
  mobileNo = '';
  alternateModeRegistration = '';
  benefitIllustration = '';
  needAnalysis = '';
  factaForm = '';
  panCopy = '';
  form60 = '';
  bankDocument = '';

  // accordion 2 
  channel = '';
  iaCode = '';
  iaName = '';
  umName = '';
  code1 = '';
  code2 = '';
  code3 = '';
  worksiteNo = '';

  // accordion 3
  modeOfPayment = '';

  payments = [
    {
      chequeNumber: '465768',
      chequeDate: '06 Mar 2026',
      amount: '90000',
      bankName: 'Bank of Maharashtra',
      paymentType: 'Initial',
      mode: 'Cheque'
    }
  ];

  addPayment() {

    if (!this.modeOfPayment) return;

    this.payments.push({
      chequeNumber: '123456',
      chequeDate: '16 Jul 2026',
      amount: '50000',
      bankName: 'SBI',
      paymentType: 'Renewal',
      mode: this.modeOfPayment
    });

    this.modeOfPayment = '';

  }

  deletePayment(index: number) {
    this.payments.splice(index, 1);
  }


  onSubmit() {
    this.mainForm.markAllAsTouched();
    console.log(this.mainForm.getRawValue());

    if (this.mainForm.invalid) {
      console.log(this.mainForm.invalid);

      return;
    }

    console.log(this.mainForm.getRawValue());

  }

}



