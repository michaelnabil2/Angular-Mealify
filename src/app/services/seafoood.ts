import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Seafoood {
     constructor(private httpClient:HttpClient){}
    getseaFood(): Observable<any>{
  
     return this.httpClient.get('https://forkify-api.herokuapp.com/api/search?q=seafood');
     
     
    }
}
