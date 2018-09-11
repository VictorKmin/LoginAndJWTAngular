import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUsers() {
    const token = localStorage.getItem('accessToken');
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
  loginUserWithFacebooc() {
    return this.http.get('http://localhost:3000//auth/facebook/callback');
  }
  loginUserWirhGoogle() {
    return this.http.get('http://localhost:3000/auth/google');
  }

  resetPassword(email) {
    return this.http.post('http://localhost:3000/auth/reset', email);
  }

  logoutUser(token: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('authorization', token);
    return this.http.get(`http://localhost:3000/logout`, {headers});
  }
}

