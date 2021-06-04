import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Items } from '../Items';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  private multiSellBaseUrl =
    'https://steamcommunity.com/market/multisell?appid=730&contextid=2';
  selected: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  Items: Items = new Items();

  addSelectedItem(link: string) {
    this.selected.push(link);
  }

  unselectItem(link: string) {
    this.selected.splice(this.selected.indexOf(link), 1);
  }
}
