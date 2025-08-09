import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class sPasta {
  

  constructor(private httpClient:HttpClient){}
    getPasta(): Observable<any>{
  
     return this.httpClient.get('https://forkify-api.herokuapp.com/api/search?q=pasta');
     
     
    }
   
  
}
