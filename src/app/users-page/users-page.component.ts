import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  constructor(private userService: UserService) { }
  users;

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log('______________________');
      console.log(users);
      console.log('______________________');
    });
  }
}
