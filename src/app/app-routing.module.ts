import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccountpageComponent} from './accountpage/accountpage.component';
import {OrderpageComponent} from './orderpage/orderpage.component';
import {ChartpageComponent} from './chartpage/chartpage.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'account', component: AccountpageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'chart', component: ChartpageComponent },
  { path: 'order', component: OrderpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
