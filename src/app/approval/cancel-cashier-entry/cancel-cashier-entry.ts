import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';
import { CommonModule } from '@angular/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';

@Component({
  selector: 'app-cancel-cashier-entry',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './cancel-cashier-entry.html',
  styleUrl: './cancel-cashier-entry.css',
})
export class CancelCashierEntry {



  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      cancelCashierForm: this.fb.group({}),
    });

  }

  cancelCashierFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Cheque/Draft Number Search',
      controlName: 'chequeDraftNumber',
      placeholder: 'Enter Cheque/Draft Number Search',
      required: true,
     
    }
  ]

  get cancelCashierForm(): FormGroup {
    return this.mainForm.get('cancelCashierForm') as FormGroup;
  }


  Search() {
     if (!this.commonService.validateForm(this.mainForm)) {
      return;
    }

    const Data = this.mainForm.getRawValue();
    console.log('Fund Transfer Data:', Data);
  }


}
