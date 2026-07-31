import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Api } from '../../service/api';


@Component({
  selector: 'app-new-business',
  imports: [RouterOutlet],
  templateUrl: './new-business.html',
  styleUrl: './new-business.css',
})
export class NewBusiness {

  constructor(private router: Router, private api: Api) { }

  ngOnInit(): void {

  }

  onActionChange(event: Event): void {

    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/layout/inward/new-business', value]);
    }
  }

  temprayForLoader() {
    this.api.getProduct().subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
}
