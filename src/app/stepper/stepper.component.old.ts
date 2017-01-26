
import {TestBed, async, ComponentFixture  } from '@angular/core/testing';
import {XHRBackend, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {MdSnackBarModule, MdDialogModule} from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  CovalentCoreModule,
  TdLoadingService,
  StepState,
  IsStepChangeEven
}
from '@covalent/core';

import {CovalentHttpModule} from '@covalent/http';
import {RouterTestingModule} from '@angular/router/testing';
// import { TdMockLoadingService } from '../../components/testing';
// import { TdColorDirective } from '../../components'; 
import {JWTDataService, planService,} from '../../services';
// import {API} from '../../config/api.config';
// import {Apiurl} from '../../app/api-url';
import { StepperComponent } from  './stepper.component';

import {Component, ViewChild, AfterViewInit, OnInit, AfterViewChecked, ElementRef, Output} from '@angular/core';

import {Router, ActivatedRoute, Data} from '@angular/router'
import {TdDynamicElementComponent} from "@covalent/dynamic-forms/dynamic-element.component";
import {createHostComponentMeta} from "@angular/compiler";
// import resolveTypeReferenceDirective = ts.resolveTypeReferenceDirective;
// import convertCompileOnSaveOptionFromJson = ts.convertCompileOnSaveOptionFromJson;


describe('Component: Stepper', () => {

  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperComponent ],
      imports: [],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should check for StepperComponent', () => {
    expect(component).toBeDefined();
  });



  // let apiurlFirst: Apiurl;
  //
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ StepperComponent ],
  //     imports: [
  //       RouterTestingModule,
  //       MdDialogModule.forRoot(),
  //       MdSnackBarModule.forRoot(),
  //       CovalentCoreModule.forRoot(),
  //       CovalentHttpModule.forRoot(),
  //     ],
  //     providers: [MockBackend,
  //       {provide: XHRBackend, useExisting: MockBackend},
  //       JWTDataService, planService],
  //     schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  //   });
  //

  //
  //   TestBed.compileComponents();
  // }));


  // it('should render dynamic elements', async(inject([], () => {
  //   let fixture: ComponentFixture<any> = TestBed.createComponent(StepperComponent);
  //   let component: StepperTestComponent = fixture.debugElement.componentInstance;
  //   expect(fixture.debugElement.queryAll(By.directive(StepperComponent)).length).toBe(0);
  //   component.elements = [{name: 'app_name', type: TdDynamicType.Text,},
  //                         {name: 'app_desc', type: TdDynamicType.Text,}];
  //
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(2);
  //   });
  // })));
});
//
// it('should render dynamic elements', async(inject([], () => {
//
//   let fixture: ComponentFixture<any> = TestBed.createComponent(StepperComponent);
//   let component: StepperComponent = fixture.debugElement.componentInstance;
//
//   expect(fixture.debugElement.queryAll(By.directive(TdDynamicElementComponent)).length).toBe(0);
//   component.elements = [{
//     name: 'storagetype',
//     type: TdDynamicType.Array,
//     selections: [local],
//   },{
//     name: 'instance type',
//     type: TdDynamicType.Array,
//     selections: ['ssd', 'hdd'],
//   },
//     {
//     name: 'nodes',
//     type: TdDynamicElement.Slider,
//   },
//     ];
//   fixture.detectChanges();
//   fixture.whenStable().then(() => {
//     expect(fixture.debugElement.queryAll(By.directive(StepperComponent)).length).toBe(6);
//   });
// })));
//
// it ('should render dynamic elements', async(inject([],() => {
//   let fixure :componentfixture<any> = TestBed.createcomponent(stepper)
// })))
//
// let fixtures: componentfixture<any> =TestBed.createcomponent(stepperComponent);
// let component:steppercomponet=fixture.debugElement.componetisntance;
//
// except(fixture.debugElement.queryAll(by.directive(stepperComponentComponent)).length).tobe(6)
// };
//
//



