import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { data } from '../data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  data = data;

  // filters tasks to only show this months tasks
  thisMonth = data.filter(task => {
    return new Date(task.date).getMonth() === new Date().getMonth();
  });

  // filters tasks to only show next months tasks
  nextMonth = data.filter(task => {
    return new Date(task.date).getMonth() === new Date().getMonth() + 1;
  });
  barChart = [];
  ngOnInit() {
    // gets the correct month's name depending
    // on Date().getMonth() number
    function getMonthName(num) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      return months[num];
    }
    // defines parameters for the bar chart
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: [
          getMonthName(new Date().getMonth()),
          getMonthName(new Date().getMonth() + 1)
        ],
        showLabels: false,
        datasets: [
          {
            data: [this.thisMonth.length, this.nextMonth.length],
            backgroundColor: ['#20C0E8', '#20C0E8']
          }
        ]
      },
      options: {
        legend: { display: false },

        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false
              },
              // sets the bar's widths
              barPercentage: 0.4
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              display: false,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
