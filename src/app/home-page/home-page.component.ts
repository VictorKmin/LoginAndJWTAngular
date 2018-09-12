import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }
 ngOnInit() {
    if (localStorage.length === 0) {
      document.getElementById('loginDiv').style.visibility = 'visible';
    } else {
      document.getElementById('logoutDiv').style.visibility = 'visible';
    }
 }
}
