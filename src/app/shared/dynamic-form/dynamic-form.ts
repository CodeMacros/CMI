import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
})
export class DynamicForm implements OnInit {

  fields: DynamicField[] = [

    {
      type: 'date',
      label: 'Received Form Date',
      controlName: 'receiveFormdDate',
      required: true,
      defaultValue: '',
      min: '2024-01-01',      // Optional
      max: '2030-12-31'       // Optional
    },

    {
      type: 'text',
      label: 'Received Date',
      controlName: 'receivedDate',
      placeholder: 'Enter Received Date',
      required: true
    },

    {
      type: 'select',
      label: 'Received By',
      controlName: 'receivedBy',
      required: true,

      options: [
        { label: 'Inward', value: 'Inward' },
        { label: 'Outward', value: 'Outward' }
      ]
    },

    {
      type: 'text',
      label: 'Mobile Number',
      controlName: 'mobile',
      required: true,
      placeholder: 'Enter Mobile Number',
      pattern: /^[6-9]\d{9}$/,
      allowOnlyNumbers: true,
      maxLength: 10,
      patternMessage: 'Please enter valid mobile number.'
    },

    {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter Email',
      controlName: 'email',
      required: true
    },

    {
      type: 'text',
      label: 'PAN Number',
      controlName: 'pan',
      placeholder: 'Enter Pan',
      required: true,
      pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      patternMessage: 'Invalid PAN Number.'
    },

    {
      type: 'text',
      label: 'Name',
      controlName: 'name',
      placeholder: 'Enter Name',
      minLength: 3,
      maxLength: 5
    }

  ];


  @Input() form!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createControls();
  }


  createControls() {
    this.fields.forEach(field => {

      if (this.form.contains(field.controlName)) {
        return;
      }

      const validators = [];

      if (field.required) {
        validators.push(Validators.required);
      }

      if (field.pattern) {
        validators.push(Validators.pattern(field.pattern));
      }

      if (field.minLength) {
        validators.push(Validators.minLength(field.minLength));
      }

      if (field.maxLength) {
        validators.push(Validators.maxLength(field.maxLength));
      }

      if (field.type === 'email') {
        validators.push(Validators.email);
      }

      if (field.validators?.length) {
        validators.push(...field.validators);
      }

      this.form.addControl(
        field.controlName,
        this.fb.control(
          {
            value: field.defaultValue ?? '',
            disabled: field.disabled
          },
          validators
        )
      );
    });
  }



  allowOnlyNumbers(event: KeyboardEvent, field: any): void {

    if (!field.allowOnlyNumbers) {
      return;
    }

    // Allow control keys
    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
      'Home',
      'End'
    ];

    if (allowedKeys.includes(event.key)) {
      return;
    }

    // Block anything that's not a digit
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }


  onInput(event: Event, field: any) {

    if (!field.allowOnlyNumbers) {
      return;
    }

    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/\D/g, '');

    this.form.get(field.controlName)?.setValue(input.value, {
      emitEvent: false
    });
  }


}
