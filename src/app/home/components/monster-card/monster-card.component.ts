import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {

  @Input() userDetails: User;

  constructor() { }

  get monsterImg() {
    return `https://robohash.org/${this.userDetails.id}?set=set2&size=180x180`;
  }

  ngOnInit(): void {
  }

}
