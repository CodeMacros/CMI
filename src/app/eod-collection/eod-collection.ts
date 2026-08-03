import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-eod-collection',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './eod-collection.html',
  styleUrl: './eod-collection.css',
})
export class EodCollection {

}
