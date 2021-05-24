import { Component } from '@angular/core';

import { DataService } from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HarryPotterApp';

  constructor(public data:DataService){

  }
  
  

  ngOnInit(){
   
  }
}
