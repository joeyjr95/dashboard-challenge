import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bottom-chart',
  templateUrl: './bottom-chart.component.html',
  styleUrls: ['./bottom-chart.component.css']
})
export class BottomChartComponent implements OnInit {
    @ViewChild('lineChart') private chartRef;
    chart: any;
    constructor(){ }
    ngOnInit(){
      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
          datasets: [
            {
              label: 'Line Dataset',
              fill: false,
              borderColor: 'rgb(54,162,235)',
              data: [25,25,25,25],
              type: 'line',
            }, {
              label: 'Bar Dataset',
              backgroundColor: 'rgba(210,214,222,1)',
              data: [10,20,30,40],
            },
          ],
          labels: [ 'January', 'February', 'March', 'April']
        },
        options: {
          scales: {
            yAxes: [{
              ticks:{
                beginAtZero: true
              }
            }]
          }
        }
      }

      );
    }

}