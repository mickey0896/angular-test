import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  defaultPrice = 0;
  email = null ;
  initial_value: number = 0;

  calPriceInput(e: string) {
    const price = Number(e);
    this.defaultPrice = (price * 3) / 4;
  }

  testClick() {
    console.log('testEventBinding');
  }

  testEventChange(value:number) {
    console.log('testEventBinding for Output');
    console.log(value,'event');
    
  }


  handleCounterChange(value:number) {
    this.initial_value = value;
  }

}
