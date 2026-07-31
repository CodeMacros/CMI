import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamictable',
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamictable.html',
  styleUrl: './dynamictable.css',
})
export class Dynamictable {

  @Input() columns: any[] = [];
  @Input() data: any[] = [];



  currentPage = 1;
  itemsPerPage = 10;
  showTooltip: any;
  tooltipX: any;
  tooltipY: any;
  tooltipValue: any;

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(start, start + this.itemsPerPage);
  }

  get showPagination(): boolean {
    return this.data.length > this.itemsPerPage;
  }

  get showEnteries(): boolean {
    return this.data.length > 20;
  }

  get pages(): (number | string)[] {

    const total = this.totalPages;

    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    if (this.currentPage <= 3) {
      pages.push(1, 2, 3, '...', total);
    }
    else if (this.currentPage >= total - 2) {
      pages.push(1, '...', total - 2, total - 1, total);
    }
    else {
      pages.push(
        1,
        '...',
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
        '...',
        total
      );
    }

    return pages;
  }

  changePage(page: number | string) {

    if (typeof page !== 'number') {
      return;
    }

    this.currentPage = page;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onPageSizeChange(): void {
    this.currentPage = 1;
  }

  get pageSizeOptions(): number[] {
    const total = this.data.length;

    const options: number[] = [];

    if (total >= 10) options.push(10);
    if (total >= 20) options.push(20);
    if (total >= 50) options.push(50);
    if (total >= 100) options.push(100);

    // Add the total only if it's not already present
    // if (!options.includes(total)) {
    //   options.push(total);
    // }

    return options;
  }


}
