import { Directive, Input, HostListener } from '@angular/core';
import { ShowOneContainer } from './show-one-container';

@Directive({
  selector: '[showOneTripper]'
})

export class ShowOnetrigger {

  @Input("showOneTrigger")
  id: string;

  @Input()
  active = false;

  constructor(private showOneContainer: ShowOneContainer) {
    showOneContainer.add(this);
  }

  @HostListener('click')
  click() {
    this.showOneContainer.show(this.id);
    console.log('Hello World !');
  }

}
