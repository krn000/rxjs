import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getData(){
    const url = 'https://reqres.in/api/users?page=2';
    return this.http.get(url);
  }
}
