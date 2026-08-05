import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-approval',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './approval.html',
  styleUrl: './approval.css',
})
export class Approval implements OnInit {
   selectedAction = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.firstChild?.url.subscribe(url => {
      if (url.length) {
        this.selectedAction = url[0].path;
      }
    });
  }


  onActionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    this.selectedAction = value;

     this.router.navigate(['/layout/approval/', value]);
  }
}
