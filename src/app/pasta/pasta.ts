import { Component, Input } from '@angular/core';
import { IMeal } from '../interfaces/i-meal';
import { sPasta } from '../services/sPasta';



@Component({
  selector: 'app-pasta',
  imports: [],
  templateUrl: './pasta.html',
  styleUrl: './pasta.css'
})

export class Pasta {

@Input()  pastaList : IMeal[] = [];

  constructor(private pasta:sPasta){};
  
  ngOnInit():void{
    this.pasta.getPasta().subscribe({
      next: (res)=>{
        this.pastaList = res.recipes;
        console.log(res);
        
      },
      error: (err)=>{},
      complete: ()=>{}

    });
  }
  // getPasta() {
  //   throw new Error('Method not implemented.');
  // }
 
}
