import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bulk-upload',
  imports: [RouterModule],
  templateUrl: './bulk-upload.html',
  styleUrl: './bulk-upload.css',
})
export class BulkUpload implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/bulk-upload/', value]);
    }
  }
}
