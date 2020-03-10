import { Component, OnInit } from '@angular/core';
import { sideBarIcons } from '../side-bar-icons'
import { faFolder, faHome, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { getLocaleMonthNames } from '@angular/common';

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
    // month = this.showDate();
  
    // implements OnInit 
//    showDate(){
//     let date: Date = new Date(2017, 4, 4, 17, 23, 42, 11);  
//     let month = date.setDate(13); 
//     return month;
//    }
//    ngOnInit() {
//     this.showDate()
//     console.log(this.showDate())
//  }
   
}