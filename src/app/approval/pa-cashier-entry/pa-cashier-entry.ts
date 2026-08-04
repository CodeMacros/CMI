import { Component } from '@angular/core';
import { DynamicField } from '../../modal/dynamic-field';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Common } from '../../service/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-pa-cashier-entry',
  imports: [DynamicForm],
  templateUrl: './pa-cashier-entry.html',
  styleUrl: './pa-cashier-entry.css',
})
export class PaCashierEntry {

  paCashierEntryForm!: FormGroup

  paCashierEntryfields: DynamicField[] = [
    {
      type: 'select',
      label: 'select search type',
      controlName: 'searchType',
      required: true,
      visible: true,
      triggerChange: true,
      options: [
        {
          label: 'Instrument No',
          value: 'instrumentNo'
        },
        {
          label: 'DEO',
          value: 'deo'
        },
        {
          label: 'All Search',
          value: 'allSearch'
        }
      ]
    },
    {
      type: 'text',
      label: 'Instrument No',
      controlName: 'instrumentNo',
      placeholder: 'Enter Instrument No',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['instrumentNo']
      }
    },
    {
      type: 'select',
      label: 'DEO',
      controlName: 'deo',
      required: true,
      visible: false,
      triggerChange: true,
      options: [{ value: 'deo1', label: 'DEO 1' },
      { value: 'deo2', label: 'DEO 2' }],
      showWhen: {
        controlName: 'searchType',
        values: ['deo']
      }
    },
    {
      type: 'date',
      label: 'From Date',
      controlName: 'fromDate',
      placeholder: 'Enter From Date',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['allSearch']
      }
    },
    {
      type: 'date',
      label: 'To Date',
      controlName: 'toDate',
      placeholder: 'Enter To Date',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['allSearch']
      }
    },
    {
      type: 'text',
      label: 'DEO1',
      controlName: 'deo1',
      placeholder: 'Enter DEO1',
      required: true,
      visible: false,
      showWhen:
      {
        controlName: 'deo',
        values: ['deo1']
      }

    },

    {
      type: 'text',
      label: 'DEO2',
      controlName: 'deo2',
      placeholder: 'Enter DEO2',
      required: true,
      visible: false,
      showWhen:
      {
        controlName: 'deo',
        values: ['deo2']
      }

    }
  ];


  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.paCashierEntryForm = this.fb.group({});
  }

  get courierForm(): FormGroup {
    return this.paCashierEntryForm
  }


  onPaCashierEntry(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.paCashierEntryForm);

    if (this.comSrv.validateForm(this.paCashierEntryForm)) {
      console.log(this.paCashierEntryForm.getRawValue())
    } else {
      console.log('paCashierEntryForm is valid', this.comSrv.validateForm(this.paCashierEntryForm));
      console.log(this.paCashierEntryForm.value);
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.paCashierEntryForm, this.paCashierEntryfields)
  }




  onSelectChange(event: { controlName: string; value: any }) {

    this.paCashierEntryForm
      .get(event.controlName)
      ?.setValue(event.value, { emitEvent: false });

    this.paCashierEntryfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      const parentValue =
        this.paCashierEntryForm
          .get(field.showWhen.controlName)
          ?.value;

      const visible =
        field.showWhen.values.includes(parentValue);

      // Reset only when the field changes
      if (field.visible && !visible) {
        this.paCashierEntryForm
          .get(field.controlName)
          ?.reset('', { emitEvent: false });
      }

      field.visible = visible;

    });

  }

}
