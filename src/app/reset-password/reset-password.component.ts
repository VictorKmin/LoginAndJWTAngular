import {Component} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(private userService: UserService) {
  }
  resp;

  sendEmailToResetPassword(email) {
    this.userService.resetPassword(email).subscribe((res: Response) => {
      console.log(res);
      const isSuccess = res.success;
      if (isSuccess === false) {
        document.getElementById('successDiv').style.visibility = 'hidden';
        document.getElementById('errorDiv').style.visibility = 'visible';
      } else {
        document.getElementById('errorDiv').style.visibility = 'hidden';
        document.getElementById('successDiv').style.visibility = 'visible';
      }

      this.resp = res;
    });
  }
}
