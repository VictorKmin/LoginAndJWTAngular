import {Component} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private userService: UserService) {
  }

  createUserForm = user => {
    console.log(user);
    return this.userService.createUser(user).subscribe((res: Response) => {
      console.log(res);
    });
  }

  loginUser = (user) => {
    console.log(user);
   return this.userService.loginUser(user).subscribe((res: Response) => {
     console.log(res);
   });
  }
}
