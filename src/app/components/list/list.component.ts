import { Component, OnInit ,ViewChild} from '@angular/core';

import { DataService} from '../../services/data.service'

import {DateAdapter, MatSort, MatTableDataSource} from '@angular/material';

import { Character } from './list.interface'
import { DataSource } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';







@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  dataSource;
  list:Character[];
  @ViewChild(MatSort) sort: MatSort;
  

  
  constructor(private dataService:DataService) { }
  
  displayedColumns: string[] = ['image', 'name', 'house'];

  urlG = 'http://hp-api.herokuapp.com/api/characters/house/gryffindor'

  urlR = 'http://hp-api.herokuapp.com/api/characters/house/ravenclaw'

  urlH = 'http://hp-api.herokuapp.com/api/characters/house/hufflepuff'

  urlS = 'http://hp-api.herokuapp.com/api/characters/house/slytherin'


  ngOnInit() {

      this.updateData('http://hp-api.herokuapp.com/api/characters')

  }
  

  updateData(url){
    this.dataService.getData(url).subscribe((response: Character[]) => {
       
      this.list = response
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;

      console.log(this.list)
     
  })
  }

 


}

