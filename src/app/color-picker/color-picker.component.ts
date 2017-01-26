import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})

export class ColorPickerComponent {
  BLUE:string = '#1976d2';
  RED:string = '#b13138';

  @Input()
  color: string;

  @Output("color")
  colorOutput = new EventEmitter();

  choose(color: string) {
    switch (color) {

      case 'RED':
        this.colorOutput.emit(this.RED);
        this.color = this.RED;
        break;
      case 'BLUE':
        this.colorOutput.emit(this.BLUE);
        this.color = this.BLUE;
        break;

      default:
        return;
    }
  }

  reset(color) {
    this.color ='black';
  }




}
