import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { AddaccountpageComponent } from './addaccountpage/addaccountpage.component'
import { EditaccountpageComponent} from './editaccountpage/editaccountpage.component';
import { ChartpageComponent } from './chartpage/chartpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { SpotifyService } from './spotify.service';
import { ToastService} from './shared/services/toast-service';
import { ToastrModule } from 'ngx-toastr';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule ,
  MatInputModule ,
  MatMenuModule ,
  MatIconModule ,
  MatToolbarModule ,
  MatPaginatorModule,
  MatDialogModule,
  MatTabsModule,
  MatGridListModule
} from '@angular/material';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    AccountpageComponent,
    ChartpageComponent,
    HomepageComponent,
    OrderpageComponent,
    AddaccountpageComponent,
    AddOrderComponent,
    EditaccountpageComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    // MatTableDataSource,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatGridListModule,
    ToastrModule.forRoot({
      positionClass:'toast-top-right',
      closeButton: true,

    })
  ],

  providers: [SpotifyService, ToastService],
  bootstrap: [AppComponent],
  entryComponents: [AddaccountpageComponent, AddOrderComponent, EditaccountpageComponent]
})
export class AppModule { }
