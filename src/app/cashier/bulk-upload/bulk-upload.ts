import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bulk-upload',
  imports: [RouterModule],
  templateUrl: './bulk-upload.html',
  styleUrl: './bulk-upload.css',
})
export class BulkUpload implements OnInit {

  selectedCategory = '';
  subOptions: { label: string; value: string }[] = []


  cashierData: Record<string, { label: string; value: string }[]> = {
    group: [
      {
        label: 'Rin Raksha',
        value: 'rinRaksha'
      },
    ],


    individual: [
      {
        label: 'EFT Upload',
        value: 'eft-file'
      },
      {
        value: 'cashier-entry-file',
        label: 'Cashier Entry File Upload'
      },
      {
        value: 'online-payment-file',
        label: 'Online Payment File Upload'
      },
      {
        label: 'RPP Payment Upload',
        value: 'rpp-payment-file'
      },

      {
        label: 'Cashiering of Feed Not received ',
        value: 'cashier-feed-not-recive'
      },


      {
        label: 'SCMC File Upload',
        value: 'scmc-file-upload'
      },

      {
        label: 'Upload File Payments',
        value: 'upload-file-payment'
      },

      {
        label: 'IP CE File Upload Log',
        value: 'ip-ce-file-upload'
      },
    ],


  };


  constructor(private router: Router) { }

  ngOnInit(): void {

    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];

    if (navEntries.length && navEntries[0].type === 'reload') {
      this.router.navigate(['/layout/cashier/bulk-upload']);
    }

  }


  onCategoryChange(event: Event): void {

    const value = (event.target as HTMLSelectElement).value;
    console.log(value);

    // Populate second dropdown
    if (value == 'group' || value == 'individual') {
      this.subOptions = this.cashierData[value] || [];
      this.selectedCategory = value
    } else {
      // Reset previous selection
      // Navigate if required
      this.subOptions = []
      if (value) {
        this.router.navigate(['/layout/cashier/bulk-upload', value]);
      }

    }

  }


  onSubCategoryChange(event: Event): void {

    const value = (event.target as HTMLSelectElement).value;

    this.router.navigate([
      '/layout/cashier/bulk-upload',
      this.selectedCategory,
      value
    ]);

  }
}





