import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-auth-registration',
  imports: [FormsModule,CommonModule,RouterOutlet],
  templateUrl: './payment-auth-registration.html',
  styleUrl: './payment-auth-registration.css',
})
export class PaymentAuthRegistration {

constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  selectedType = '';

  onTypeChange() {

    if (this.selectedType) {

      this.router.navigate(
        [this.selectedType],
        {
          relativeTo: this.route
        }
      );

    }

  }
}
