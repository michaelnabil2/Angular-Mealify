import { Component, Input } from '@angular/core';
import { IMeal } from '../interfaces/i-meal';
import { Seafoood } from '../services/seafoood';



@Component({
  selector: 'app-sea-food',
  imports: [],
  templateUrl: './sea-food.html',
  styleUrl: './sea-food.css'
})
export class SeaFood {

 seafoodList !: IMeal[]

constructor(private seafood:Seafoood){};

ngOnInit():void{
  console.log("test")
  this.seafood.getseaFood().subscribe({
    next: (res)=>{
      
      
      this.seafoodList = res.recipes;

      console.log(this.seafoodList);
    },
    error: ()=>{},
    complete: ()=>{}
  });

}

}
