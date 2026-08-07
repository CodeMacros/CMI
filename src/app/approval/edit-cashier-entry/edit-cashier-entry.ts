import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { Common } from '../../service/common';

@Component({
  selector: 'app-edit-cashier-entry',
  imports: [DynamicForm],
  templateUrl: './edit-cashier-entry.html',
  styleUrl: './edit-cashier-entry.css',
})
export class EditCashierEntry {
  editCashierEntryForm!: FormGroup

  editCashierEntryfields: DynamicField[] = [
    {
      type: 'select',
      label: 'Select Type',
      controlName: 'searchType',
      required: true,
      visible: true,
      triggerChange: true,
      options: [
        {
          label: 'Instrument No.',
          value: 'instrumentNo'
        },
        {
          label: 'Proposal No.',
          value: 'proposalNo'
        },
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
      type: 'text',
      label: 'Proposal No',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal No',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['proposalNo']
      }
    },

  ];


  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.editCashierEntryForm = this.fb.group({});
  }

  get courierForm(): FormGroup {
    return this.editCashierEntryForm
  }


  onEditCashierEntry(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.editCashierEntryForm);

    if (this.comSrv.validateForm(this.editCashierEntryForm)) {
      console.log(this.editCashierEntryForm.getRawValue())
    } else {
      console.log('editCashierEntryForm is valid', this.comSrv.validateForm(this.editCashierEntryForm));
      console.log(this.editCashierEntryForm.value);
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.editCashierEntryForm, this.editCashierEntryfields)
  }




  onSelectChange(event: { controlName: string; value: any }) {

    this.editCashierEntryForm
      .get(event.controlName)
      ?.setValue(event.value, { emitEvent: false });

    this.editCashierEntryfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      const parentValue =
        this.editCashierEntryForm
          .get(field.showWhen.controlName)
          ?.value;

      const visible =
        field.showWhen.values.includes(parentValue);

      // Reset only when the field changes
      if (field.visible && !visible) {
        this.editCashierEntryForm
          .get(field.controlName)
          ?.reset('', { emitEvent: false });
      }

      field.visible = visible;

    });

  }
}
