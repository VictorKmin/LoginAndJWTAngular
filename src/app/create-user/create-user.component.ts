import {Component, Input} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  resp;
  constructor(private userService: UserService) {
  }
  createUserForm = user => {
    console.log(user);
    this.userService.createUser(user).subscribe((res: Response) => {
      this.resp = res;
      console.log(res);
    });
  }
}
