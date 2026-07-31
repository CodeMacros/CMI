import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-edit-outward',
  imports: [DynamicForm],
  templateUrl: './edit-outward.html',
  styleUrl: './edit-outward.css',
})
export class EditOutward {
  editoutwardForm!: FormGroup


  editoutwardfields: DynamicField[] = [
    {
      type: 'text',
      label: 'outward Number',
      controlName: 'outwardNumber',
      placeholder: 'Enter outward Number',
      required: true,
    },
    {
      type: 'text',
      label: 'Outward Number',
      controlName: 'outwardNumber',
      placeholder: 'Enter Outward Number',
      required: true
    },
    {
      type: 'select',
      label: 'Proposal/Policy/MF/Loan AC No',
      controlName: 'searchType',
      required: true,
      visible: true,
      triggerChange: true,
      options: [
        {
          label: 'Proposal Number',
          value: 'proposal'
        },
        {
          label: 'Policy Number',
          value: 'policy'
        },
        {
          label: 'MF Number',
          value: 'mf'
        },
        {
          label: 'Loan Account Number',
          value: 'loan'
        }
      ]
    },
    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNumber',
      placeholder: 'Enter Proposal Number',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['proposal']
      }
    },
    {
      type: 'text',
      label: 'Policy Number',
      controlName: 'policyNumber',
      placeholder: 'Enter Policy Number',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['policy']
      }
    },
    {
      type: 'text',
      label: 'MF Number',
      controlName: 'mfNumber',
      placeholder: 'Enter MF Number',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['mf']
      }
    },
    {
      type: 'text',
      label: 'Loan Account Number',
      controlName: 'loanAccountNumber',
      placeholder: 'Enter Loan Account Number',
      required: true,
      visible: false,
      showWhen: {
        controlName: 'searchType',
        values: ['loan']
      }
    }
  ];

  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.editoutwardForm = this.fb.group({});
  }

  get editForm(): FormGroup {
    return this.editoutwardForm
  }


  onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'searchType') {
      return;
    }

    this.editoutwardfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      field.visible = field.showWhen.values.includes(event.value);

      const control = this.editForm.get(field.controlName);

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

  editoutward(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.editoutwardForm);

    if (this.comSrv.validateForm(this.editoutwardForm)) {
      console.log(this.editoutwardForm.getRawValue())
    } else {
      console.log('editoutwardForm is valid', this.comSrv.validateForm(this.editoutwardForm));
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.editoutwardForm, this.editoutwardfields)
  }
}
