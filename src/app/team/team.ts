import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-team',
  imports: [Cards],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {

  cName :string = 'STAR OF THE MONTH';
  cPic:string = '/images/profile.png'

catchData(x : string){
console.log('hii');

   this.cName = 'William Anderson' 
   this.cPic = '/images/chefs-3.jpg' 
  }



// @ViewChild('hide') myElem !: ElementRef;
// @ViewChild('show') myElement !: ElementRef;


//   test(){
//     this.myElem.nativeElement.classList.add('d-none');
//     this.myElement.nativeElement.classList.remove('d-none');
 
//   }

}
