import { Nodemcu } from './../interfaces/nodemcu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodemcuApiService {

  constructor(private http: HttpClient) { }
  api: string = "localhost:8090/nodemcu/"


  get(): Observable<Nodemcu[]>{
    return this.http.get<Nodemcu[]>(this.api)
  }


}
