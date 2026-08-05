import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicField } from '../../../modal/dynamic-field';
import { DynamicForm } from '../../../shared/dynamic-form/dynamic-form';
import { Common } from '../../../service/common';
import { DynamicTableColumn, DynamicTableConfig } from '../../../modal/dynamicTable-field';
import { Dynamictable } from '../../../shared/dynamictable/dynamictable';



@Component({
  selector: 'app-pacashierentry',
  imports: [ReactiveFormsModule, DynamicForm, Dynamictable],
  templateUrl: './pacashierentry.html',
  standalone: true,
  styleUrl: './pacashierentry.css',
})
export class Pacashierentry {

  constructor(private val: FormBuilder, private see: Common) { }

  detailForm!: FormGroup;


  cashierEntry: DynamicField[] = [
    {
      type: 'number',
      label: 'PA Number',
      controlName: 'paNumber',
      placeholder: 'Enter PA Number',
      required: true
    },


    {
      type: 'text',
      label: 'PA Name',
      controlName: 'paName',
      placeholder: '',
      disabled: false,
      required: true
    },

    {
      type: 'text',
      label: 'PA State',
      controlName: 'paState',
      placeholder: '',
      disabled: true
    },
    {
      type: 'text',
      label: 'PA City',
      controlName: 'paCity',
      placeholder: '',
      disabled: true
    },
    {
      type: 'select',
      label: 'Cheque Type',
      controlName: 'chequeType',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Local', value: 'local' },
        { label: 'Outstation', value: 'outstation' }
      ]
    },

    {
      type: 'text',
      label: 'Cheq/Draft/Transaction Date',
      controlName: 'chequeDraftTransactionDate',
      placeholder: 'dd MM yyyy',
      required: true
    },

    {
      type: 'text',
      label: 'Cheq/Draft/Transaction Received Date',
      controlName: 'chequeDraftTransactionReceivedDate',
      placeholder: 'dd MM yyyy',
      required: true
    },

    {
      type: 'text',
      label: 'Cheq/Draft No/NEFT RTGS Transaction No',
      controlName: 'chequeDraftNoNEFT',
      placeholder: 'Enter Cheque Draft No',
      required: true
    },

