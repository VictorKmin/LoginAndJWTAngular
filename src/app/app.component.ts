import { Component } from '@angular/core';
import {UserService} from './user.service';
// import {AuthService} from './authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, /* AuthService */]
})
export class AppComponent {
  title = 'LoginAndJWTAngular';
}
