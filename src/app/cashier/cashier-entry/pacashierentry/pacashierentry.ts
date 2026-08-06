import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Common } from '../../../service/common';




@Component({
  selector: 'app-pacashierentry',
  imports: [ReactiveFormsModule, DynamicForm,],
  templateUrl: './pacashierentry.html',
  standalone: true,
  styleUrl: './pacashierentry.css',
})
export class Pacashierentry {

  constructor(private val: FormBuilder, private see: Common) { }

  detailForm!: FormGroup;


  cashierEntry: DynamicField[] = [
    {
      type: 'number',
      label: 'PA Number',
      controlName: 'paNumber',
      placeholder: 'Enter PA Number',
      required: true
    },


    {
      type: 'text',
      label: 'PA Name',
      controlName: 'paName',
      placeholder: '',
      disabled: false,
      required: true
    },

    {
      type: 'text',
      label: 'PA State',
      controlName: 'paState',
      placeholder: '',
      disabled: true
    },
    {
      type: 'text',
      label: 'PA City',
      controlName: 'paCity',
      placeholder: '',
      disabled: true
    },
    {
      type: 'select',
      label: 'Cheque Type',
      controlName: 'chequeType',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Local', value: 'local' },
        { label: 'Outstation', value: 'outstation' }
      ]
    },

    {
      type: 'text',
      label: 'Cheq/Draft/Transaction Date',
      controlName: 'chequeDraftTransactionDate',
      placeholder: 'dd MM yyyy',
      required: true
    },

    {
      type: 'text',
      label: 'Cheq/Draft/Transaction Received Date',
      controlName: 'chequeDraftTransactionReceivedDate',
      placeholder: 'dd MM yyyy',
      required: true
    },

    {
      type: 'text',
      label: 'Cheq/Draft No/NEFT RTGS Transaction No',
      controlName: 'chequeDraftNoNEFT',
      placeholder: 'Enter Cheque Draft No',
      required: true
    },

    {
      type: 'select',
      label: 'Pay Mode',
      controlName: 'payMode',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Cheque', value: 'cheque' },
        { label: 'Cash', value: 'cash' },
        { label: 'NEFT', value: 'neft' },
        { label: 'RTGS', value: 'rtgs' }
      ]
    },

    {
      type: 'select',
      label: 'Pay Type',
      controlName: 'payType',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Cheque', value: 'cheque' },
        { label: 'Cash', value: 'cash' },
        { label: 'NEFT', value: 'neft' },
        { label: 'RTGS', value: 'rtgs' }
      ]
    },

    {
      type: 'number',
      label: 'Amount',
      controlName: 'amount',
      placeholder: 'Enter Amount',
      required: true
    },


    {
      type: 'select',
      label: 'Due Month',
      controlName: 'dueMonth',
      placeholder: '-- Select--',
      required: false,
      options: []
    },

    {
      type: 'select',
      label: 'Due Year',
      controlName: 'dueYear',
      placeholder: '-- Select--',
      required: false,
      options: []
    },

    {
      type: 'checkbox',
      label: 'MICR',
      controlName: 'micr',
    },


    {
      type: 'text',
      label: 'MICR Code',
      controlName: 'micrCode',
      placeholder: 'Enter MICR Code'
    },

    {
      type: 'text',
      label: 'Bank Name',
      controlName: 'bankName',
      placeholder: 'Enter Bank Name',
      required: true
    },


    {
      type: 'text',
      label: 'Branch Name',
      controlName: 'branchName',
      placeholder: 'Enter Branch Name',
      required: true
    },


    {
      type: 'select',
      label: 'Instrument Type',
      controlName: 'instrumentType',
      placeholder: '-- Select --',
      options: [
        { label: 'Cheque', value: 'cheque' },
        { label: 'Demand Draft', value: 'dd' }
      ]
    },


    {
      type: 'select',
      label: 'State',
      controlName: 'state',
      placeholder: '-- Select State --',
      required: true,
      options: [
        { label: 'Maharashtra', value: 'MH' },
        { label: 'Gujarat', value: 'GJ' }
      ]
    },


    {
      type: 'select',
      label: 'City',
      controlName: 'city',
      placeholder: '-- Select City --',
      required: true,
      options: [
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Pune', value: 'Pune' }
      ]
    }

  ]



  ngOnInit() {
    this.detailForm = this.val.group({
      cashier: this.val.group({})
    })
  }



  get cashier(): FormGroup {
    return this.detailForm.get('cashier') as FormGroup;
  }





  submit() {
    const isValid = this.see.validateForm(this.detailForm);

    if (isValid) {
      console.log(this.detailForm.getRawValue());
    } else {
      console.log('Form is invalid');
    }
  }

}
