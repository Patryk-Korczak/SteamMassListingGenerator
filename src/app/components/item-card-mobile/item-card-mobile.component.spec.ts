import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardMobileComponent } from './item-card-mobile.component';

describe('ItemCardMobileComponent', () => {
  let component: ItemCardMobileComponent;
  let fixture: ComponentFixture<ItemCardMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
