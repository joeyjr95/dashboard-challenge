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
   
   preSortDataDates = data.sort((a,b) => {
    return Date.parse(a.date) - Date.parse(b.date);
  })
  dataDates = this.preSortDataDates.slice(0,5)
  progress = data.filter(task => {
    return task.condition === 'In Progress'
    })
  new = data.filter(task => {
    return task.condition === 'New'
  })
  thisMonth = data.filter(task =>{
   return new Date(task.date).getMonth() === new Date().getMonth()
  })
  nextMonth  = data.filter(task =>{
    return new Date(task.date).getMonth() === (new Date().getMonth() + 1)
   })
  
  
  progressByMonth = this.progress.map( task =>{
    let dateMonth = (new Date(task.date).getMonth() + 1)
    return { x: dateMonth, y: 1 } 
  })

  
  
  barChart=[]
  lineChart=[]
  ngOnInit(){
    const progress = this.progress;
    const newTask = this.new
    function filterMap(array){
     let justDates = array.map( task => {
        let taskDates = new Date(task.date).getMonth()
        return taskDates
      })
       function countTheDates(arr){
        let compressed = []
        let copy = arr.slice(0)

        for( let i = 0; i < arr.length; i++){
          let myCount = 0;
          
          for( let j = 0; j < copy.length; j++){
            if( arr[i] === copy[j]){
              myCount++
              
              delete copy[j]
            }
          }
          if(myCount > 0){
            let a = {
              month: null,
              count: null,

            };
            a.month = arr[i]
            a.count = myCount;
            compressed.push(a)
          }
        }
        let sortedCompressed = compressed.sort((a,b)=>{
          return a.month - b.month
        })
        return sortedCompressed
      }
      return countTheDates(justDates)
    }
    
    let newMonths = filterMap(this.new)
    let progressMonths = filterMap(this.progress)

    let dataNewMonths = newMonths.map( task =>{
      return { x: task.month + 1, y: task.count}
    })
    console.log(dataNewMonths)
    let dataProgressMonths = progressMonths.map( task =>{
      return { x: task.month + 1, y: task.count}
    })
    console.log(dataProgressMonths)

    function getMonthName(num){
      let months = [ 
        'December', 'January', 'February', 
      'March', 'April', 'May', 'June',
      'July', 'August', 'September', 
      'October', 'November', 'December'
    ] 
    return months[++num]
    }
    this.barChart = new Chart ('barChart', {
      type: 'bar',
      data:{
        labels:[getMonthName(new Date().getMonth()), getMonthName((new Date().getMonth() + 1))],
        datasets:[{
          data:[this.thisMonth.length, this.nextMonth.length],
          backgroundColor:[
            '#38A4ea',
            '#38A4ea',

          ],
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          xAxes:[{
            barPercentage: 0.4
          }],
          yAxes:[{
            display: false,
            ticks:{
              beginAtZero: true,
            }
          }]
        }
      }
      
    });
  //   this.lineChart = new Chart ('lineChart', {
  //     type: 'bar',
  //     data:{
  //       labels:[getMonthName(new Date().getMonth()), getMonthName((new Date().getMonth() + 1)),getMonthName((new Date().getMonth() + 2)), getMonthName((new Date().getMonth() + 3)), getMonthName((new Date().getMonth() + 4)),getMonthName((new Date().getMonth() + 5)),getMonthName((new Date().getMonth() + 6)) ],
  //       datasets:[{
  //         label: 'new',
  //         data: dataNewMonths,
  //         backgroundColor:[
  //           '#38A4ea',
  //           '#38A4ea',
  //           '#38A4ea',
  //           '#38A4ea',
  //           '#38A4ea',

  //         ],
  //       },
  //       {
  //         label: 'In Progress',
  //         data: dataProgressMonths,
  //         backgroundColor:[
  //           '#0E367A',
  //           '#0E367A',
  //           '#0E367A',
  //           '#0E367A',
  //           '#0E367A',

  //         ],
  //       }],
        
  //     },
  //     options: {
  //       legend: {display: true},
  //       scales: {
  //         xAxes:[{
  //           barPercentage: 0.4
  //         }],
  //         yAxes:[{
  //           display: false,
  //           ticks:{
  //             beginAtZero: true,
  //           }
  //         }]
  //       }
  //     }
  //  });
  }
  
   }