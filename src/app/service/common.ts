import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { DynamicField } from '../modal/dynamic-field';

@Injectable({
  providedIn: 'root',
})
export class Common {

  validateForm(form: FormGroup): boolean {
    form.markAllAsTouched();

    if (form.invalid) {
      this.scrollToFirstInvalidControl(form);
      return false;
    }

    return true;
  }

  clearForm(form: FormGroup, fields: DynamicField[]): void {
    const resetValue: any = {};

    fields.forEach(field => {
      resetValue[field.controlName] = field.defaultValue ?? '';
      if (field.showWhen) { field.visible = false; }
    });

    form.reset(resetValue);
  }

  scrollToFirstInvalidControl(control: AbstractControl): void {

    if (control instanceof FormGroup) {

      for (const key of Object.keys(control.controls)) {

        const childControl = control.get(key);

        if (childControl?.invalid) {

          if (childControl instanceof FormGroup || childControl instanceof FormArray) {
            this.scrollToFirstInvalidControl(childControl);
            return;
          }

          setTimeout(() => {
            const element = document.getElementById(key);

            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });

              (element as HTMLElement).focus();
            }
          });

          return;
        }
      }
    }
  }

  loadStates(fields: DynamicField[]) {
    // Replace with API call
    const states = [
      { label: 'Maharashtra', value: 'MH' },
      { label: 'Bihar', value: 'BR' },
      { label: 'Gujrat', value: 'GJ' }
    ];

    const field = fields.find(
      x => x.controlName === 'state'
    );

    if (field) {
      field.options = states;


      // Refresh array reference if needed
      fields = [...fields];
    }

  }

  loadCities(stateCode: string, fields: DynamicField[], form: FormGroup) {

    let cities: any = [];

    switch (stateCode) {

      case 'MH':
        cities = [
          { label: 'Mumbai', value: 'Mumbai' },
          { label: 'Pune', value: 'Pune' },
          { label: 'Nagpur', value: 'Nagpur' },
          { label: 'Nashik', value: 'Nashik' }
        ];
        break;

      case 'BR':
        cities = [
          { label: 'Patna', value: 'Patna' },
          { label: 'Gaya', value: 'Gaya' },
          { label: 'Muzaffarpur', value: 'Muzaffarpur' },
          { label: 'Bhagalpur', value: 'Bhagalpur' }
        ];
        break;

      case 'GJ':
        cities = [
          { label: 'Ahmedabad', value: 'Ahmedabad' },
          { label: 'Surat', value: 'Surat' },
          { label: 'Vadodara', value: 'Vadodara' },
          { label: 'Rajkot', value: 'Rajkot' },
          { label: 'Gandhinagar', value: 'Gandhinagar' },
          { label: 'Jamnagar', value: 'Jamnagar' },
          { label: 'Bhavnagar', value: 'Bhavnagar' },
          { label: 'Junagadh', value: 'Junagadh' }
        ];
        break;

      default:
        cities = [];
    }


    const cityField = fields.find(
      x => x.controlName === 'city'
    );

    if (cityField) {
      cityField.options = cities;

      // Clear previously selected city
      form.patchValue({
        city: ''
      });

      // Refresh array reference if needed
      fields = [...fields];
    }
  }

}
