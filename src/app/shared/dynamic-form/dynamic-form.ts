import { Component, Input, OnInit } from '@angular/core';
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




  @Input() fields!: DynamicField[];

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


  isVisible(field: DynamicField): boolean {

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

  //   dateEventEmitter(date: any) {
  //   this.str_dob = date.target.value
  //   this.age = this.calculateAge(date.target.value)!.toString();//calculate age by using DOB
  //   if (this.age < 18 || this.age > 55) {
  //     alert("Enter age between 18 to 55");
  //     this.str_dob = ""
  //   }
  // }




}
