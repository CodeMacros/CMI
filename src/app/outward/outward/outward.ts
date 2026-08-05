import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-outward',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './outward.html',
  styleUrl: './outward.css',
})
export class Outward {

  commonService = inject(Common);
  constructor(private val: FormBuilder) { }

  mainForm!: FormGroup;


 outwardDetailsFeild: DynamicField[] = [
  {
    type: 'select',
    label: 'Outward Category',
    controlName: 'outwardCategory',
    placeholder: '--Select--',
    required: true,
    options: []
  },
  {
    type: 'text',
    label: 'Inward Number',
    controlName: 'inwardNumber',
    placeholder: 'Enter Inward Number'
  },
  {
    type: 'text',
    label: 'Proposal Number',
    controlName: 'proposalNumber',
    placeholder: 'Enter Proposal Number'
  },
  {
    type: 'button',
    label: '',
    controlName: 'search',
    buttonLabel: 'Search',
  },

  {
    type: 'select',
    label: 'Dispatch To',
    controlName: 'dispatchTo',
    placeholder: '--Select--',
    required: true,
    options: []
  },
  {
    type: 'select',
    label: 'Dispatch Destination',
    controlName: 'dispatchDestination',
    placeholder: '--Select--',
    required: true,
    options: []
  },
  {
    type: 'select',
    label: 'Dispatch Mode',
    controlName: 'dispatchMode',
    placeholder: '--Select--',
    required: true,
    options: []
  },
  {
    type: 'text',
    label: 'Dispatch Date',
    controlName: 'dispatchDate',
    placeholder: 'dd MMM yyyy',
    disabled: true,
    defaultValue: '04 Aug 2026',
    required: true
  },

  {
    type: 'text',
    label: 'Courier Agency Name',
    controlName: 'courierAgencyName',
    placeholder: 'Enter Courier Agency Name',
    required: true
  },
  {
    type: 'text',
    label: 'AWB Number',
    controlName: 'awbNumber',
    placeholder: 'Enter AWB Number'
  },
  {
    type: 'select',
    label: 'State',
    controlName: 'state',
    placeholder: '--Select--',
    options: []
  },
  {
    type: 'select',
    label: 'City',
    controlName: 'city',
    placeholder: '--Select--',
    options: []
  },

  {
    type: 'text',
    label: 'Receiver Name',
    controlName: 'receiverName',
    placeholder: 'Enter Receiver Name'
  },
  {
    type: 'text',
    label: 'Location',
    controlName: 'location',
    placeholder: 'Enter Location'
  },
  {
    type: 'text',
    label: 'Designation',
    controlName: 'designation',
    placeholder: 'Enter Designation'
  },
  {
    type: 'text',
    label: 'Pin Code',
    controlName: 'pinCode',
    placeholder: 'Enter Pin Code'
  },

  {
    type: 'select',
    label: 'Reason for Outward',
    controlName: 'reasonForOutward',
    placeholder: '--Select--',
    required: true,
    options: []
  },
  {
    type: 'textarea',
    label: 'Remarks',
    controlName: 'remarks',
    placeholder: 'Enter Remarks',
    col: 'col-6'
  }
];


onButtonClick(controlName: string) {
  switch (controlName) {
    case 'search':
      this.search();
      break;

    case 'submit':
      this.submit();
      break;

    case 'reset':
      this.reset();
      break;
  }
}

search() {
  console.log('Search clicked');
}

submit() {
  console.log('Submit clicked');
}

reset() {
  this.outwardDetailsForm.reset();
}

  ngOnInit() {
    this.mainForm = this.val.group({
      outwardDetailsForm: this.val.group({})
    })
  }



  get outwardDetailsForm(): FormGroup {
    return this.mainForm.get('outwardDetailsForm') as FormGroup;
  }

}
