import { Component, OnInit } from '@angular/core';
import { sideBarIcons } from '../side-bar-icons'
import { faFolder, faHome, faInfinity } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls:['./side-bar.component.css']
})

export class SideBarComponent {
    sideBarIcons = sideBarIcons;
    faFolder = faFolder;
    faHome = faHome;
    faInfinity = faInfinity;  
    //  function countTheDates(arr){
      //   let compressed = []
      //   let copy = arr.slice(0)

      //   for( let i = 0; i < arr.length; i++){
      //     let myCount = 0;
          
      //     for( let j = 0; j < copy.length; j++){
      //       if( arr[i] === copy[j]){
      //         myCount++
              
      //         delete copy[j]
      //       }
      //     }
      //     if(myCount > 0){
      //       let a = {
      //         month: null,
      //         count: null,

      //       };
      //       a.month = arr[i]
      //       a.count = myCount;
      //       compressed.push(a)
      //     }
      //   }
      //   let sortedCompressed = compressed.sort((a,b)=>{
      //     return a.month - b.month
      //   })
      //   return sortedCompressed
      // }
      // return countTheDates(justDates)
}