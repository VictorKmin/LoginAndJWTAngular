import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    const token = localStorage.getItem('accessToken');
    this.userService.logoutUser(token).subscribe((res: Response) => {
      console.log(res);
    });
    localStorage.clear();
  }

}
