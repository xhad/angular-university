/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ToggleMeComponent } from './toggle-me.component';

describe('ToggleMeComponent', () => {
  let component: ToggleMeComponent;
  let fixture: ComponentFixture<ToggleMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleMeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle show false', () => {
    component.toggleShow();
    expect(component.show).toBe(false);
  });

  it('should toggle hidden to true', () => {
    component.toggleHidden();
    expect(component.hidden).toBe(true);
  });

  it('should toggle visibility to hidden', () => {
    component.toggleVisible();
    expect(component.visibility).toEqual('hidden');
  });
});
