import { Directive, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[collapse-on-click]'
})
export class CollapseOnClickDirective {

  constructor() { }

  isCollapsed = false;

  @HostBinding("class.collapsed")
  get collapsed() {
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

}
