import {Directive, ContentChildren, QueryList} from '@angular/core';

@Directive({
  selector: '[showOneContainer]'
})

export class ShowOneContainer {
  triggers: ShowOneTrigger[] = [];

  @ContentChildren(ShowOne)
  items: QueryList<ShowOne>;

  add(trigger: ShowOneTrigger) {
    this.triggers.push(trigger);
  }

  show(id:string) {
    this.items.forEach(item => item.active = item.id == id);
  }
}
