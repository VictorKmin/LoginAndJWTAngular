import {Component} from '@angular/core';
import {UserService} from '../user.service';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  resp;
  private selectedFile: any;

  constructor(private userService: UserService) {
  }

  toBase64 = (file, callBack) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      callBack(file, reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }


  createUserForm = user => {
    this.toBase64(this.selectedFile, function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log('++++++++++++++');
      console.log(data.toString());
      console.log('++++++++++++++');
    });
    // this.userService.createUser(user)
    //   .subscribe((res: Response) => {
    //   this.resp = res;
    //   console.log(res);
    // });
  }
}
