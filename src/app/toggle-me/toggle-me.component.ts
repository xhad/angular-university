import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-me',
  templateUrl: './toggle-me.component.html',
  styleUrls: ['./toggle-me.component.css']
})
export class ToggleMeComponent {


  show = true;
  hidden = false;
  visibility = 'visible';

  toggleShow() {
    this.show = !this.show;
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }

  toggleVisible() {
    this.visibility =
      this.visibility == 'visible' ? 'hidden' : 'visible';
  }


}
