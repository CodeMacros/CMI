import { Component } from '@angular/core';
import { DynamicForm } from '../../../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../../../shared/dynamictable/dynamictable';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicField } from '../../../../modal/dynamic-field';
import { DynamicTableColumn, DynamicTableConfig } from '../../../../modal/dynamicTable-field';
import { Common } from '../../../../service/common';

@Component({
  selector: 'app-eft-upload',
  imports: [DynamicForm,Dynamictable  ],
  templateUrl: './eft-upload.html',
  styleUrl: './eft-upload.css',
})
export class EftUpload {
mainForm!: FormGroup



  cashierEntrUploadFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Select Bank',
      controlName: 'bank',
      required: true,
      options: [
        {
          label: 'SBI',
          value: 'SBI'
        },
        {
          label: 'HDFC',
          value: 'HDFC'
        },
        {
          label: 'ICICI',
          value: 'ICICI'
        }
      ]
    },
    {
      type: 'file',
      label: 'Choose File',
      controlName: 'eftFile',
      placeholder: '',
      required: true,
    },
  ];




  tableData = []


  columns: DynamicTableColumn[] = [
    {
      field: 'srNo',
      header: 'No.',
      type: 'text',
      width: '70px',
      align: 'center',
      sortable: false
    },
    {
      field: 'fileName',
      header: 'File Name',
      type: 'text',
      width: '220px',
      sortable: true,
      globalFilter: true
    },
    {
      field: 'fileSize',
      header: 'File Size',
      type: 'text',
      width: '120px',
      align: 'center',
      sortable: true
    },
    {
      field: 'fileType',
      header: 'File Type',
      type: 'text',
      width: '120px',
      align: 'center',
      sortable: true
    },
    {
      field: 'uploadType',
      header: 'Upload Type',
      type: 'select',
      width: '180px',
      editable: true,
      options: [
        { label: 'Cashier Entry', value: 'cashierEntry' },
        { label: 'Cash Deposit', value: 'cashDeposit' },
        { label: 'Cheque Entry', value: 'chequeEntry' }
      ]
    },
    {
      field: 'description',
      header: 'Description',
      type: 'input',
      width: '250px',
      editable: true
    },
    {
      field: 'action',
      header: 'Options',
      type: 'button',
      width: '120px',
      align: 'center',
      buttonLabel: 'Delete'
    }
  ];

  tableConfig: DynamicTableConfig = {
    columns: this.columns,
    data: this.tableData,
    paginator: true,
    rows: 10,
    rowsPerPageOptions: [10, 20, 50],
    // globalFilter: true,
    sortMode: 'multiple',
    selectionMode: 'multiple',
    scrollable: true,
    scrollHeight: '500px'
  };

  constructor(private fb: FormBuilder, private comSrv: Common) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      cashierEntrFilterForm: this.fb.group({}),
      cashierEntrForm: this.fb.group({})
    });
  }



  get cashierEntrFilterForm(): FormGroup {
    return this.mainForm.get('cashierEntrFilterForm') as FormGroup
  }




  markUnmark(): void {
    console.log('this =', this);
    console.log('comSrv =', this.comSrv);
    ;

    if (this.comSrv.validateForm(this.mainForm)) {
      console.log(this.mainForm.getRawValue())
    } else {
      console.log(' markUnmarkForm is valid', this.comSrv.validateForm(this.mainForm));
      console.log(this.mainForm.value);
    }

  }

  clear(): void {
    this.comSrv.clearForm(this.cashierEntrFilterForm, this.cashierEntrUploadFields)
  }


  onSelectChange(event: { controlName: string; value: any }) {
    this.cashierEntrFilterForm
      .get(event.controlName)
      ?.setValue(event.value, { emitEvent: false });

    this.cashierEntrUploadFields.forEach(field => {

      if (!field.showWhen) {
        field.visible = true;
        return;
      }

      const parentValue =
        this.cashierEntrFilterForm
          .get(field.showWhen.controlName)
          ?.value;

      const visible =
        field.showWhen.values.includes(parentValue);

      // Reset only when the field changes
      if (field.visible && !visible) {
        this.cashierEntrFilterForm
          .get(field.controlName)
          ?.reset('', { emitEvent: false });
      }

      field.visible = visible;

    });

  }
}
