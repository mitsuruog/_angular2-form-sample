import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';

import {Hero} from './hero.model';

@Component({
  templateUrl: 'app/components/hero-form/hero-form.html',
  styleUrls: ['app/components/hero-form/hero-form.css']
})

export class HeroFormComponent {

  isEditable: boolean = true;
  powers: string[] = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  
  model: Hero = new Hero(1, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  
  getDisplayModel() {
    return JSON.stringify(this.model);
  }
  
  reset() {
    this.model = new Hero(42, '', '');
  }
  
  onSubmit() {
    this.isEditable = false;    
  }
  
}