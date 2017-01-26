import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input('placeholder')
  text = 'Type your search';

  clear (inputText) {
    console.log('Clear clicked...')
    inputText.value = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
