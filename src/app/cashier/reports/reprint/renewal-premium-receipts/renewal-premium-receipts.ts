import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../../modal/dynamic-field';
import { Common } from '../../../../service/common';
import { DynamicForm } from '../../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-renewal-premium-receipts',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './renewal-premium-receipts.html',
  styleUrl: './renewal-premium-receipts.css',
})
export class RenewalPremiumReceipts {

  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      renewalPreReceiptForm: this.fb.group({}),
    });

  }

  renewalPreReceiptFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Select By',
      controlName: 'selectBy',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Policy Number', value: 'policyNo' },
        { label: 'Date Range', value: 'dateRange' }
      ]
    }, {
      type: 'text',
      label: 'Policy No.',
      controlName: 'policyNo',
      placeholder: 'Enter Proposal No.',
      required: true,
      visible: false
    }
    ,
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
  ]

  get renewalPreReceiptForm(): FormGroup {
    return this.mainForm.get('renewalPreReceiptForm') as FormGroup;
  }


  onFieldChanged(event: any) {

    if (event.controlName !== 'selectBy') return;

    this.updateFields(event.value);
  }

   updateFields(value: string) {

    const policyNo = this.renewalPreReceiptFields.find(x => x.controlName === 'policyNo');
    const fromDate = this.renewalPreReceiptFields.find(x => x.controlName === 'fromDate');
    const toDate = this.renewalPreReceiptFields.find(x => x.controlName === 'toDate');

  
    policyNo!.visible = false;
    fromDate!.visible = false;
    toDate!.visible = false;

    switch (value) {

      case 'policyNo':
        policyNo!.visible = true;
        break;

      // case 'todaysEntries':
      //   policyNo!.visible = true;
      //   break;

      case 'dateRange':
        // policyNo!.visible = true;
        fromDate!.visible = true;
        toDate!.visible = true;
        break;
    }

    // Refresh array for change detection
    this.renewalPreReceiptFields = [...this.renewalPreReceiptFields];
  }

  Submit() {
    //    if (!this.commonService.validateForm(this.fundTransferForm)) {
    //     return;
    //   }

    //   const fundTransferData = this.fundTransferForm.getRawValue();
    //   console.log('Fund Transfer Data:', fundTransferData);
  }

}
