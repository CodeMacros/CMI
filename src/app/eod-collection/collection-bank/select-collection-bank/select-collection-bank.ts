import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-select-collection-bank',
  imports: [DynamicForm],
  templateUrl: './select-collection-bank.html',
  styleUrl: './select-collection-bank.css',
})
export class SelectCollectionBank {

  collectionBankForm!: FormGroup


  collectionBankfields: DynamicField[] = [
    {
      type: 'select',
      label: 'Collection Bank',
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
          label: 'Branch',
          value: 'branch'
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
      type: 'text',
      label: 'DEO',
      controlName: 'deo',
      placeholder: 'Enter DEO',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['deo']
      }
    },
    {
      type: 'text',
      label: 'Branch',
      controlName: 'branch',
      placeholder: 'Enter Branch',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['branch']
      }
    },
    {
      type: 'text',
      label: 'All Search',
      controlName: 'allSearch',
      placeholder: 'Enter All Search',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['allSearch']
      }
    }
  ];

  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.collectionBankForm = this.fb.group({});
  }

  get courierForm(): FormGroup {
    return this.collectionBankForm
  }


  collectionBank(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.collectionBankForm);

    if (this.comSrv.validateForm(this.collectionBankForm)) {
      console.log(this.collectionBankForm.getRawValue())
    } else {
      console.log('collectionBankForm is valid', this.comSrv.validateForm(this.collectionBankForm));
      console.log(this.collectionBankForm.value);
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.collectionBankForm, this.collectionBankfields)
  }


  onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'searchType') {
      return;
    }

    this.collectionBankfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      field.visible = field.showWhen.values.includes(event.value);

      const control = this.collectionBankForm.get(field.controlName);

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
