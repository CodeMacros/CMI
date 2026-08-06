import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { NgStyle } from '@angular/common';
import { DatepickerDirective } from '../../directives/datepicker.directive';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule,
    // NgStyle , DatepickerDirective

  ],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
})
export class DynamicForm implements OnInit {

  @Input({ required: true }) fields!: DynamicField[];

  @Input({ required: true }) form!: FormGroup;


  @Output() fieldChanged = new EventEmitter<{
    controlName: string;
    value: any;
  }>();

  // for Button
  @Output() buttonClick = new EventEmitter<string>();

  onButtonClick(controlName: string) {
    this.buttonClick.emit(controlName);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createControls();
  }


  // @Output() fieldChanged = new EventEmitter<any>();
  onFieldChange(controlName: string) {

    const control = this.form.get(controlName);

    this.fieldChanged.emit({
      controlName,
      value: control?.value
    });

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

  allowInput(event: KeyboardEvent, field: DynamicField): void {
    if (!field.inputType) {
      return;
    }

    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Tab',
      'Home',
      'End'
    ];

    if (allowedKeys.includes(event.key)) {
      return;
    }

    let regex: RegExp;

    switch (field.inputType) {

      case 'number':
        regex = /^[0-9]$/;
        break;

      case 'alpha':
        regex = /^[a-zA-Z ]$/;
        break;

      case 'alphanumeric':
        regex = /^[a-zA-Z0-9]$/;
        break;

      default:
        return;
    }

    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  onInput(event: Event, field: DynamicField): void {

    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Allow only numbers if configured
    if (field.inputType === 'number') {
      value = value.replace(/\D/g, '');
      input.value = value;

      this.form.get(field.controlName)?.setValue(value, {
        emitEvent: false
      });
    }


    // Trigger API only when pattern matches
    if (field.triggerChange && field.pattern) {

      const regex =
        field.pattern instanceof RegExp
          ? field.pattern
          : new RegExp(field.pattern);

      if (regex.test(value)) {

        this.fieldChanged.emit({
          controlName: field.controlName,
          value
        });

      }

    }

  }


  isVisible(field: DynamicField): boolean {
    console.log(field);

    if (!field.showWhen) {
      return true;
    }

    const control = this.form.get(field.showWhen.controlName);
    if (!control) {
      return true;
    }

    return field.showWhen.values.includes(control.value);

  }

  toDateEventEmitter(date: any) {
    console.log(date);
  }

  onSelectChange(event: Event, field: DynamicField) {
    const value = (event.target as HTMLSelectElement).value;
    this.fieldChanged.emit({
      controlName: field.controlName,
      value
    });

  }


  onFileChange(event: Event, field: DynamicField): void {
    console.log(event);

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {

      const file = input.files[0];

      console.log(file);

      this.form.get(field.controlName)?.setValue(file);

      this.form.get(field.controlName)?.markAsTouched();
      this.form.get(field.controlName)?.updateValueAndValidity();
    }

  }


}
