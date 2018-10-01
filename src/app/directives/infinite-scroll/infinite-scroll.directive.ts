import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

  @Output() reachedBottom: EventEmitter<any> = new EventEmitter();

  constructor() { }

  @HostListener('scroll', ['$event'])
  onScroll(e) {
    let el = e.target || e.srcElement;
    if (el.scrollHeight === (el.scrollTop + el.offsetHeight)) {
      this.reachedBottom.emit();
    }
  }

}
