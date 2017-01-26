/* tslint:disable:no-unused-variable */
import { async,
         ComponentFixture,
         TestBed,
         ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement,
         CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
          { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('md-card'));
    el = de.nativeElement;

  });


  it('should create check for an h3 tag', () => {
    expect(el.textContent).toBeDefined();
  });
});
