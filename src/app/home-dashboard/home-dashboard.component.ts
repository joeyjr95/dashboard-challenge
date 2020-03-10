import { Component } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-home-dashboard',
    templateUrl: './home-dashboard.component.html',
    styleUrls: ['./home-dashboard.component.scss']
  })
  export class HomeDashboardComponent  {
   faCaretDown = faCaretDown;
    
  
  }