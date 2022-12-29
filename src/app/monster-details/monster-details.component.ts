import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-monster-details',
  templateUrl: './monster-details.component.html',
  styleUrls: ['./monster-details.component.scss']
})
export class MonsterDetailsComponent implements OnInit {

  userDetails: User;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe((params: Params) => {
      this.userDetails = this.usersService.getUserDetailsById(params['id']);
    });
  }

  get monsterImgUrl(): string {
    return `https://robohash.org/${this.userDetails.id}?set=set2&size=180x180`;
  }

}
