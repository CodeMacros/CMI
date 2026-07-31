import { Component, inject } from '@angular/core';
import { LoaderService } from '../loader';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader {
  constructor() { }
  loader = inject(LoaderService);
}
