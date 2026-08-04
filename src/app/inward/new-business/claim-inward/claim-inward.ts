import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-claim-inward',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './claim-inward.html',
  styleUrl: './claim-inward.css',
})
export class ClaimInward {

  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;
   openedSection!: string


   ngOnInit(): void {
    this.mainForm = this.fb.group({
      courierForm: this.fb.group({}),
      documentForm:this.fb.group({})
    });

  }

  courierFeilds: DynamicField[] = [
    {
      type: 'text',
      label: 'Received Date',
      controlName: 'receivedDate',
      placeholder: 'Enter Received Date',
      required: true
    },
    {
      type: 'text',
      label: 'Received By',
      controlName: 'receivedBy',
      placeholder: 'Enter Received By',
      required: true
    },
    {
      type: 'text',
      label: 'Received From',
      controlName: 'receivedFrom',
      placeholder: 'Enter Received From',
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
      controlName: 'AWBNumber',
      placeholder: 'Enter AWB Number',
      required: true
    },
    {
      type: 'text',
      label: 'Remark',
      controlName: 'remark',
      placeholder: 'Enter Remark',
      // required: true
    },
    {
      type: 'text',
      label: 'Document Handover To',
      controlName: 'documentHandoverTo',
      placeholder: 'Enter Document Handover To',
      required: true
    },
  ]

  documentFeilds: DynamicField[] = [
    {
      type: 'text',
      label: 'HBA',
      controlName: 'HBA',
      placeholder: 'Enter HBA',
      // required: true
    },
    {
      type: 'text',
      label: 'Claim ID',
      controlName: 'claimID',
      placeholder: 'Enter Claim ID',
      // required: true
    },
    {
      type: 'text',
      label: 'Request Type',
      controlName: 'requestType',
      placeholder: 'Enter Request Type',
      required: true
    },
    {
      type: 'text',
      label: 'Master Policy No.',
      controlName: 'masterPolicyNo',
      placeholder: 'Enter Master Policy No.',
      // required: true
    },
    {
      type: 'text',
      label: 'Loan/Account No',
      controlName: 'loanAccountNo',
      placeholder: 'Enter Loan/Account No',
      required: true
    },
    {
      type: 'text',
      label: 'Name of PolicyHolder',
      controlName: 'nameofPolicyHolder',
      placeholder: 'Enter Name of PolicyHolder',
      required: true
    },
    {
      type: 'text',
      label: 'Customer ID/ Membership Form No',
      controlName: 'customerIDMembershipFormNo',
      placeholder: 'Enter Customer ID/ Membership Form No',
      required: true
    },
  ]

  get courierForm(): FormGroup {
    return this.mainForm.get('courierForm') as FormGroup;
  }

   get documentForm(): FormGroup {
    return this.mainForm.get('documentForm') as FormGroup;
  }


  toggleAccordion(section: string) {
    if (this.openedSection === section) {
      this.openedSection = '';
    } else {
      this.openedSection = section;
    }
  }


   Submit() {
    if (this.commonService.validateForm(this.mainForm)) {
      console.log(this.mainForm.getRawValue())
    } else {
      console.log('Form is valid', this.commonService.validateForm(this.mainForm));
    }
  }

  Clear(): void {
    this.commonService.clearForm(this.courierForm, this.courierFeilds)
    this.commonService.clearForm(this.documentForm, this.documentFeilds)
  }
}
