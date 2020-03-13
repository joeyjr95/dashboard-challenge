import { Component, OnInit } from '@angular/core';
import { faCaretDown, faLink } from '@fortawesome/free-solid-svg-icons';
import {Chart} from 'chart.js';
import { data } from '../data';
import * as moment from 'moment/moment';

@Component({
    selector: 'app-home-dashboard',
    templateUrl: './home-dashboard.component.html',
    styleUrls: ['./home-dashboard.component.scss']
  })
  export class HomeDashboardComponent implements OnInit {
   faCaretDown = faCaretDown;
   faLink = faLink;
   data = data;
   
  preSortDataDates = data.sort((a,b) => {
    return Date.parse(a.date) - Date.parse(b.date);
  })
  dataDates = this.preSortDataDates.slice(0,5)

  
  ngOnInit(){
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.maintainAspectRatio = false;

    
    let momentDates = data.map( task =>{
       task.date = moment(task.date).format('MMM. DD, YYYY')
       return task
    })
    console.log(momentDates)
  
  }
  
   }