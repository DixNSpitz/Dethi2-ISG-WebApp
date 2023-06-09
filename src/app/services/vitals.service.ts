import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plant} from "../models/Plant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VitalsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllVitals(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://127.0.0.1:5000/vitals');
  };
}
