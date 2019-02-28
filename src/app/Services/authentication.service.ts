import { Injectable } from '@angular/core';
import { Registration } from '../Models/Registration';
import { HttpClient } from '@angular/common/http';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(private http: HttpClient) { }

  private currentUsersToken = null;
  private currentUsersName: string;
  private currentUserId: number;
  // Registration Api
  registerUser(register: Registration) {

    this.http.post('http://localhost:61574/api/Users', register).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  forgotPassword(email) {
    return this.http.post('http://localhost:61574/api/ForgotPassword', { email })
  }

  checkLogin(email: string, password: string) {
    return this.http.post('http://localhost:61574/api/Login/Authenticate',
      { email, password }, { observe: 'response' });
  }

  resetPassword(password) {
    this.http.put('http://localhost:61574/api/ResetPassword/' + this.getCurrentUserId(), { password }).
      subscribe((response) => console.log(response),
        (error) => console.log(error));
  }

  setToken(token) {
    this.currentUsersToken = token;
  }

  setCurreentUserName(currentUserName: string) {
    this.currentUsersName = currentUserName;
  }
  getCurrentUserName() {
    return this.currentUsersName;
  }
  getToken() {
    return this.currentUsersToken;
  }

  isAuthenticated() {
    return this.currentUsersToken != null;
  }

  logout() {
    this.currentUsersToken = null;
  }

  // AuthGuard
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAuthenticated();
  }

  setCurreentUserId(id: number) {
    this.currentUserId = id;
  }

  getCurrentUserId() {
    return this.currentUserId;
  }
}
