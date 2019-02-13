import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardModule } from './credit-card/credit-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularPaymentsModule } from 'angular-payments-ts/src/angular-payments';
import { NavbarComponent } from './nav-bar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceOrderService } from './services/place-order/place-order.service';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CreditCardModule,
    AngularPaymentsModule,
    HttpClientModule
  ],
  providers: [CreditCardComponent, HttpClientModule, PlaceOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
