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
}