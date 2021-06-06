import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon'
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemCardMobileComponent } from './components/item-card-mobile/item-card-mobile.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangelogComponent } from './changelog/changelog.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, ItemCardComponent, ItemCardMobileComponent, ChangelogComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
