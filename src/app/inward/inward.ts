import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicForm } from '../shared/dynamic-form/dynamic-form';


@Component({
  selector: 'app-inward',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './inward.html',
  standalone: true,
  styleUrl: './inward.css',
})
export class Inward implements OnInit {

  mainForm!: FormGroup


  ReceivedDate = '';
  receivedBy = '';
  receivedFrom = '';
  agencyName = '';
  awbNumber = '';
  handOverTo = '';

  // accordion start from here
  openedSection = 'proposal';




  constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
    this.mainForm = this.fb.group({
      personal: this.fb.group({}),
    });

  }


  get personalForm(): FormGroup {
    return this.mainForm.get('personal') as FormGroup;
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



