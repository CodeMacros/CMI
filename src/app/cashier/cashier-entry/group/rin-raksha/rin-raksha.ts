import { Component } from '@angular/core';
import { DynamicField } from '../../../../modal/dynamic-field';
import { DynamicForm } from '../../../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../../../shared/dynamictable/dynamictable';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Common } from '../../../../service/common';

@Component({
  selector: 'app-rin-raksha',
  imports: [DynamicForm, Dynamictable],
  templateUrl: './rin-raksha.html',
  styleUrl: './rin-raksha.css',
})
export class RinRaksha {
  rinRakshaForm!: FormGroup
  rinRakshaFields: DynamicField[] = [
    {
      type: 'select',
      label: 'Product Name',
      controlName: 'productName',
      required: true,
      options: [
        {
          label: 'RINN Raksha',
          value: 'rinnRaksha'
        }
      ]
    },
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
      controlName: 'document',
      required: true
    }
  ];

  tableColumns = [
    {
      field: 'srNo',
      header: 'No.'
    },
    {
      field: 'fileName',
      header: 'File Name'
    },
    {
      field: 'fileSize',
      header: 'File Size'
    },
    {
      field: 'fileType',
      header: 'File Type'
    },
    {
      field: 'uploadType',
      header: 'Upload Type'
    },
    {
      field: 'description',
      header: 'Description'
    },
    {
      field: 'options',
      header: 'Options'
    }
  ];

  constructor(private fb: FormBuilder, private comSrv: Common) { }


  ngOnInit(): void {
    this.rinRakshaForm = this.fb.group({})
  }


  onSubmit() {
    if (this.comSrv.validateForm(this.rinRakshaForm)) {
      console.log(this.rinRakshaForm.getRawValue())
    } else {
      console.log('trackInwardForm is valid', this.comSrv.validateForm(this.rinRakshaForm));
    }
  }


}
