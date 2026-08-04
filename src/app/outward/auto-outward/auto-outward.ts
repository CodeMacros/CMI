import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicField } from '../../modal/dynamic-field';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auto-outward',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule,],
  templateUrl: './auto-outward.html',
  styleUrl: './auto-outward.css',
})
export class AutoOutward implements OnInit {

  openedSection = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
