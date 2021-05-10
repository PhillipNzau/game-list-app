import { Component, OnInit } from '@angular/core';
import {faHome, faRetweet} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  faHome = faHome;


  constructor() { }

  ngOnInit(): void {
  }

}
