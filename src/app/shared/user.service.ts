import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersData = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) { }

  fetchUserDetails() {
    this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users').subscribe(usersDetails => {
      this.usersData.next(usersDetails);
    });
  }

  get usersDetail() {
    return this.usersData.asObservable();
  }
}
