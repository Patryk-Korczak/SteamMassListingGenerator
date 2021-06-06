import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutComponent} from "./about/about.component";
import {ChangelogComponent} from "./changelog/changelog.component";

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'changelog', component: ChangelogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
