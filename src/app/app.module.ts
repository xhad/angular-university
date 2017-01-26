import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorSampleComponent } from './color-sample/color-sample.component';
import 'hammerjs';
import { CollapseOnClickDirective } from './directives/collapse-on-click.directive';
import { CollapseDirectiveComponent } from './collapse-directive/collapse-directive.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ToggleMeComponent } from './toggle-me/toggle-me.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { stepperComponent } from './stepper/stepper.component';
import { DirectivesComponent } from './directives/directives.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search-box', component: SearchBoxComponent },
  { path: 'color-picker', component: ColorPickerComponent },
  { path: 'color-sample', component: ColorSampleComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'toggle-me', component: ToggleMeComponent },
  { path: 'stepper', component: stepperComponent },
  { path: '', redirectTo: '/home',
             pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchBoxComponent,
    ColorPickerComponent,
    ColorSampleComponent,
    CollapseOnClickDirective,
    CollapseDirectiveComponent,
    HeroesComponent,
    ToggleMeComponent,
    ToolbarComponent,
    stepperComponent,
    DirectivesComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
