import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:60737/api";

 
  constructor(private http:HttpClient) { }

  params1 = new HttpParams().set('ApiKey','hL4km6Red36VelVeT3');

  getUser():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/User' , {params:this.params1});
  }

  getProject():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Projects', {params:this.params1});
  }

  getTimeClock():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TimeClock',{params:this.params1});
  }
}
