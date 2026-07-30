import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

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

  clearForm(form: FormGroup, fields: any[]): void {
    const resetValue: any = {};

    fields.forEach(field => {
      resetValue[field.controlName] = field.defaultValue ?? '';
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
}
