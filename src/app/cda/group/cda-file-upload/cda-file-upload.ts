import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Common } from '../../../service/common';
import { Dynamictable } from '../../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-cda-file-upload',
  imports: [DynamicForm],
  templateUrl: './cda-file-upload.html',
  styleUrl: './cda-file-upload.css',
})

export class CdaFileUpload implements OnInit{
  cdaFileForm!: FormGroup
  cdaFileFields: DynamicField[] = [
    {
      type: 'select',
      label: 'CDA Upload Type',
      controlName: 'cdaType',
      required: true,
      options: [
        {
          label: 'Rin Raksha',
          value: 'rinRaksha'
        },
        {
          label: 'OTHERS',
          value: 'others'
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
      field: 'options',
      header: 'Options'
    }
  ];

  constructor(private fb: FormBuilder, private comSrv: Common) { }


  ngOnInit(): void {
    this.cdaFileForm = this.fb.group({})
  }


  onSubmit() {
    if (this.comSrv.validateForm(this.cdaFileForm)) {
      console.log(this.cdaFileForm.getRawValue())
    } else {
      console.log('trackInwardForm is valid', this.comSrv.validateForm(this.cdaFileForm));
    }
  }


}
