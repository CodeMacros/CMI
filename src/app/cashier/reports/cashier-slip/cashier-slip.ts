import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { DynamicField } from '../../../modal/dynamic-field';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-cashier-slip',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm],
  templateUrl: './cashier-slip.html',
  styleUrl: './cashier-slip.css',
})
export class CashierSlip {

  commonService = inject(Common);
  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      printingSlipForm: this.fb.group({}),
    });

  }

  // printingSlipFields: DynamicField[] = [
  //   {
  //     type: 'select',
  //     label: 'Search By',
  //     controlName: 'searchBy',
  //     placeholder: '-- Select --',
  //     required: true,
  //     options: [
  //       { label: 'Instrument No.', value: 'instrumentNo' },
  //       { label: 'DEO', value: 'deo' },
  //       { label: 'Date Range', value: 'dateRange' },
  //     ]
  //   },
  //   {
  //     type: 'select',
  //     label: 'Select DEO',
  //     controlName: 'selectDeo',
  //     placeholder: 'Select',
  //     required: true,
  //     options: [
  //       // { label: 'Renewal', value: '1' },
  //       // { label: 'Initial', value: '2' }
  //     ]
  //   },
  //   {
  //     type: 'text',
  //     label: 'Instrument No.',
  //     controlName: 'instrumentNo',
  //     placeholder: 'Enter Instrument No',
  //     required: true,
  //   },
  //    {
  //     type: 'select',
  //     label: 'Select Branch',
  //     controlName: 'selectBranch',
  //     placeholder: 'Select',
  //     required: true,
  //     options: [
  //       // { label: 'Renewal', value: '1' },
  //       // { label: 'Initial', value: '2' }
  //     ]
  //   },
  //   {
  //     type: 'text',
  //     label: 'From Date',
  //     controlName: 'fromDate',
  //     placeholder: '06-08-2026',
  //     required: true,
  //   },
  //   {
  //     type: 'text',
  //     label: 'To Date',
  //     controlName: 'toDate',
  //     placeholder: '06-08-2026',
  //     required: true,

  //   },
  // ]

  printingSlipFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Search By',
      controlName: 'searchBy',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Instrument No.', value: 'instrumentNo' },
        { label: 'DEO', value: 'deo' },
        { label: 'Date Range', value: 'dateRange' }
      ]
    },

    {
      type: 'text',
      label: 'Instrument No.',
      controlName: 'instrumentNo',
      placeholder: 'Enter Instrument No.',
      required: true,
      visible: false
    },

    {
      type: 'select',
      label: 'Select DEO',
      controlName: 'selectDeo',
      placeholder: '-- Select --',
      required: true,
      visible: false,
      options: []
    },

    {
      type: 'select',
      label: 'Select Branch',
      controlName: 'selectBranch',
      placeholder: '-- Select --',
      required: true,
      visible: false,
      options: []
    },

    {
      type: 'text',
      label: 'From Date',
      controlName: 'fromDate',
      placeholder: '06-08-2026',
      required: true,
      visible: false
    },

    {
      type: 'text',
      label: 'To Date',
      controlName: 'toDate',
      placeholder: '06-08-2026',
      required: true,
      visible: false
    }
  ];

  onFieldChanged(event: any) {

    if (event.controlName !== 'searchBy') return;

    this.updateFields(event.value);
  }

  updateFields(value: string) {

    const instrument = this.printingSlipFields.find(f => f.controlName === 'instrumentNo');
    const deo = this.printingSlipFields.find(f => f.controlName === 'selectDeo');
    const branch = this.printingSlipFields.find(f => f.controlName === 'selectBranch');
    const from = this.printingSlipFields.find(f => f.controlName === 'fromDate');
    const to = this.printingSlipFields.find(f => f.controlName === 'toDate');

    instrument!.visible = false;
    deo!.visible = false;
    branch!.visible = false;
    from!.visible = false;
    to!.visible = false;

    switch (value) {

      case 'instrumentNo':
        instrument!.visible = true;
        break;

      case 'deo':
        deo!.visible = true;
        break;

      case 'dateRange':
        branch!.visible = true;
        from!.visible = true;
        to!.visible = true;
        break;
    }

    this.printingSlipFields = [...this.printingSlipFields];
  }

  get printingSlipForm(): FormGroup {
    return this.mainForm.get('printingSlipForm') as FormGroup;
  }


  Submit() { }

}
