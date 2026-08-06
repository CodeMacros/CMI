import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-policy-servicing',
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './policy-servicing.html',
  styleUrl: './policy-servicing.css',
})
export class PolicyServicing implements OnInit {
  payMentAuthDiv: boolean = false
  selectedType: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  onActionChange(event: Event) {

    const value = (event.target as HTMLSelectElement).value;

    if (value) {
      this.payMentAuthDiv = true;
    } else {
      this.payMentAuthDiv = false;
    }

  }



  onTypeChange(event:Event) {
    const value = (event.target as HTMLSelectElement).value;

    if (value) {
      this.router.navigate(['/layout/policy-servicing/payment-auth-registration', value]);
    }

  }

  ngOnInit() { }


}





