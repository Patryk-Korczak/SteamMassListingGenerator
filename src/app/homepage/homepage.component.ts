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
  columns: number = 5;
  rowHeight: string = "3:4";

  constructor() {}

  ngOnInit(): void {
    this.setColumns();
    this.setRowHeight();
  }

  Items: Items = new Items();

  addSelectedItem(link: string) {
    this.selected.push(link);
  }

  unselectItem(link: string) {
    this.selected.splice(this.selected.indexOf(link), 1);
  }

  setColumns() {
    this.isMobile() ? this.columns = 3 : this.columns = 5;
  }

  setRowHeight() {
    this.isMobile() ? this.rowHeight = "1:1" : this.rowHeight = "1:1";
  }

  openNewWindow(link: string) {
    window.open(link);
  }

  generateMultiSellLink() {
    let generatedLink = this.multiSellBaseUrl;
    for (let link of this.selected) {
      generatedLink += link;
    }
    return generatedLink;
  }

  isMobile() {
    return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
  }
}
