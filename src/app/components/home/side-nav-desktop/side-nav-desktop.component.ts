import { Component, OnInit } from '@angular/core';
import {faHome, faRetweet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav-desktop',
  templateUrl: './side-nav-desktop.component.html',
  styleUrls: ['./side-nav-desktop.component.css']
})
export class SideNavDesktopComponent implements OnInit {
  faHome = faHome;
  faRetweet = faRetweet;
  constructor() { }

  ngOnInit(): void {
  }

}
