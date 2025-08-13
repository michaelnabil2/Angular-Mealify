import { Component, Input, signal } from '@angular/core';
import { IMeal } from '../interfaces/i-meal';
import { sPasta } from '../services/sPasta';



@Component({
  selector: 'app-pasta',
  imports: [],
  templateUrl: './pasta.html',
  styleUrl: './pasta.css'
})

export class Pasta  {

dataLoaded : boolean = true;
pastaList = signal<IMeal[]>([]);


  constructor(private pasta:sPasta){};
  
  ngOnInit():void{
    this.pasta.getPasta().subscribe({
      next: (res)=>{

        this.pastaList.set(res.recipes);
        // this.pastaList = res.recipes;
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
