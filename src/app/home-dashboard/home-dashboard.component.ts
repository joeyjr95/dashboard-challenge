import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {Chart} from 'chart.js';
import { productTrends, predictTrends, data } from '../data';
import * as moment from 'moment/moment';

@Component({
    selector: 'app-home-dashboard',
    templateUrl: './home-dashboard.component.html',
    styleUrls: ['./home-dashboard.component.scss']
  })
  export class HomeDashboardComponent implements OnInit {
   faCaretDown = faCaretDown;
   data = data;
   productTrends = productTrends
   sortedTasks = ''
   
  preSortDataDates = data.sort((a,b) => {
    return Date.parse(a.date) - Date.parse(b.date);
  })
  dataDates = this.preSortDataDates.slice(0,5)
  
  thisMonth = data.filter(task =>{
   return new Date(task.date).getMonth() === new Date().getMonth()
  })
  nextMonth  = data.filter(task =>{
    return new Date(task.date).getMonth() === (new Date().getMonth() + 1)
   })
  
  
  

  lineChart=[]
  ngOnInit(){
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.maintainAspectRatio = false;
    let now = moment()
    function threeMonths(){
      let month = new Date();
      let threeMonth = month.setMonth(month.getMonth() + 3);
      return new Date(threeMonth)
    }
    function minusThreeMonths(){
      let month = new Date();
      let threeMonth = month.setMonth(month.getMonth() - 3);
      return new Date(threeMonth)
    }
    
    let salesMapped = productTrends.map(month =>{
      return {x: new Date(month.month), y: month.sold }
    })
    let predictionsMapped = predictTrends.map(month =>{
      return {x: new Date(month.month), y: month.sold }
    })
    

    this.lineChart = new Chart('lineChart', {
      
      type: 'line',
      data:{
        datasets:[{
          label: ['actual'],
          data: salesMapped,
          fill: false,
          borderColor: '#0E367A',
          lineTension: 0,
          pointRadius: 0,
        },
        {
          label: ['Prediction'],
          data: predictionsMapped,
          fill: false,
          borderColor: 'grey',
          lineTension: 0,
          pointRadius: 0,
        }
      ]
      },
      options: {
        legend: {display: false},
        scales: {
            xAxes: [{
              gridLines: {
                display:false
            },
                type: 'time',
                time: {
                    unit: "quarter",
                    // min: minusThreeMonths(),
                    // max: threeMonths()
                    displayFormats: {
                      quarter: 'MMM'
                    },
                }
            }],
            yAxes:[{
              gridLines: {
                display:false
            },
              display: true,
              ticks:{
                suggestedMax: 12,
                beginAtZero: true,
              }
            }]
        }
    }
});
    

    
  
  }
  
   }