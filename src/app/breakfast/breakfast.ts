import { Component, Input, signal } from '@angular/core';
import { Meals } from '../services/meals';
import { IMeal } from '../interfaces/i-meal';

@Component({
  selector: 'app-breakfast',
  imports: [],
  templateUrl: './breakfast.html',
  styleUrl: './breakfast.css'
})
export class Breakfast {
 mealList =  signal<IMeal[]>([]);;

  constructor(private meals:Meals){};

  
  ngOnInit():void{
    this.meals.getPizza().subscribe({
      next: (res)=>{

        this.mealList.set(res.recipes);
        // this.mealList = res.recipes;
        console.log(res);
        
      },
      error: (err)=>{},
      complete: ()=>{}

    });
  }
}
