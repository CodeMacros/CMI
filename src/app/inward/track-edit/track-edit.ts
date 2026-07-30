import { Component } from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-track-edit',
  imports: [RouterOutlet],
  templateUrl: './track-edit.html',
  styleUrl: './track-edit.css',
})
export class TrackEdit {


  constructor(private router: Router) { }

  ngOnInit(): void { }

  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/inward/track-edit', value]);
    }
  }
}
