import { Component } from '@angular/core';
import { Header } from '../header/header';
import { VerticalMenu } from '../vertical-menu/vertical-menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cashier',
  imports: [ CommonModule, FormsModule],
  templateUrl: './cashier.html',
  styleUrl: './cashier.css',
})
export class Cashier {

  // Editable Fields
  policyNo: string = '';
  proposalNo: string = '';
  premiumPaymentTerm: string = '';
  proposalDate: string = '';
  categoryId: string = '';
  frequency: string = '';
  installmentPremium: number | null = null;
  channelType: string = '';

  // Backend (Read Only) Fields
  plan: string = 'SBI Life - Smart Platina Advantage';
  receivedDate: string = '06 Mar 2026';
  series: string = 'Series 1';
  status: string = 'Pre Proposition';
  newFundAllocation: string = 'NA';

  constructor() { }

  ngOnInit(): void {

    // Example: API response
    // this.loadProposalDetails();

  }

  loadProposalDetails() {

    const response = {
      policyNo: '',
      proposalNo: '4ECA383631',
      plan: 'SBI Life - Smart Platina Advantage',
      premiumPaymentTerm: '7',
      receivedDate: '06 Mar 2026',
      proposalDate: '',
      categoryId: 'individual',
      series: 'Series 1',
      status: 'Pre Proposition',
      frequency: 'Yearly',
      installmentPremium: 90000,
      channelType: 'Agent',
      newFundAllocation: 'NA'
    };

    this.proposalNo = response.proposalNo;
    this.plan = response.plan;
    this.premiumPaymentTerm = response.premiumPaymentTerm;
    this.receivedDate = response.receivedDate;
    this.proposalDate = response.proposalDate;
    this.categoryId = response.categoryId;
    this.series = response.series;
    this.status = response.status;
    this.frequency = response.frequency;
    this.installmentPremium = response.installmentPremium;
    this.channelType = response.channelType;
    this.newFundAllocation = response.newFundAllocation;

  }

  // accordion start from here
  openedSection = 'proposal';
  toggleAccordion(section: string) {

    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }

  }

  // accordion 1
  firstName = '';
  middleName = '';
  lastName = '';
  address1 = '';
  address2 = '';
  address3 = '';
  homePhoneNo = '';
  officePhoneNo = '';
  mobileNo = '';
  state = '';
  city = '';
  pinCode = '';
  country = '';

  // accordion 2 
  agentId: string = '';
  agentName: string = '';
  rmCode: string = '';
  fileNo: string = '';
  referenceNo: string = '';
  worksiteNo: string = '';

  // accordion 3
  modeOfPayment = '';
  instruments = [
    {
      chequeNo: '465768',
      ocrType: '',
      chequeDate: '06 MAR 2026',
      ifscCode: '',
      accountHolder: '',
      accountNo: '',
      payMode: 'Cheque',
      paymentType: 'Initial',
      amount: '90000',
      bank: 'BANK OF MAHARASHTRA'
    }
  ];

  editInstrument(item: any) {
    console.log(item);
  }

  addPayment() {
    if (!this.modeOfPayment) return;
    this.instruments.push({
    chequeNo: '465768',
    ocrType: '',
    chequeDate: '06 MAR 2026',
    ifscCode: '',
    accountHolder: '',
    accountNo: '',
    payMode: this.modeOfPayment,
    paymentType: 'Initial',
    amount: '90000',
    bank: 'BANK OF MAHARASHTRA'
  });

    this.modeOfPayment = '';

  }

  deleteInstrument(index: number) {
    this.instruments.splice(index, 1);
  }

}

