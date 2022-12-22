import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { takeWhile } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  usersData: User[] = [];
  filteredUserData: User[] = [];
  isComponentActive: boolean = true;
  filterForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchUserDetails();
    this.userService.usersDetail.pipe(takeWhile(() => this.isComponentActive)).subscribe(d => {
      this.usersData = d;
      this.filteredUserData = this.usersData;
    });
    this.filterForm = new FormGroup({
      filterText: new FormControl('')
    });
    this.filterForm.get('filterText')?.valueChanges.pipe(takeWhile(() => this.isComponentActive)).subscribe(elVal => {
      this.filteredUserData = this.usersData.filter(user => user.name.includes(elVal));
    });
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }

}
