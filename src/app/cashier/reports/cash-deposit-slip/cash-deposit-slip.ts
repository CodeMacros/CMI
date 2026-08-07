import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-cash-deposit-slip',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './cash-deposit-slip.html',
  styleUrl: './cash-deposit-slip.css',
})
export class CashDepositSlip {

  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      cashDepositSlipForm: this.fb.group({}),
    });


    // this.cashDepositSlipForm.get('status')?.valueChanges.subscribe(value => {
    //   this.updateFields(value);
    // });

  }

  onFieldChanged(event: any) {

  if (event.controlName !== 'status') return;

  this.updateFields(event.value);
}

 updateFields(status: string) {

  const collectionBank = this.cashDepositSlipFields.find(
    x => x.controlName === 'collectionBank'
  );

  const paymentMode = this.cashDepositSlipFields.find(
    x => x.controlName === 'paymentMode'
  );

  if (!collectionBank || !paymentMode) return;

  switch (status) {

    case 'individual':
      collectionBank.visible = true;
      paymentMode.visible = true;
      break;

    case 'group':
    case 'loanRepayment':
      collectionBank.visible = true;
      paymentMode.visible = false;
      break;

    default:
      collectionBank.visible = false;
      paymentMode.visible = false;
  }

  // Force array reference change so Angular updates the UI
  this.cashDepositSlipFields = [...this.cashDepositSlipFields];
}

  cashDepositSlipFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Status',
      controlName: 'status',
      required: true,
      options: [
        { label: 'Individual', value: 'individual' },
        { label: 'Group', value: 'group' },
        { label: 'Loan Repayment', value: 'loanRepayment' }
      ]
    },
    {
      type: 'select',
      label: 'Collection Bank',
      controlName: 'collectionBank',
      placeholder: '-- Select --',
      required: true,
      visible: false,
      options: []
    },
    {
      type: 'select',
      label: 'Payment Mode',
      controlName: 'paymentMode',
      placeholder: '-- Select --',
      required: true,
      visible: false,
      options: []
    }
  ];

  get cashDepositSlipForm(): FormGroup {
    return this.mainForm.get('cashDepositSlipForm') as FormGroup;
  }


  //   onFieldChange(event: any) {
  //     console.log(event);


  //   if (event.controlName !== 'status') return;

  //   const collectionBank = this.cashDepositSlipFields.find(
  //     f => f.controlName === 'collectionBank'
  //   );

  //   const paymentMode = this.cashDepositSlipFields.find(
  //     f => f.controlName === 'paymentMode'
  //   );

  //   collectionBank!.visible = event.value !== '';

  //   paymentMode!.visible = event.value === 'individual';
  // }

  Submit() {
    //    if (!this.commonService.validateForm(this.fundTransferForm)) {
    //     return;
    //   }

    //   const fundTransferData = this.fundTransferForm.getRawValue();
    //   console.log('Fund Transfer Data:', fundTransferData);
  }

}
