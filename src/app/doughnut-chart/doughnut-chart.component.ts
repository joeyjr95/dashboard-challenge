import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { data } from '../data';
import { HtmlParser } from '@angular/compiler';

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
    let progress = this.progress
    let newTask = this.new
    function progressLabel(){
      return (`In-Progress   ${(progress.length)}`)
    }
    function newLabel(){
      return (`New   ${(newTask.length)}`)
    }
    console.log(progressLabel())
    this.pieChart = new Chart ('pieChart', {
      type: 'doughnut',
      data:{
        labels:[ progressLabel(), newLabel()],
        datasets:[{
          data:[this.progress.length, this.new.length],
          backgroundColor:[
            '#13FF95',
            '#0E367A',

          ],
        }]
      },
      options:{
        legend: {
          labels:{
            usePointStyle: true
          },
          position: 'right',
          
        },
        cutoutPercentage: 80,
      }
    });
  }

}
