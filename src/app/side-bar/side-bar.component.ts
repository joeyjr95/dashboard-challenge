import { Component } from '@angular/core';
import { sideBarIcons } from '../side-bar-icons'
@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls:['./side-bar.component.css']
})
export class SideBarComponent {
   sideBarIcons = sideBarIcons;
}