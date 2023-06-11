import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  
})

export class ActionBarComponent {
  value = 0;
  @Input() step = 5;
  @Output() changeNumber = new EventEmitter();
  @Output() userEmail = new EventEmitter<string>(); 
   

  inputAdd() {

    if (this.value + this.step < 100) {
      this.value = this.value + this.step;
      this.changeNumber.emit(this.value);
    }
  }
  inputDelete() {
   
    if (this.value - this.step > 0) {
      this.value = this.value - this.step || this.value++
      this.changeNumber.emit(this.value);
    }
  }


  
  submit(order:any){
    this.userEmail.emit(order);
 }

}


