import { Component } from '@angular/core';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Common } from '../../service/common';
import { DynamicField } from '../../modal/dynamic-field';

@Component({
  selector: 'app-sahara-policy-update',
  imports: [DynamicForm],
  templateUrl: './sahara-policy-update.html',
  styleUrl: './sahara-policy-update.css',
})
export class SaharaPolicyUpdate {

  saharaPolicyForm!: FormGroup
  saharaPolicyfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Policy NO',
      controlName: 'policyNo',
      required: true,
      placeholder: 'Enter Policy No'
    },

  ];


  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.saharaPolicyForm = this.fb.group({})
  }




  saharaPolicy(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    console.log('form =', this.saharaPolicyForm);

    if (this.comSrv.validateForm(this.saharaPolicyForm)) {
      console.log(this.saharaPolicyForm.getRawValue())
    } else {
      console.log(' saharaPolicyForm is valid', this.comSrv.validateForm(this.saharaPolicyForm));
      console.log(this.saharaPolicyForm.value);
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.saharaPolicyForm, this.saharaPolicyfields)
  }


  onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'searchType') {
      return;
    }

    this.saharaPolicyfields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      field.visible = field.showWhen.values.includes(event.value);

      const control = this.saharaPolicyForm.get(field.controlName);

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
