import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() {
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTUzNjMzMTk1NiwiZXhwIjoxNjM2MzMxOTU1fQ.SCMWO8W-0fhw0YVM22dQNTn3Oasv6KF_UZkU6I_OJxs';
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('authorization', token);

      return this.http.get('http://localhost:3000/users', {headers});
    // return this.http.get ('http://localhost:3000/users');
      // .pipe(
      //   map(response => response.json())
      // )
      // .pipe(
      //   map(response => response.results)
      // )
      // .pipe(
      //   map(users => {
      //     return users.map(user => {
      //       return {
      //         name: user.name.first + ' ' + user.name.last,
      //         image: user.picture.large,
      //         city: user.location.city,
      //         street: user.location.street
      //       };
      //     });
      //   })
      // );
  }
}
