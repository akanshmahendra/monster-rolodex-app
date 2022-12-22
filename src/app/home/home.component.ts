import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usersData: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchUserDetails();
    this.userService.usersDetail.subscribe(d => this.usersData = d);
  }

}
