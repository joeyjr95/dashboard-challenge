import {Component} from '@angular/core';
import { topBarIcons } from '../top-bar-icons'
@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls:['./top-bar.component.css']
})
export class TopBarComponent {
   topBarIcons = topBarIcons;
}