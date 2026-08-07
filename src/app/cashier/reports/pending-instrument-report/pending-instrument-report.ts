import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-pending-instrument-report', 
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './pending-instrument-report.html',
  styleUrl: './pending-instrument-report.css',
})
export class PendingInstrumentReport {
   commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      pendingInstrumentForm: this.fb.group({}),
    });

  }

  pendingInstrumentFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Branch',
      controlName: 'branch',
      placeholder: '-- Select -- ',
      required: true,
      options: [
        
      ]
    },
    {
      type: 'select',
      label: 'Reports',
      controlName: 'reports',
      placeholder: '-- Select -- ',
      required: true,
      options: [
        
      ]
    },
  ]

  get pendingInstrumentForm(): FormGroup {
    return this.mainForm.get('pendingInstrumentForm') as FormGroup;
  }


  Submit() {
  
  }

}
