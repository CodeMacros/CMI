import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { Common } from '../../service/common';
import { DynamicForm } from '../../shared/dynamic-form/dynamic-form';
import { Dynamictable } from '../../shared/dynamictable/dynamictable';

@Component({
  selector: 'app-eft-approve-cashier',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicForm,Dynamictable],
  templateUrl: './eft-approve-cashier.html',
  styleUrl: './eft-approve-cashier.css',
})
export class EftApproveCashier {


  commonService = inject(Common);

  constructor(private fb: FormBuilder) { }
  mainForm!: FormGroup;
  tableData: any[] = [];
  selectedMode:boolean = false;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      eftApprovalForm: this.fb.group({}),
    });

  }

  eftApprovalFields: DynamicField[] = [
    {
      type: 'text',
      label: 'Reference ID',
      controlName: 'referenceId',
      placeholder: '',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'Proposal Number',
      controlName: 'proposalNo',
      placeholder: '',
      required: true,
      disabled: true
    },
    {
      type: 'text',
      label: 'All',
      controlName: 'all',
      placeholder: '',
      required: true,
      disabled: true
    },
    {
      type: 'button',
      label: '',
      controlName: 'plus',
      buttonLabel: '+',
      col: 'col-auto'
    },
     {
      type: 'select',
      label: 'Search Type',
      controlName: 'searchType',
      placeholder: '',
      required: true,
      visible: false,
      options:[
        
      ]
    },
  ]

  get eftApprovalForm(): FormGroup {
    return this.mainForm.get('eftApprovalForm') as FormGroup;
  }


  showSearchType = false;
  onButtonClick(controlName: string) {
  if (controlName === 'plus') {

    this.showSearchType = !this.showSearchType;

    const searchField = this.eftApprovalFields.find(
      x => x.controlName === 'searchType'
    );

    if (searchField) {
      searchField.visible = this.showSearchType;
    }

    const buttonField = this.eftApprovalFields.find(
      x => x.controlName === 'plus'
    );

    if (buttonField) {
      buttonField.buttonLabel = this.showSearchType ? '-' : '+';
    }
  }
}


 tableColumns = [
    { field: 'CheckDraftNo', header: 'No' },
    { field: 'CheckDraftDate', header: 'File Name' },
    { field: 'PayMode', header: 'File Size' },
    { field: 'PaymentType', header: 'File Type' },
    { field: 'Amount', header: 'Upload Type' },
    { field: 'Bank', header: 'Description' },
    { field: 'Delete', header: 'Option', type: 'button', buttonLabel: 'Delete' }

  ];

  Search(){
   this.selectedMode = true;
  }


}
