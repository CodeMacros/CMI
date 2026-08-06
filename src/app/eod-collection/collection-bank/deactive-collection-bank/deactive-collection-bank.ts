import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-deactive-collection-bank',
  imports: [DynamicForm],
  templateUrl: './deactive-collection-bank.html',
  styleUrl: './deactive-collection-bank.css',
})
export class DeactiveCollectionBank {

  deActiveCollectionBankForm!: FormGroup


  deActiveCollectionBankfields: DynamicField[] = [
    {
      type: 'select',
      label: 'Select Branch',
      controlName: 'searchType',
      required: true,
      // visible: true,
      // triggerChange: true,
      options: [
        {
          label: 'Mumbai',
          value: 'mumbai'
        },
        {
          label: 'Pune',
          value: 'pune'
        },
        {
          label: 'Delhi ',
          value: 'delhi '
        },
        {
          label: 'Bengaluru ',
          value: 'bengaluru'
        }
      ]
    },
    // {
    //   type: 'text',
    //   label: 'Instrument No',
    //   controlName: 'instrumentNo',
    //   placeholder: 'Enter Instrument No',
    //   required: true,
    //   visible: false,
    //   showWhen: {
    //     controlName: 'searchType',
    //     values: ['instrumentNo']
    //   }
    // },
    // {
    //   type: 'text',
    //   label: 'DEO',
    //   controlName: 'deo',
    //   placeholder: 'Enter DEO',
    //   required: true,
    //   visible: false,
    //   showWhen: {
    //     controlName: 'searchType',
    //     values: ['deo']
    //   }
    // },
    // {
    //   type: 'text',
    //   label: 'Branch',
    //   controlName: 'branch',
    //   placeholder: 'Enter Branch',
    //   required: true,
    //   visible: false,
    //   showWhen: {
    //     controlName: 'searchType',
    //     values: ['branch']
    //   }
    // },
    // {
    //   type: 'text',
    //   label: 'All Search',
    //   controlName: 'allSearch',
    //   placeholder: 'Enter All Search',
    //   required: true,
    //   visible: false,
    //   showWhen: {
    //     controlName: 'searchType',
    //     values: ['allSearch']
    //   }
    // }
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
    this.deActiveCollectionBankForm = this.fb.group({});
  }




  deActiveCollectionBank(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.deActiveCollectionBankForm);

    if (this.comSrv.validateForm(this.deActiveCollectionBankForm)) {
      console.log(this.deActiveCollectionBankForm.getRawValue())
    } else {
      console.log(' deActiveCollectionBankForm is valid', this.comSrv.validateForm(this.deActiveCollectionBankForm));
      console.log(this.deActiveCollectionBankForm.value);
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.deActiveCollectionBankForm, this.deActiveCollectionBankfields)
  }


  onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'searchType') {
      return;
    }

    this.deActiveCollectionBankfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      field.visible = field.showWhen.values.includes(event.value);

      const control = this.deActiveCollectionBankForm.get(field.controlName);

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
