import {Component} from '@angular/core';
import {UserService} from '../user.service';
import { AuthService } from 'angular4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private userService: UserService, private authService: AuthService) {
  }


  resp;
  loginUser = (user) => {
    return this.userService.loginUser(user).subscribe((res: Response) => {
      console.log(res);
      const isSuccess = res.success;
      if (isSuccess === false) {
        document.getElementById('successDiv').style.visibility = 'hidden';
        document.getElementById('errorDiv').style.visibility = 'visible';
      } else {
        document.getElementById('errorDiv').style.visibility = 'hidden';
        document.getElementById('successDiv').style.visibility = 'visible';
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
      }

      this.resp = res;
    });
  }
  signInWithGoogle = () => {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.authService.signIn(GoogleLoginProvider.PROVIDER_ID));
  }
  signInWithFB = () =>  {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut = () => {
    this.authService.signOut();
  }
}
