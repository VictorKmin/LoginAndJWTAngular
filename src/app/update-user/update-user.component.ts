import { Component } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
resp;
  constructor(private userService: UserService) { }

  updateUser = user => {
    const token = localStorage.getItem('accessToken');
    console.log(user);
    this.userService.updateUser(token, user).subscribe((res: Response) => {
      this.resp = res;
      console.log(res);
    });
  }
}
