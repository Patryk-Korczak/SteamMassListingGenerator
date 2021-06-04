import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item-card-mobile',
  templateUrl: './item-card-mobile.component.html',
  styleUrls: ['./item-card-mobile.component.css']
})
export class ItemCardMobileComponent implements OnInit {
  private multiSellBaseUrl =
    'https://steamcommunity.com/market/multisell?appid=730&contextid=2';
  selected: boolean = false;

  @Input() item!: Item;
  @Output() selectedEvent = new EventEmitter<string>();
  @Output() unselectedEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  selectItemEvent() {
    this.selected = !this.selected;
    this.selected
      ? this.selectedEvent.emit(this.item.multiSell)
      : this.unselectedEvent.emit(this.item.multiSell);
  }

  openNewWindow(link: string) {
    window.open(link);
  }

  getSingleSellLink() {
    return this.multiSellBaseUrl + this.item.multiSell;
  }

  getSteamLink() {
    return this.item.steamLink;
  }

}
