import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {Chart} from 'chart.js';
import { data } from '../data';
@Component({
    selector: 'app-home-dashboard',
    templateUrl: './home-dashboard.component.html',
    styleUrls: ['./home-dashboard.component.scss']
  })
  export class HomeDashboardComponent implements OnInit {
   faCaretDown = faCaretDown;
   data = data;
   sortedTasks = ''
   dataDates = data.sort((a,b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  })
  progress = data.filter(task => {
    return task.condition === 'In Progress'
    })
  new = data.filter(task => {
    return task.condition === 'New'
  })
  march = data.filter(task =>{
   return new Date(task.date).getMonth() === 2
  })
  april  = data.filter(task =>{
    return new Date(task.date).getMonth() === 3
   })
  pieChart=[]
  barChart=[]
  ngOnInit(){
    
    this.pieChart = new Chart ('pieChart', {
      type: 'doughnut',
      data:{
        labels:['New', 'In Progress'],
        datasets:[{
          data:[this.progress.length, this.new.length],
          backgroundColor:[
            '#13FF95',
            '#0E367A',

          ],
        }]
      },
      options:{
        cutoutPercentage: 80,
      }
    });
    this.barChart = new Chart ('barChart', {
      type: 'bar',
      data:{
        
        labels:['March', 'April'],
        datasets:[{
          data:[this.march.length, this.april.length],
          backgroundColor:[
            '#13FF95',
            '#0E367A',

          ],
        }]
      },
      options:{
        
        scales: {
          yAxes:[{
            ticks:{
              begainAtZero: true
            }
          }]
        }
      }
    });
    console.log(this.april)
  }
  
  }