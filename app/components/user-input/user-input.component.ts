import {Component, OnInit} from 'angular2/core';

@Component({
  templateUrl: 'app/components/user-input/user-input.html'
})

export class UserInputComponent {
  
  clickMessage: string = '';
  keyupValues: string = '';
  box2Values: string = '';
  box3Values: string = '';
  box4Values: string = '';
  heroes: string[] = [];
  
  onClickMe() {
    this.clickMessage = 'You are my hero!'    
  }
  
  onKeyup($event: any) {
    this.keyupValues += $event.target.value + ' | ';
  }
  
  onBox2Keyup(value: string) {
    this.box2Values += value + ' | ';
  }
  
  onBox3Keyup(value: string) {
    this.box3Values += value + ' | ';
  }

  onBox4Keyup(value: string) {
    this.box4Values += value + ' | ';
  }
  
  addHero(newHero: string) {
    this.heroes.push(newHero);
  }
  
}