import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-view-cda-details',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './view-cda-details.html',
  styleUrl: './view-cda-details.css',
})
export class ViewCdaDetails {

  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      viewCDAForm: this.fb.group({}),
    });

  }

  viewCDAFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Proposal No.',
      controlName: 'proposalNo',
      placeholder: 'Enter Proposal Number',
      required: true
    },
    {
      type: 'text',
      label: 'Policy No.',
      controlName: 'policyNo',
      placeholder: 'Enter Policy Number',
      required: true
    },
    {
      type: 'text',
      label: 'Cheque No.',
      controlName: 'chequeNo',
      placeholder: 'Enter Cheque Number',
      required: true
    },
    {
    type: 'button',
    label: '',
    controlName: 'search',
    buttonLabel: 'Search',
  },
  ]

   get viewCDAForm(): FormGroup {
    return this.mainForm.get('viewCDAForm') as FormGroup;
  }

 onButtonClick(controlName: string) {
  switch (controlName) {
    case 'search':
      this.search();
      break;

    // case 'submit':
    //   this.submit();
    //   break;

    // case 'reset':
    //   this.reset();
    //   break;
  }
}

  search(){
     if (!this.commonService.validateForm(this.mainForm)) {
      return;
    }

    const Data = this.mainForm.getRawValue();
    console.log('Fund Transfer Data:', Data);
  }

}
