import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Common } from '../../../service/common';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-cda-representation',
  imports: [DynamicForm,],
  templateUrl: './cda-representation.html',
  styleUrl: './cda-representation.css',
})
export class CdaRepresentation implements OnInit {
  cdaRepForm!: FormGroup
  cdaRepFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Cheque Number',
      controlName: 'chequeNumber',
      placeholder: 'Enter Cheque Number',
      required: true
    },
    {
      type: 'checkbox',
      label: 'SCMC',
      controlName: 'scmc'
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
      field: 'options',
      header: 'Options'
    }
  ];

  constructor(private fb: FormBuilder, private comSrv: Common) { }


  ngOnInit(): void {
    this.cdaRepForm = this.fb.group({})
  }


  onSubmit() {
    if (this.comSrv.validateForm(this.cdaRepForm)) {
      console.log(this.cdaRepForm.getRawValue())
    } else {
      console.log('trackInwardForm is valid', this.comSrv.validateForm(this.cdaRepForm));
    }
  }


}