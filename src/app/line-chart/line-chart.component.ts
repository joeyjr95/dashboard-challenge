import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { productTrends, predictTrends} from '../data';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChart=[]

  ngOnInit(){
    Chart.defaults.global.responsive = true;
    
    Chart.defaults.global.maintainAspectRatio = false;

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
