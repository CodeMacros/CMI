import { Component, OnInit } from '@angular/core';
import { DynamicField } from '../../../modal/dynamic-field';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-renewal',
  imports: [DynamicForm],
  templateUrl: './renewal.html',
  styleUrl: './renewal.css',
})
export class Renewal implements OnInit {
  renewalForm!: FormGroup;
  renewalFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal No/ Policy Number/ Form Number /LAN',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal No/ Policy Number/ Form Number /LAN',
      required: true,
      col: 'col-8'
    },
    {
      type: 'date',
      label: 'From Date',
      controlName: 'fromDate',
      required: true,
    },
    {
      type: 'date',
      label: 'To Date',
      controlName: 'toDate',
      required: true,
    },
    {
      type: 'text',
      label: 'Inward Number',
      controlName: 'inwardNumber',
      placeholder: 'Enter Inward Number',
      required: true,
    },
    {
      type: 'text',
      label: 'Document Category Wise',
      controlName: 'docCatg',
      placeholder: 'Enter Document Category Wise',
      required: true,
    },
  ];

  receiverfields: DynamicField[] = [
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
      defaultValue: '31-07-2026',
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
      type: 'text',
      label: 'Vendor Name',
      controlName: 'vendorName',
      placeholder: 'Enter Vendor Name',
      required: true
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
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.renewalForm = this.fb.group({
      outwardForm: this.fb.group({}),
      receiverForm: this.fb.group({}),
    });
    // this.comSrv.loadStates(this.courierfields)
  }

  get outwardForm(): FormGroup {
    return this.renewalForm.get('outwardForm') as FormGroup;
  }

  get receiverForm(): FormGroup {
    return this.renewalForm.get('receiverForm') as FormGroup;
  }

  openedSection = 'proposal';

  toggleAccordion(section: string) {
    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }
  }

  onSubmit() {
    this.renewalForm.markAllAsTouched();
    console.log(this.renewalForm.getRawValue());
    if (this.renewalForm.invalid) {
      console.log(this.renewalForm.invalid);
      this.scrollToFirstInvalidControl(this.renewalForm);
      return;
    }
    console.log(this.renewalForm.getRawValue());
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
