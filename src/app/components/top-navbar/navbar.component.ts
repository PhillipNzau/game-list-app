import { Component, OnInit } from '@angular/core';
import {faHome, faRetweet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faRetweet = faRetweet;

  constructor() { }

  ngOnInit(): void {
  }

}
