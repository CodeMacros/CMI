import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { DynamicTableColumn, DynamicTableConfig } from '../../modal/dynamicTable-field'
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';


@Component({
  selector: 'app-dynamictable',
  imports: [CommonModule, FormsModule, TableModule, InputTextModule,
    CheckboxModule,
    ButtonModule],
  templateUrl: './dynamictable.html',
  styleUrl: './dynamictable.css',
})
export class Dynamictable {

  @ViewChild('dt') table!: Table;

  @Input() config!: DynamicTableConfig;

  @Output() rowClick = new EventEmitter<any>();

  @Output() buttonClick = new EventEmitter<any>();

  @Output() selectionChange = new EventEmitter<any[]>();

  @Output() valueChange = new EventEmitter<any>();

  selectedRows: any[] = [];

  loading = false;

  ngOnInit(): void { }

  get columns(): DynamicTableColumn[] {
    return this.config.columns;
  }

  get data(): any[] {
    return this.config.data;
  }

  get globalFilterFields(): string[] {
    return this.columns
      .filter(c => c.globalFilter)
      .map(c => c.field);
  }

  filterGlobal(event: Event): void {

    const value = (event.target as HTMLInputElement).value;

    this.table.filterGlobal(value, 'contains');

  }

  onSelectionChange(event: Event): void {

    this.selectionChange.emit(this.selectedRows);

  }

  onButtonClick(row: any, column: DynamicTableColumn): void {

    this.buttonClick.emit({
      row,
      column
    });

  }

  onRowClick(row: any): void {

    this.rowClick.emit(row);

  }

  onValueChange(row: any, field: string): void {

    this.valueChange.emit({
      row,
      field,
      value: row[field]
    });

  }



}
