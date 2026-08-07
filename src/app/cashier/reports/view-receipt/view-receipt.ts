import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-view-receipt',
 imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './view-receipt.html',
  styleUrl: './view-receipt.css',
})
export class ViewReceipt {

   commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      viewReceiptForm: this.fb.group({}),
    });

  }

  viewReceiptFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Select BY',
      controlName: 'selectBy',
      // placeholder: 'Select Proposal Number',
      required: true,
      options: [
        { label: 'Todays Entries', value: 'todaysEntries' },
        { label: 'Entries Between Two Dates', value: 'betweenTwoDate' }
      ]
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
  ]

  get viewReceiptForm(): FormGroup {
    return this.mainForm.get('viewReceiptForm') as FormGroup;
  }


  onFieldChanged(event: any) {

    if (event.controlName !== 'selectBy') return;

    this.updateFields(event.value);
  }

   updateFields(value: string) {
    const from = this.viewReceiptFields.find(f => f.controlName === 'fromDate');
    const to = this.viewReceiptFields.find(f => f.controlName === 'toDate');

    from!.visible = false;
    to!.visible = false;

    switch (value) {

      case 'betweenTwoDate':
        from!.visible = true;
        to!.visible = true;
        break;
    }

    this.viewReceiptFields = [...this.viewReceiptFields];
  }
  Submit() {
    //    if (!this.commonService.validateForm(this.fundTransferForm)) {
    //     return;
    //   }

    //   const fundTransferData = this.fundTransferForm.getRawValue();
    //   console.log('Fund Transfer Data:', fundTransferData);
  }

}
