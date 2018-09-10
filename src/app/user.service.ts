import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUsers() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTUzNjMzMTk1NiwiZXhwIjoxNjM2MzMxOTU1fQ.SCMWO8W-0fhw0YVM22dQNTn3Oasv6KF_UZkU6I_OJxs';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('authorization', token);

    return this.http.get('http://localhost:3000/users', {headers});
  }

  createUser(user) {
    return this.http.post('http://localhost:3000/register', user);
  }

  loginUser(user) {
    return this.http.post('http://localhost:3000/welcome', user);
  }

