import {Component, OnInit} from '@angular/core';
// import {AuthService} from '../authService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(/**private authService: AuthService**/) {}

  ngOnInit() {
    // this.authService.loginWithFacebook();
  }
}
