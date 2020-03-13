import {Component} from '@angular/core';
import { topBarIcons } from '../top-bar-icons';
import { faSearch, faBell, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
   topBarIcons = topBarIcons;
   faSearch = faSearch;
   faBell = faBell;
   faCommentAlt = faCommentAlt;
}
