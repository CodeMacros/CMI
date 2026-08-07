import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../../modal/dynamic-field';
import { Common } from '../../../../service/common';
import { DynamicForm } from '../../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-proposal-deposit-receipts',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './proposal-deposit-receipts.html',
  styleUrl: './proposal-deposit-receipts.css',
})
export class ProposalDepositReceipts {


  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      proposalDepositReceiptForm: this.fb.group({}),
    });

  }

  proposalDepositReceiptFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Select By',
      controlName: 'selectBy',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Receipt No. Search', value: 'receiptNoSearch' },
        { label: "Today's Entries", value: 'todaysEntries' },
        { label: 'Entries Between Two Dates', value: 'entriesBetweenDates' }
      ]
    },
    {
      type: 'text',
      label: 'Receipt No.',
      controlName: 'receiptNo',
      placeholder: 'Enter Receipt No.',
      required: true,
      visible: false
    },
    {
      type: 'select',
      label: 'Select Branch',
      controlName: 'selectBranch',
      placeholder: '-- Select Branch --',
      required: true,
      visible: false,
      options: []
    },
    {
      type: 'text',
      label: 'From Date',
      controlName: 'fromDate',
      placeholder: 'DD MM YYYY',
      required: true,
      visible: false
    },
    {
      type: 'text',
      label: 'To Date',
      controlName: 'toDate',
      placeholder: 'DD MM YYYY',
      required: true,
      visible: false
    }
  ];

  get proposalDepositReceiptForm(): FormGroup {
    return this.mainForm.get('proposalDepositReceiptForm') as FormGroup;
  }


  onFieldChanged(event: any) {

    if (event.controlName !== 'selectBy') return;

    this.updateFields(event.value);
  }


  updateFields(value: string) {

    const receiptNo = this.proposalDepositReceiptFields.find(x => x.controlName === 'receiptNo');
    const branch = this.proposalDepositReceiptFields.find(x => x.controlName === 'selectBranch');
    const fromDate = this.proposalDepositReceiptFields.find(x => x.controlName === 'fromDate');
    const toDate = this.proposalDepositReceiptFields.find(x => x.controlName === 'toDate');

    receiptNo!.visible = false;
    branch!.visible = false;
    fromDate!.visible = false;
    toDate!.visible = false;

    switch (value) {

      case 'receiptNoSearch':
        receiptNo!.visible = true;
        branch!.visible = true;
        break;

      case 'todaysEntries':
        branch!.visible = true;
        break;

      case 'entriesBetweenDates':
        branch!.visible = true;
        fromDate!.visible = true;
        toDate!.visible = true;
        break;
    }

    // Refresh array for change detection
    this.proposalDepositReceiptFields = [...this.proposalDepositReceiptFields];
  }



  Submit() {
    
  }


}
