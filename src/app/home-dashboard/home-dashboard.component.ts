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
  
  // sorts data by date
  preSortDataDates = data.sort((a,b) => {
    return Date.parse(a.date) - Date.parse(b.date);
  })

  // slices data so only the 5 most recent tasks show up
  dataDates = this.preSortDataDates.slice(0,5);
  
  ngOnInit(){

    // allows editing of chart size
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.maintainAspectRatio = false;
    
    // formats dates so they show up as "Apr. 13, 2020"
    let momentDates = data.map( task =>{
       task.date = moment(task.date).format('MMM. DD, YYYY')
       return task
    })
  
  }
  
   }