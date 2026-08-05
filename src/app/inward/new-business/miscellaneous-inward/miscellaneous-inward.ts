import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-miscellaneous-inward',
  imports: [DynamicForm],
  templateUrl: './miscellaneous-inward.html',
  styleUrl: './miscellaneous-inward.css',
})
export class MiscellaneousInward {


  mainForm!: FormGroup

  isRenewal = false


  courierfields: DynamicField[] = [
    // =========================
    // Courier Details
    // =========================

    {
      type: 'select',
      label: 'Received From',
      controlName: 'receivedFrom',
      required: true,
      options: [
        { label: 'Agency 1', value: '1' },
        { label: 'Agency 2', value: '2' }
      ]
    },
    {
      type: 'select',
      label: 'Received By',
      controlName: 'receivedBy',
      required: true,
      options: [
        { label: 'Inward', value: '1' },
        { label: 'Outward', value: '2' }
      ]
    },
    {
      type: 'date',
      label: 'Received Date',
      controlName: 'receivedDate',
      required: true,
      defaultValue: '2026-07-31',
      disabled: true
    },
    {
      type: 'text',
      label: 'Courier Agency Name',
      controlName: 'courierAgencyName',
      placeholder: 'Enter Courier Agency Name',
      required: true,
    },
    {
      type: 'text',
      label: 'AWB Number',
      controlName: 'awbNumber',
      placeholder: 'Enter AWB Number',
      required: true
    },
    // {
    //   type: 'select',
    //   label: 'State',
    //   controlName: 'state',
    //   triggerChange: true,
    //   options: [
    //     { label: 'Maharashtra', value: 'MH' },
    //     { label: 'Bihar', value: 'BR' }
    //   ]
    // },
    // {
    //   type: 'select',
    //   label: 'City',
    //   controlName: 'city',
    //   options: [
    //     { label: 'Mumbai', value: 'Mumbai' },
    //     { label: 'Pune', value: 'Pune' }
    //   ]
    // },
    {
      type: 'select',
      label: 'Document HandOver To',
      controlName: 'documentHandOverTo',
      required: true,
      options: [
        { label: 'Agency 1', value: '1' },
        { label: 'Agency 2', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Remarks',
      controlName: 'remarks',
      placeholder: 'Enter Remarks',
    },
    {
      type: 'text',
      label: 'Additional Information',
      controlName: 'additionalInformation',
      placeholder: 'Enter Additional Information',

    },
  ];


  documentField: DynamicField[] = [

    {
      type: 'select',
      label: 'Document Sub Category',
      controlName: 'documentSubCategory',
      required: true,
      options: [
        { label: 'Proposal', value: 'proposal' },
        { label: 'Policy', value: 'policy' },
        { label: 'Membership', value: 'membership' },
        { label: 'Loan', value: 'loan' }
      ]
    },
    {
      type: 'select',
      label: 'Policy No/Proposal No/Membership Form No/Loan Account No',
      controlName: 'documentNumberType',
      required: true,
      col: 'col-6',
      options: [
        { label: 'Policy Number', value: 'policy' },
        { label: 'Proposal Number', value: 'proposal' },
        { label: 'Membership Form Number', value: 'membership' },
        { label: 'Loan Account Number', value: 'loan' }
      ]
    }
  ]

  inwardDocumentField: DynamicField[] = [

    {
      type: 'select',
      label: 'Inwrd Category',
      controlName: 'documentSubCategory',
      triggerChange: true,
      required: true,
      options: [
        { label: 'Inital', value: 'intial' },
        { label: 'Renewal', value: 'renewal' },
        { label: 'Group', value: 'group' },
      ]
    },
    {
      type: 'select',
      label: 'Policy No/Proposal No/Membership Form No/Loan Account No',
      controlName: 'documentNumberType',
      required: true,
      col: 'col-6',
      options: [
        { label: 'Policy Number', value: 'policy' },
        { label: 'Proposal Number', value: 'proposal' },
        { label: 'Membership Form Number', value: 'membership' },
        { label: 'Loan Account Number', value: 'loan' }
      ]
    }
  ];


  openedSection!: string


  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      courierForm: this.fb.group({}),
      documnetForm: this.fb.group({}),
      inwardDocumnetForm: this.fb.group({}),
    });
    this.comSrv.loadStates(this.courierfields)
  }


  get courierForm(): FormGroup {
    return this.mainForm.get('courierForm') as FormGroup;
  }

  get documnetForm(): FormGroup {
    return this.mainForm.get('documnetForm') as FormGroup;
  }
  get inwardDocumnetForm(): FormGroup {
    return this.mainForm.get('inwardDocumnetForm') as FormGroup;
  }

  toggleAccordion(section: string) {
    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }
  }

  onFieldChanged(event: any) {
    console.log(event);
    switch (event.controlName) {
      case 'state':
        this.comSrv.loadCities(event.value, this.courierfields, this.courierForm);
        break;
      case 'documentSubCategory':
        this.onChangeInwardDetails(event)
        console.log('Selected documentSubCategory:', event);
        break;
    }

  }


  onChangeInwardDetails(event: { controlName: string; value: string }) {

    this.isRenewal = event.value === 'renewal';

    const documentForm = this.documnetForm;

    if (!this.documnetForm) {
      return;
    }

    if (this.isRenewal) {

      documentForm.disable({ emitEvent: false });

    } else {

      this.comSrv.clearForm(this.documnetForm, this.documentField)
      documentForm.enable({ emitEvent: false });

    }

  }

  onSubmit() {
    console.log(this.mainForm.value);

    if (this.comSrv.validateForm(this.mainForm)) {
      console.log(this.mainForm.getRawValue())
    } else {
      console.log('Form is valid', this.comSrv.validateForm(this.mainForm));
    }
  }


  clear(): void {
    this.comSrv.clearForm(this.courierForm, this.courierfields)
    this.comSrv.clearForm(this.documnetForm, this.documentField)
    this.comSrv.clearForm(this.inwardDocumnetForm, this.inwardDocumentField)
  }

}

