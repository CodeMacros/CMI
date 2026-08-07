import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reports',
  imports: [RouterModule, FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  selectedAction = '';
  selectedSahara = '';
  selectedReprint = '';
  saharaDiv: boolean = false;
  reprintDiv: boolean = false;

  // ngOnInit(): void {
  //   this.route.firstChild?.url.subscribe(url => {
  //     if (url.length) {
  //       this.selectedAction = url[0].path;
  //       this.saharaDiv = this.selectedAction === 'sahara';
  //       this.reprintDiv = this.selectedAction === 'reprint';
  //     }
  //   });
  // }


  ngOnInit(): void {
    const firstChild = this.route.firstChild; 

    if (!firstChild) {
      return;
    }

    const action = firstChild.snapshot.url[0]?.path;  

    this.saharaDiv = action === 'sahara';
    this.reprintDiv = action === 'reprint';

    if (action === 'sahara') {
      const child = firstChild.firstChild?.snapshot.url[0]?.path;
      if (!child) {
        this.router.navigate(['/layout/cashier/reports']);
        return;
      }

      this.selectedSahara = child;
    }

    if (action === 'reprint') {
      const child = firstChild.firstChild?.snapshot.url[0]?.path;

      if (!child) {
        this.router.navigate(['/layout/cashier/reports']);
        return;
      }

      this.selectedReprint = child;
    }
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    this.selectedAction = value;
    this.saharaDiv = value === 'sahara';
    this.reprintDiv = value === 'reprint';

    this.router.navigate(['/layout/cashier/reports', value]);
  }

  onSaharaChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    this.router.navigate(['/layout/cashier/reports/sahara', value]);
  }

  onRepairChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.router.navigate(['/layout/cashier/reports/reprint', value]);
  }
}
