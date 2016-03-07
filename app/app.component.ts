import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {UserInputComponent} from './components/user-input/user-input.component';
import {HeroFormComponent} from './components/hero-form/hero-form.component';
import {Logger} from './common/services/logger.service';

@Component({
  selector: 'my-app',
  template: `
    <ul class="nav nav-tabs">
      <li><a [routerLink]="['Input']">User input sample</a></li>
      <li><a [routerLink]="['HeroForm']">Hero form sample</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  providers: [Logger],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: 'user-input', name: 'Input', component: UserInputComponent },
  { path: 'hero-form', name: 'HeroForm', component: HeroFormComponent, useAsDefault: true }
])

export class AppComponent {

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log('Alo!! Alo!!');
  }

}