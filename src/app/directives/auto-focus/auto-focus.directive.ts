import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '.auto-focus'
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    this.element.nativeElement.focus();
  }
}
