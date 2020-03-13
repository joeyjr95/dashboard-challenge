import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { data } from '../data';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  data = data;
  pieChart = [];
  // shows tasks that have the value of 'In Progress'
  progress = data.filter(task => {
    return task.condition === 'In Progress';
  });
  // shows tasks that have the value of 'New'
  new = data.filter(task => {
    return task.condition === 'New';
  });

  ngOnInit() {
    // tasks that been filtered for the value of 'In Progress'
    const progress = this.progress;

    // tasks that been filtered for the value of 'New'
    const newTask = this.new;

    // shows length of In Progress tasks on Label
    function progressLabel() {
      return `In-Progress   ${progress.length}`;
    }

    // shows length of New tasks on Label
    function newLabel() {
      return `New   ${newTask.length}`;
    }

    // defines parameters for the pie chart
    this.pieChart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: [progressLabel(), newLabel()],
        datasets: [
          {
            data: [this.progress.length, this.new.length],
            backgroundColor: ['#13FF95', '#0E367A']
          }
        ]
      },
      options: {
        legend: {
          labels: {
            usePointStyle: true,
            fontSize: 16
          },
          position: 'right'
        },
        cutoutPercentage: 80
      }
    });
  }
}
