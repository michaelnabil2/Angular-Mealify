import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeal } from '../interfaces/i-meal';

@Injectable({
  providedIn: 'root'
})
export class Seafoood {
     constructor(private httpClient:HttpClient){}
    getseaFood(): Observable<any>{
  
     return this.httpClient.get<IMeal>('https://forkify-api.herokuapp.com/api/search?q=seafood');
     
     
    }
}
