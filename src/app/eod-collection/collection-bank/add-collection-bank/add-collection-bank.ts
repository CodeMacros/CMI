import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Common } from '../../../service/common';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-add-collection-bank',
  imports: [DynamicForm],
  templateUrl: './add-collection-bank.html',
  styleUrl: './add-collection-bank.css',
})
export class AddCollectionBank {

  addCollectionBankForm!: FormGroup


  addCollectionBankfields: DynamicField[] = [
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


  // tableColumns = [
  //   { field: 'policyNo', header: 'Branch Code' },
  //   { field: 'proposalNo', header: 'Bank Name' },
  //   { field: 'plan', header: 'Status' },
  //   { field: 'proposalDate', header: 'Active/Deactive Date' },
  // ];

  tableColumns = [
    { field: 'proposalNo', header: 'Bank Name' },
    { field: 'proposalDate', header: 'Active Date' },
  ];
  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.addCollectionBankForm = this.fb.group({});
  }


  addCollectionBank(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.addCollectionBankForm);

    if (this.comSrv.validateForm(this.addCollectionBankForm)) {
      console.log(this.addCollectionBankForm.getRawValue())
    } else {
      console.log(' addCollectionBankForm is valid', this.comSrv.validateForm(this.addCollectionBankForm));
      console.log(this.addCollectionBankForm.value);
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.addCollectionBankForm, this.addCollectionBankfields)
  }


  onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'searchType') {
      return;
    }

    this.addCollectionBankfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      field.visible = field.showWhen.values.includes(event.value);

      const control = this.addCollectionBankForm.get(field.controlName);

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