    {
      type: 'select',
      label: 'Pay Mode',
      controlName: 'payMode',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Cheque', value: 'cheque' },
        { label: 'Cash', value: 'cash' },
        { label: 'NEFT', value: 'neft' },
        { label: 'RTGS', value: 'rtgs' }
      ]
    },

    {
      type: 'select',
      label: 'Pay Type',
      controlName: 'payType',
      placeholder: '-- Select --',
      required: true,
      options: [
        { label: 'Cheque', value: 'cheque' },
        { label: 'Cash', value: 'cash' },
        { label: 'NEFT', value: 'neft' },
        { label: 'RTGS', value: 'rtgs' }
      ]
    },

    {
      type: 'number',
      label: 'Amount',
      controlName: 'amount',
      placeholder: 'Enter Amount',
      required: true
    },


    {
      type: 'select',
      label: 'Due Month',
      controlName: 'dueMonth',
      placeholder: '-- Select--',
      required: false,
      options: []
    },

    {
      type: 'select',
      label: 'Due Year',
      controlName: 'dueYear',
      placeholder: '-- Select--',
      required: false,
      options: []
    },

    {
      type: 'checkbox',
      label: 'MICR',
      controlName: 'micr',
    },


    {
      type: 'text',
      label: 'MICR Code',
      controlName: 'micrCode',
      placeholder: 'Enter MICR Code'
    },

    {
      type: 'text',
      label: 'Bank Name',
      controlName: 'bankName',
      placeholder: 'Enter Bank Name',
      required: true
    },


    {
      type: 'text',
      label: 'Branch Name',
      controlName: 'branchName',
      placeholder: 'Enter Branch Name',
      required: true
    },


    {
      type: 'select',
      label: 'Instrument Type',
      controlName: 'instrumentType',
      placeholder: '-- Select --',
      options: [
        { label: 'Cheque', value: 'cheque' },
        { label: 'Demand Draft', value: 'dd' }
      ]
    },


    {
      type: 'select',
      label: 'State',
      controlName: 'state',
      placeholder: '-- Select State --',
      required: true,
      options: [
        { label: 'Maharashtra', value: 'MH' },
        { label: 'Gujarat', value: 'GJ' }
      ]
    },


    {
      type: 'select',
      label: 'City',
      controlName: 'city',
      placeholder: '-- Select City --',
      required: true,
      options: [
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Pune', value: 'Pune' }
      ]
    }

  ]

  tableData = [
    {
      select: false,
      cashierType: 'CE',
      proposalNo: 'PRP100001',
      proposalDate: new Date('2026-08-01'),
      policyNo: 'POL500001',
      chequeNo: 'CHQ10001',
      paymentMode: 'Cheque',
      chequeDate: new Date('2026-08-02'),
      amount: 25000,
      bankName: 'State Bank of India',
      branchName: 'Mumbai Main',
      collectionBank: 'HDFC Bank',
      chequeType: 'Local',
      ifscCode: 'SBIN0000123',
      remitterIfsc: 'HDFC0000456',
      bankAccount: '123456789012',
      reenterAccount: '123456789012',
      policyHolder: 'Rahul Sharma',
      accountHolder: 'Rahul Sharma',
      ocrVerified: 'Yes',
      recordUpdated: new Date('2026-08-04'),
      impsStatus: 'Success',
      remarks: 'Payment Verified'
    },
    {
      select: false,
      cashierType: 'RE',
      proposalNo: 'PRP100002',
      proposalDate: new Date('2026-08-03'),
      policyNo: 'POL500002',
      chequeNo: 'CHQ10002',
      paymentMode: 'DD',
      chequeDate: new Date('2026-08-03'),
      amount: 15000,
      bankName: 'ICICI Bank',
      branchName: 'Pune',
      collectionBank: 'Axis Bank',
      chequeType: 'Outstation',
      ifscCode: 'ICIC0001234',
      remitterIfsc: 'UTIB0005678',
      bankAccount: '123456789013',
      reenterAccount: '123456789013',
      policyHolder: 'Amit Verma',
      accountHolder: 'Amit Verma',
      ocrVerified: 'No',
      recordUpdated: new Date('2026-08-05'),
      impsStatus: 'Pending',
      remarks: 'Waiting for Verification'
    },
    {
      select: false,
      cashierType: 'NB',
      proposalNo: 'PRP100003',
      proposalDate: new Date('2026-08-05'),
      policyNo: 'POL500003',
      chequeNo: 'CHQ10003',
      paymentMode: 'Cash',
      chequeDate: new Date('2026-08-05'),
      amount: 30000,
      bankName: 'Bank of Baroda',
      branchName: 'Nashik',
      collectionBank: 'SBI',
      chequeType: 'Local',
      ifscCode: 'BARB0NAS001',
      remitterIfsc: 'SBIN0009876',
      bankAccount: '123456789014',
      reenterAccount: '123456789014',
      policyHolder: 'Priya Patel',
      accountHolder: 'Priya Patel',
      ocrVerified: 'Yes',
      recordUpdated: new Date('2026-08-05'),
      impsStatus: 'Success',
      remarks: 'Completed'
    },
    {
      select: false,
      cashierType: 'CE',
      proposalNo: 'PRP100004',
      proposalDate: new Date('2026-08-06'),
      policyNo: 'POL500004',
      chequeNo: 'CHQ10004',
      paymentMode: 'Cheque',
      chequeDate: new Date('2026-08-06'),
      amount: 42000,
      bankName: 'Punjab National Bank',
      branchName: 'Delhi',
      collectionBank: 'Canara Bank',
      chequeType: 'Local',
      ifscCode: 'PUNB0000101',
      remitterIfsc: 'CNRB0001100',
      bankAccount: '123456789015',
      reenterAccount: '123456789015',
      policyHolder: 'Neha Singh',
      accountHolder: 'Neha Singh',
      ocrVerified: 'Yes',
      recordUpdated: new Date('2026-08-06'),
      impsStatus: 'Success',
      remarks: 'Verified'
    },
    {
      select: false,
      cashierType: 'RE',
      proposalNo: 'PRP100005',
      proposalDate: new Date('2026-08-07'),
      policyNo: 'POL500005',
      chequeNo: 'CHQ10005',
      paymentMode: 'NEFT',
      chequeDate: new Date('2026-08-07'),
      amount: 12000,
      bankName: 'HDFC Bank',
      branchName: 'Thane',
      collectionBank: 'ICICI Bank',
      chequeType: 'Electronic',
      ifscCode: 'HDFC0000111',
      remitterIfsc: 'ICIC0002222',
      bankAccount: '123456789016',
      reenterAccount: '123456789016',
      policyHolder: 'Suresh Kumar',
      accountHolder: 'Suresh Kumar',
      ocrVerified: 'No',
      recordUpdated: new Date('2026-08-07'),
      impsStatus: 'Failed',
      remarks: 'Invalid IFSC'
    }
  ];


  columns: DynamicTableColumn[] = [
    {
      field: 'select',
      header: '',
      type: 'checkbox',
      width: '60px'
    },
    {
      field: 'cashierType',
      header: 'Cashier Type',
      type: 'text',
      sortable: false,
      width: '100px',
      filter: true,
    },
    {
      field: 'proposalNo',
      header: 'Proposal No',
      type: 'text',
      sortable: true,
      filter: true,
      globalFilter: true
    },
    {
      field: 'proposalDate',
      header: 'Proposal Date',
      type: 'date',
      sortable: true,
      filter: true
    },
    {
      field: 'policyNo',
      header: 'Policy No',
      type: 'text',
      sortable: true,
      filter: true,
      globalFilter: true
    },
    {
      field: 'chequeNo',
      header: 'Cheque No',
      type: 'input',
      editable: true,
      sortable: true,
      filter: true
    },
    {
      field: 'paymentMode',
      header: 'Payment Mode',
      type: 'select',
      editable: true,
      sortable: true,
      filter: true,
      options: [
        { label: 'Cash', value: 'Cash' },
        { label: 'Cheque', value: 'Cheque' },
        { label: 'DD', value: 'DD' },
        { label: 'NEFT', value: 'NEFT' },
        { label: 'RTGS', value: 'RTGS' }
      ]
    },
    {
      field: 'chequeDate',
      header: 'Cheque Date',
      type: 'date',
      sortable: true,
      filter: true
    },
    {
      field: 'amount',
      header: 'Amount',
      type: 'currency',
      sortable: true,
      filter: true
    },
    {
      field: 'bankName',
      header: 'Bank Name',
      type: 'text',
      sortable: true,
      filter: true,
      globalFilter: true
    },
    {
      field: 'branchName',
      header: 'Branch Name',
      type: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'collectionBank',
      header: 'Collection Bank',
      type: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'chequeType',
      header: 'Cheque Type',
      type: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'ifscCode',
      header: 'IFSC Code',
      type: 'text',
      sortable: true,
      filter: true,
      globalFilter: true
    },
    {
      field: 'remitterIfsc',
      header: 'Remitter IFSC',
      type: 'input',
      editable: true
    },
    {
      field: 'bankAccount',
      header: 'Bank Account',
      type: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'reenterAccount',
      header: 'Re-enter Account',
      type: 'input',
      editable: true
    },
    {
      field: 'policyHolder',
      header: 'Policy Holder',
      type: 'text',
      sortable: true,
      filter: true,
      globalFilter: true
    },
    {
      field: 'accountHolder',
      header: 'Account Holder',
      type: 'text',
      sortable: true,
      filter: true,
      globalFilter: true
    },
    {
      field: 'ocrVerified',
      header: 'OCR Verified',
      type: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'recordUpdated',
      header: 'Record Updated',
      type: 'date',
      sortable: true,
      filter: true
    },
    {
      field: 'impsStatus',
      header: 'IMPS Status',
      type: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'remarks',
      header: 'Remarks',
      type: 'text',
      sortable: true,
      filter: true
    },
    {
      field: 'action',
      header: 'Action',
      type: 'button',
      buttonLabel: 'View',
      icon: 'pi pi-eye'
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


  ngOnInit() {
    this.detailForm = this.val.group({
      cashier: this.val.group({})
    })
  }



  get cashier(): FormGroup {
    return this.detailForm.get('cashier') as FormGroup;
  }





  submit() {
    const isValid = this.see.validateForm(this.detailForm);

    if (isValid) {
      console.log(this.detailForm.getRawValue());
    } else {
      console.log('Form is invalid');
    }
  }

}
