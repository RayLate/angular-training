import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appCollapse]',
})
export class CollapseDirective {
  @HostBinding('attr.aria-expanded') collapse = false;
  @HostBinding('class.collapse') get isCollapsed() {
    
    return this.collapse;
  }

  constructor(private el: ElementRef) {
    console.log(el.nativeElement.classList);
  }
  @HostListener('click') toggleCollapse() {
    this.collapse = !this.collapse;
  }
}
