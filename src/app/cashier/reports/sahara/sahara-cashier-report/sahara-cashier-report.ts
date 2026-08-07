import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../../modal/dynamic-field';
import { Common } from '../../../../service/common';
import { DynamicForm } from '../../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-sahara-cashier-report',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './sahara-cashier-report.html',
  styleUrl: './sahara-cashier-report.css',
})
export class SaharaCashierReport {

  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      saharaCashierReportForm: this.fb.group({}),
    });

  }

  saharaCashierReportFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Branch Name',
      controlName: 'branchName',
      placeholder: '--Select Branch--',
      required: true,
      options: [
        // { label: 'Renewal', value: '1' },
        // { label: 'Initial', value: '2' }
      ]
    },
    {
      type: 'text',
      label: 'Date',
      controlName: 'date',
      placeholder: 'DD MM YYYY',
      required: true,
    },
  ]

  get saharaCashierReportForm(): FormGroup {
    return this.mainForm.get('saharaCashierReportForm') as FormGroup;
  }


  Submit() {

  }

}
