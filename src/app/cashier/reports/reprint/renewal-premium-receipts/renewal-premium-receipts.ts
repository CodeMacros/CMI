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
      type: 'date',
      label: 'From Date',
      controlName: 'fromDate',
      placeholder: 'DD MM YYYY',
      required: true,
      visible: false
    },
    {
      type: 'date',
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
    console.log(event);

    if (event.controlName !== 'selectBy') return;

    this.updateFields(event.value);
  }

  updateFields(value: string) {

    const policyNo = this.renewalPreReceiptFields.find(x => x.controlName === 'policyNo');
    const fromDate = this.renewalPreReceiptFields.find(x => x.controlName === 'fromDate');
    const toDate = this.renewalPreReceiptFields.find(x => x.controlName === 'toDate');

    // Reset visibility
    policyNo!.visible = false;
    fromDate!.visible = false;
    toDate!.visible = false;

    // Disable all controls
    this.renewalPreReceiptForm.get('policyNo')?.disable();
    this.renewalPreReceiptForm.get('fromDate')?.disable();
    this.renewalPreReceiptForm.get('toDate')?.disable();

    switch (value) {
      case 'policyNo':
        policyNo!.visible = true;
        this.renewalPreReceiptForm.get('policyNo')?.enable();
        break;

      case 'dateRange':
        fromDate!.visible = true;
        toDate!.visible = true;
        this.renewalPreReceiptForm.get('fromDate')?.enable();
        this.renewalPreReceiptForm.get('toDate')?.enable();
        break;
    }

    this.renewalPreReceiptFields = [...this.renewalPreReceiptFields];
  }


  Submit(): void {

    if (!this.commonService.validateForm(this.renewalPreReceiptForm)) {
      return;
    }

    const formValue = this.renewalPreReceiptForm.getRawValue();
    let request: any = {
      selectBy: formValue.selectBy
    };

    switch (formValue.selectBy) {

      case 'policyNo':
        request.policyNo = formValue.policyNo;
        break;

      case 'dateRange':
        request.fromDate = formValue.fromDate;
        request.toDate = formValue.toDate;
        break;
    }

    console.log(request);

  }

}
