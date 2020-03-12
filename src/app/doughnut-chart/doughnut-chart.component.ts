import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { data } from '../data';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  data = data;
  pieChart=[];
  progress = data.filter(task => {
    return task.condition === 'In Progress'
    })
  new = data.filter(task => {
    return task.condition === 'New'
  })
  constructor() { }

  ngOnInit(){
    this.pieChart = new Chart ('pieChart', {
      type: 'doughnut',
      data:{
        labels:[ 'In Progress', 'New'],
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
  }

}
