import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-fund-transfer',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './fund-transfer.html',
  styleUrl: './fund-transfer.css',
})
export class FundTransfer implements OnInit {
  selectedType: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.firstChild?.url.subscribe(url => {
      if (url.length) {
        this.selectedType = url[0].path;
      }
    });
  }

  onActionChange(): void {
    if (this.selectedType) {
      this.router.navigate([this.selectedType], {
        relativeTo: this.route
      });
    }
  }
}
