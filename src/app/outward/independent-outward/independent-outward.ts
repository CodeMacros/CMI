import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { CommonModule } from '@angular/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-independent-outward',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './independent-outward.html',
  styleUrl: './independent-outward.css',
})
export class IndependentOutward implements OnInit {
  outwardForm!: FormGroup;
  courierfields: DynamicField[] = [
    {
      type: 'select',
      label: 'Dispatch To',
      controlName: 'dispatchTo',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Inward', value: '1' },
        { label: 'Outward', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'Dispatch Destination',
      controlName: 'dispatchDesti',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Inward', value: '1' },
        { label: 'Outward', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'Dispatch Mode',
      controlName: 'dispatchMode',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Inward', value: '1' },
        { label: 'Outward', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Dispatch Date',
      controlName: 'dispatchDate',
      placeholder: 'Enter Received Date',
      required: true,
      defaultValue: '30-07-2026',
      disabled: true
    },
    {
      type: 'text',
      label: 'Courier Agency Name',
      controlName: 'agencyName',
      placeholder: 'Enter Courier Agency Name',
      required: true
    },
    {
      type: 'text',
      label: 'AWB Number',
      controlName: 'awbNumber',
      placeholder: 'Enter AWB Number',
      required: true
    },
    {
      type: 'select',
      label: 'State',
      controlName: 'state',
      placeholder: '-- Select State --',
      options: [
        { label: 'Maharashtra', value: '1' },
        { label: 'Bihar', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'City',
      controlName: 'city',
      placeholder: '-- Select City --',
      options: [
        { label: 'Mumbai', value: '1' },
        { label: 'Pune', value: '2' }
      ]
    },
  ];

  receiverfields: DynamicField[] = [
    {
      type: 'text',
      label: 'Receiver Name',
      controlName: 'receiverName',
      placeholder: 'Enter Receiver Name',
      required: true
    },
    {
      type: 'text',
      label: 'Designation',
      controlName: 'designation',
      placeholder: 'Enter Designation',
      required: true
    },
    {
      type: 'text',
      label: 'Location',
      controlName: 'location',
      placeholder: 'Enter Location',
      required: true
    },
    {
      type: 'select',
      label: 'Outward Category',
      controlName: 'outwardCat',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Inward', value: '1' },
        { label: 'Outward', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Outward Remarks',
      controlName: 'outwardRemarks',
      placeholder: 'Enter Outward Remarks',
      required: true
    },
    {
      type: 'text',
      label: 'Remarks',
      controlName: 'Remarks',
      placeholder: 'Enter Remarks',
      required: true
    },
  ];

  openedSection = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.outwardForm = this.fb.group({
      courierForm: this.fb.group({}),
      receiverForm: this.fb.group({}),
    });
  }

  get courierForm(): FormGroup {
    return this.outwardForm.get('courierForm') as FormGroup;
  }

  get receiverForm(): FormGroup {
    return this.outwardForm.get('receiverForm') as FormGroup;
  }

  toggleAccordion(section: string) {
    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }
  }

  onSubmit() {
    this.outwardForm.markAllAsTouched();
    console.log(this.outwardForm.getRawValue());
    if (this.outwardForm.invalid) {
      console.log(this.outwardForm.invalid);
      this.scrollToFirstInvalidControl(this.outwardForm);
      return;
    }
    console.log(this.outwardForm.getRawValue());
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
