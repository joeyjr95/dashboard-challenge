import { Component, OnInit } from '@angular/core';
import { faCaretDown, faLink } from '@fortawesome/free-solid-svg-icons';
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
   faLink = faLink;
   data = data;
   
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

    // let now = moment()
    let momentDates = data.map( task =>{
       task.date = moment(task.date).format('MMM. DD, YYYY')
       return task
    })
    console.log(momentDates)

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
          borderColor: '#02699A',
          lineTension: 0,
          pointRadius: 0,
        },
        {
          label: ['Prediction'],
          data: predictionsMapped,
          fill: false,
          borderColor: '#D9D9D9',
          lineTension: 0,
          pointRadius: 0,
        }
      ]
      },
      options: {
        legend: {display: false},
        scales: {
            xAxes: [{
              ticks: {
                fontSize: 18,
              },
              gridLines: {
                display:false
            },
                type: 'time',
                time: {
                    unit: "quarter",
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
                fontSize: 18,
              }
            }]
        }
    }
});
    

    
  
  }
  
   }