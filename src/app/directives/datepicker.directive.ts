
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output
} from '@angular/core';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

dayjs.extend(customParseFormat);
@Directive({
  selector: '[appDatepicker]',
  standalone: true,
  exportAs: 'datepicker'
})
export class DatepickerDirective implements AfterViewInit, OnDestroy {

  @Input() isFutureDate = false;

  @Output() dateEventEmitter = new EventEmitter<string>();

  constructor(
    private el: ElementRef<HTMLInputElement>,
    private ngZone: NgZone
  ) { }

  ngAfterViewInit(): void {

    const yearRange = this.isFutureDate ? '-0:+100' : '-100:+1';

    this.ngZone.runOutsideAngular(() => {

      (($ as any)(this.el.nativeElement) as any).datepicker({

        dateFormat: 'dd-mm-yy',

        changeMonth: true,

        changeYear: true,

        yearRange,

        autoclose: true,

        onSelect: (date: string) => {

          this.ngZone.run(() => {

            this.setDate(date);

          });

        }

      });

    });

  }

  private setDate(date: string): void {

    const formattedDate = dayjs(date, 'DD-MM-YYYY', true).format('DD-MMMM-YYYY');

    this.el.nativeElement.value = formattedDate;

    this.dateEventEmitter.emit(formattedDate);

  }

  ngOnDestroy(): void {

    (($ as any)(this.el.nativeElement) as any).datepicker('destroy');

  }

}