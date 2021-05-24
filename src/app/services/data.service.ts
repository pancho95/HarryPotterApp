import { Injectable } from '@angular/core';
import { Character } from '../components/list/list.interface'
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlAll = 'http://hp-api.herokuapp.com/api/characters'

  

  constructor(private http: HttpClient) {}

  getData(url){
    return this.http.get(url)
  }

  
  
  

}
