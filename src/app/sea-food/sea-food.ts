import { Component, signal } from '@angular/core';
import { IMeal } from '../interfaces/i-meal';
import { Seafoood } from '../services/seafoood';



@Component({
  selector: 'app-sea-food',
  imports: [],
  templateUrl: './sea-food.html',
  styleUrl: './sea-food.css'
})
export class SeaFood {

dataLoaded : boolean = true; 

seafoodList = signal<IMeal[]>([]);

constructor(private seafood:Seafoood){};

ngOnInit():void{
  console.log("test")
  this.seafood.getseaFood().subscribe({
    next: (res)=>{
      
      this.seafoodList.set(res.recipes );
      // this.seafoodList = res.recipes;

      console.log(this.seafoodList);
    },
    error: ()=>{},
    complete: ()=>{}
  });

}

}
