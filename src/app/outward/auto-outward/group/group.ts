import { Component, OnInit } from '@angular/core';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';

@Component({
  selector: 'app-group',
  imports: [DynamicForm],
  templateUrl: './group.html',
  styleUrl: './group.css',
})
export class Group implements OnInit {
  groupForm!: FormGroup;
  groupFields: DynamicField[] = [
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
      label: 'Receiver Name',
      controlName: 'receiverName',
      placeholder: 'Enter Receiver Name',
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
      type: 'text',
      label: 'Designation',
      controlName: 'designation',
      placeholder: 'Enter Designation',
      required: true
    },
    {
      type: 'text',
      label: 'Pin Code',
      controlName: 'pinCode',
      placeholder: 'Enter Pin Code',
      required: true
    },
    {
      type: 'text',
      label: 'Reason for Outward',
      controlName: 'outwardReason',
      placeholder: 'Enter Outward Reason',
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.groupForm = this.fb.group({
      outwardForm: this.fb.group({}),
      receiverForm: this.fb.group({}),
    });
    // this.comSrv.loadStates(this.courierfields)
  }

  get outwardForm(): FormGroup {
    return this.groupForm.get('outwardForm') as FormGroup;
  }

  get receiverForm(): FormGroup {
    return this.groupForm.get('receiverForm') as FormGroup;
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
    this.groupForm.markAllAsTouched();
    console.log(this.groupForm.getRawValue());
    if (this.groupForm.invalid) {
      console.log(this.groupForm.invalid);
      this.scrollToFirstInvalidControl(this.groupForm);
      return;
    }
    console.log(this.groupForm.getRawValue());
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
