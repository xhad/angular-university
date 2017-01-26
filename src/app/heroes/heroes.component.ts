import { Component } from '@angular/core';

const HEROES = [
  {id: 1, name: 'Superman', marvel: true},
  {id: 2, name: 'Batman'},
  {id: 3, name: 'SuperWoman'},
  {id: 4, name: 'Spiderman'},
  {id: 5, name: 'Flash'},
  {id: 6, name: 'Hulk', marvel: true}
]
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {


  heroes = HEROES;

  get styles() {
    return {
      color: 'blue',
      'text_decoration': 'underline'
    };
  }

  classes(hero) {
    return {
      marvel: hero.marvel,
      hulk: hero.name === 'Hulk'
    }
  }

}
