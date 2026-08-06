import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';


@Component({
  selector: 'app-addpar',
  imports: [DynamicForm],
  templateUrl: './addpar.html',
  styleUrl: './addpar.css',
})
export class Addpar {


  constructor(private data: FormBuilder, private val: Common) { }
  detailForm!: FormGroup;

  addPar: DynamicField[] = [
    {
      type: 'text',
      label: 'PA Name',
      placeholder:'Enter PA Name',
      controlName: 'paName',
      required: true
    },
    {
      type: 'text',
      label: 'Address1',
      placeholder:'Enter Address1',
      controlName: 'address1',
      required: true
    },
    {
      type: 'text',
      label: 'Address2',
      placeholder:'Enter Address2',
      controlName: 'address2',
      required: true
    },
    {
      type: 'text',
      label: 'Address3',
      placeholder:'Enter Address3',
      controlName: 'address3',
      required: true
    },
    {
      type: 'select',
      label: 'State',
      controlName: 'state',
      placeholder: '-- Select--',
      required: true,
      options: [
        { label: 'Maharashtra', value: 'Maharashtra' },
        { label: 'Rajasthan', value: 'Rajasthan' }
      ]
    },
    {
      type: 'select',
      label: 'City',
      controlName: 'city',
      placeholder: '-- Select--',
      required: true,
      options: [
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Pune', value: 'Pune' }
      ]
    },
    {
      type: 'number',
      label: 'Pincode',
      placeholder:'Enter Pincode',
      controlName: 'pincode',
      required: true
    },

    {
      type: 'number',
      label: 'Contact No',
      placeholder:'Enter Contact No',
      controlName: 'contactNo',
      required: true
    },


    {
      type: 'text',
      label: 'Email Id',
      placeholder:'Enter email id',
      controlName: 'emailId',
      required: true
    },


    {
      type: 'select',
      label: 'Servicing Branch',
      controlName: 'servingBranch',
      placeholder: '-- Select--',
      required: false,
      options: []
    },

    {
      type: 'text',
      label: 'Pan No',
      placeholder:'Enter Pan No',
      controlName: 'panNo',
      required: false
    },

    {
      type: 'text',
      label: 'Contact Person',
      placeholder:'Enter Contact Person',
      controlName: 'contactPerson',
      required: true
    }

  ]

  ngOnInit() {
    this.detailForm = this.data.group({
      addPar: this.data.group({})
    })
  }



  get adder(): FormGroup {
    return this.detailForm.get('addPar') as FormGroup;
  }


  submit() {
    const isValid = this.val.validateForm(this.detailForm);

    if (isValid) {
      console.log(this.detailForm.getRawValue());
    } else {
      console.log('Form is invalid');
    }
  }
}
