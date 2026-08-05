import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-rpp-cashier',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './rpp-cashier.html',
  styleUrl: './rpp-cashier.css',
})
export class RppCashier {


  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      rppPaymentForm: this.fb.group({}),
    });

  }

  rppPaymentFields: DynamicField[] = [
      {
      type: 'select',
      label: 'Select File',
      controlName: 'selectFile',
      placeholder: '-- Select File --',
      required: true,
      options: [
        { label: 'Single Update', value: 'singleUpdate' },
        { label: 'Bulk Update', value: 'bulkUpdate' }
      ]
    }
  ]

   get rppPaymentForm(): FormGroup {
    return this.mainForm.get('rppPaymentForm') as FormGroup;
  }


  Search(){
     if (!this.commonService.validateForm(this.mainForm)) {
      return;
    }

    const Data = this.mainForm.getRawValue();
    console.log('Fund Transfer Data:', Data);
  }

 
}
