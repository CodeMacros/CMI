import { Component, OnInit } from '@angular/core';
import { DynamicField } from '../../../modal/dynamic-field';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-pslb-payout',
  imports: [DynamicForm],
  templateUrl: './pslb-payout.html',
  styleUrl: './pslb-payout.css',
})
export class PslbPayout implements OnInit {
  payoutForm!: FormGroup;
  payoutFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal No/ Policy Number/ Form Number /LAN',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal No/ Policy Number/ Form Number /LAN',
      required: true,
      col: 'col-6'
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
    {
      type: 'text',
      label: 'Thread ID/SR No',
      controlName: 'srNo',
      placeholder: 'Enter Thread ID/SR No',
      required: true,
    },
    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNumber',
      placeholder: 'Enter Proposal Number',
      required: true,
    },
    {
      type: 'text',
      label: 'Policy Number',
      controlName: 'policyNumber',
      placeholder: 'Enter Policy Number',
      required: true,
    },
    {
      type: 'text',
      label: 'Type of Payout',
      controlName: 'payoutType',
      placeholder: 'Enter Payout Type',
      required: true,
    },
    {
      type: 'text',
      label: 'Documents Closed',
      controlName: 'docClosed',
      placeholder: 'Enter Documents Closed',
      required: true,
    },
    {
      type: 'text',
      label: 'AWB Number',
      controlName: 'awbNumber',
      placeholder: 'Enter AWB Number',
      required: true,
    },
    {
      type: 'date',
      label: 'Date of Approval',
      controlName: 'approvalDate',
      required: true,
    },
    {
      type: 'text',
      label: 'Initiation Branch Name',
      controlName: 'initiationBrName',
      placeholder: 'Enter Initiation Branch Name',
      required: true,
    },
    {
      type: 'text',
      label: 'Initiating User ID',
      controlName: 'initiationUserId',
      placeholder: 'Enter Initiating User ID',
      required: true,
    },
    {
      type: 'text',
      label: 'SR Category',
      controlName: 'srCategory',
      placeholder: 'Enter SR Category',
      required: true,
    },
    {
      type: 'date',
      label: 'Date of SR Closuer',
      controlName: 'srClosuerDate',
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
      type: 'text',
      label: 'Vendor Name',
      controlName: 'vendorName',
      placeholder: 'Enter Vendor Name',
      required: true
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
      type: 'date',
      label: 'Dispatch Date',
      controlName: 'dispatchDate',
      required: true,
    },
    {
      type: 'text',
      label: 'AWB Number',
      controlName: 'awbNumber',
      placeholder: 'Enter AWB Number',
      required: true
    },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.payoutForm = this.fb.group({
      outwardForm: this.fb.group({}),
      receiverForm: this.fb.group({}),
    });
    // this.comSrv.loadStates(this.courierfields)
  }

  get outwardForm(): FormGroup {
    return this.payoutForm.get('outwardForm') as FormGroup;
  }

  get receiverForm(): FormGroup {
    return this.payoutForm.get('receiverForm') as FormGroup;
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
    this.payoutForm.markAllAsTouched();
    console.log(this.payoutForm.getRawValue());
    if (this.payoutForm.invalid) {
      console.log(this.payoutForm.invalid);
      this.scrollToFirstInvalidControl(this.payoutForm);
      return;
    }
    console.log(this.payoutForm.getRawValue());
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
