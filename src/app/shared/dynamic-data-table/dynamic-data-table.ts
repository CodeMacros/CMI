import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicDataTableModal } from '../../modal/dynamic-data-table';

@Component({
  selector: 'app-dynamic-data-table',
  imports: [FormsModule],
  templateUrl: './dynamic-data-table.html',
  styleUrl: './dynamic-data-table.css',
})
export class DynamicDataTable {
  dueCount = 1;

  instrumentAmount = 1500;

  @Input({ required: true }) rows: DynamicDataTableModal[] = []

  onCheckboxChange(item: any) {
    console.log(item.checked); // true/false
    console.log(item);         // Complete object
  }
}
