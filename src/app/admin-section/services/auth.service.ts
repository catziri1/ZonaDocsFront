import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidGlwb1VzdWFyaW8iOjAsImlhdCI6MTU3NTUzNjUwMH0.uMB7taOGVqj2rhqGOAORO0LxQOv5E-I-LP08PcWz7ek'
  constructor() { }

  isLoggedIn() {
    //return !!localStorage.getItem('token');
    //console.log(this.t);
    return this.t;
  }
}
