import { Component } from '@angular/core';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../shared/dynamictable/dynamictable';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';

@Component({
  selector: 'app-mark-unmark',
  imports: [DynamicForm],
  templateUrl: './mark-unmark.html',
  styleUrl: './mark-unmark.css',
})
export class MarkUnmark {
  mainForm!: FormGroup


  markUnmarkfields: DynamicField[] = [
    {
      type: 'select',
      label: 'Mark/Unmark Non Lodegment Category',
      controlName: 'lodegmentCategory',
      // required: true,
      options: [
        {
          label: 'Individual',
          value: 'individual'
        },
      ]
    },
    {
      type: 'select',
      label: 'Lodegment Type',
      controlName: 'lodegmentType',
      // required: true,
      options: [
        {
          label: 'Makr Non-Lodegment',
          value: 'makr'
        },
        {
          label: 'Unmark Non-Lodegment',
          value: 'unmark'
        },
      ]
    }
  ];


  markUnmarkFilterfields: DynamicField[] = [
    {
      type: 'text',
      label: 'DEO',
      controlName: 'deo',
      placeholder: '',
      // required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Date Range',
      controlName: 'dateRange',
      placeholder: '',
      // required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Instrument No',
      controlName: 'instrumentNo',
      placeholder: '',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Product Name',
      controlName: 'productName',
      placeholder: '',
      required: true,
      disabled: true
    },
  ];

  markUnmarkSearchfields: DynamicField[] = [
    {
      type: 'select',
      label: 'DEO',
      controlName: 'deo',
      // required: true,
      options: [
        {
          label: 'Individual',
          value: 'individual'
        },
      ]
    },
    {
      type: 'select',
      label: 'Product',
      controlName: 'product',
      col: 'col-6',
      // required: true,
      options: [
        {
          label: 'Individual',
          value: 'individual'
        },
      ]
    },
    {
      type: 'text',
      label: 'Instrument No',
      controlName: 'instrumentNo',
      placeholder: 'Enter Instrument No',
      // required: true,
    },
    {
      type: 'date',
      label: 'From Date',
      controlName: 'formDate',
      placeholder: '',
      // required: true,
    },
    {
      type: 'date',
      label: 'To Date',
      controlName: 'toDate',
      placeholder: '',
      // required: true,
    },

  ];

  tableColumns = [
    { field: 'policyNo', header: 'Select' },
    { field: 'policyNo', header: 'Branch Code' },
    { field: 'proposalNo', header: 'Bank Name' },
    { field: 'plan', header: 'Status' },
    { field: 'proposalDate', header: 'Active/Deactive Date' },
  ];


  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      markUnmarkForm: this.fb.group({}),
      markUnmarkFilterForm: this.fb.group({}),
      markUnmarkSearchForm: this.fb.group({})
    });
  }

  get markUnmarkForm(): FormGroup {
    return this.mainForm.get('markUnmarkForm') as FormGroup
  }

  get markUnmarkFilterForm(): FormGroup {
    return this.mainForm.get('markUnmarkFilterForm') as FormGroup
  }

  get markUnmarkSearchForm(): FormGroup {
    return this.mainForm.get('markUnmarkSearchForm') as FormGroup
  }


  markUnmark(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.markUnmarkForm);

    if (this.comSrv.validateForm(this.markUnmarkForm)) {
      console.log(this.markUnmarkForm.getRawValue())
    } else {
      console.log(' markUnmarkForm is valid', this.comSrv.validateForm(this.markUnmarkForm));
      console.log(this.markUnmarkForm.value);
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.markUnmarkForm, this.markUnmarkfields)
    this.comSrv.clearForm(this.markUnmarkFilterForm, this.markUnmarkFilterfields)
    this.comSrv.clearForm(this.markUnmarkSearchForm, this.markUnmarkSearchfields)
  }


  onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'searchType') {
      return;
    }

    this.markUnmarkfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      field.visible = field.showWhen.values.includes(event.value);

      const control = this.markUnmarkForm.get(field.controlName);

      if (!control) {
        return;
      }

      if (field.visible) {
        control.enable();
      } else {
        control.reset();
        control.disable();
      }

    });

  }
}
