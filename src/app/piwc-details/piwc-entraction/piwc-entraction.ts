import { CommonModule } from '@angular/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';import { Common } from '../../service/common';
import { DynamicField } from '../../modal/dynamic-field';

;

@Component({
  selector: 'app-piwc-entraction',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './piwc-entraction.html',
  styleUrl: './piwc-entraction.css',
})
export class PiwcEntraction {

  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }

  mainForm!: FormGroup;
  tableData: any[] = [];

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      PIWCExtractionForm: this.fb.group({}),

    });
  }

   PIWCExtractionFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Extraction PIWC Details Type',
      controlName: 'SelectedType',
      required: true,
      triggerChange: true,
      options: [
        {
          label: 'Audio PIWC Extraction Details',
          value: 'extractionAudio'
        },
        {
          label: 'Insta PIWC Extraction Details',
          value: 'extractionInsta'
        },
        {
          label: 'Video PIWC Extraction Details',
          value: 'extractionVideo'
        }
      ]
    },
    {
      type: 'text',
      label: 'From Date',
      controlName: 'fromDate',
      placeholder: 'Enter From Date',
      required: true,
      visible: false  
    },
    {
      type: 'text',
      label: 'To Date',
      controlName: 'toDate',
      placeholder: 'Enter To Date',
      required: true,
      visible: false  
    }
  ];



   get PIWCExtractionForm(): FormGroup {
    return this.mainForm.get('PIWCExtractionForm') as FormGroup;
  }


   onSelectChange(event: { controlName: string; value: any }) {

    if (event.controlName !== 'SelectedType') {
      return;
    }

    const fromDateField = this.PIWCExtractionFields.find(
      f => f.controlName === 'fromDate'
    );

    const toDateField = this.PIWCExtractionFields.find(
      f => f.controlName === 'toDate'
    );

    if (fromDateField) {
      fromDateField.visible = !!event.value;
    }

    if (toDateField) {
      toDateField.visible = !!event.value;
    }

    if (!event.value) {
      this.PIWCExtractionForm.get('fromDate')?.reset();
      this.PIWCExtractionForm.get('toDate')?.reset();
    }
  }


   Search() {
    if (!this.commonService.validateForm(this.PIWCExtractionForm)) {
      return;
    }

    const piwcData = this.PIWCExtractionForm.getRawValue();
    console.log('PIWC Data:', piwcData);


    // this.tableData.push(tableRow); //push the new row to the tableData array coming from the form API's
  }


   tableColumns = [    
    { field: 'proposalNo', header: 'Proposal No' },
    { field: 'vdSubmitDate', header: 'VD Submit Date' },
    { field: 'vdCallFlag', header: 'VD Call Flag' },
    { field: 'vdType', header: 'VD Type' },
    { field: 'remark', header: 'Remark' },
    { field: 'vdVerify', header: 'VD Verify' },
  ];


  Export(){
    
  }
}
