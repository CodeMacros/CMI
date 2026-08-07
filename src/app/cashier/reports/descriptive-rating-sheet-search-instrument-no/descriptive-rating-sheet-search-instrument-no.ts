import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-descriptive-rating-sheet-search-instrument-no',  
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './descriptive-rating-sheet-search-instrument-no.html',
  styleUrl: './descriptive-rating-sheet-search-instrument-no.css',
})
export class DescriptiveRatingSheetSearchInstrumentNo {

  
  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      instrumentNumberSearchForm: this.fb.group({}),
    });

  }

  instrumentNumberSearchFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Cheque Number',
      controlName: 'chequeNumber',
      placeholder: 'Select Cheque Number',
      required: true,
    },
  ]

  get instrumentNumberSearchForm(): FormGroup {
    return this.mainForm.get('instrumentNumberSearchForm') as FormGroup;
  }


  Submit() {
    //    if (!this.commonService.validateForm(this.fundTransferForm)) {
    //     return;
    //   }

    //   const fundTransferData = this.fundTransferForm.getRawValue();
    //   console.log('Fund Transfer Data:', fundTransferData);
  }
}
