
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
@Input() chefPic : string = '';
@Input() chefName : string = '';
@Output() chefImg:EventEmitter<any> = new EventEmitter();

demo(){

  this.chefImg.emit('/images/logo.png')
}
}
