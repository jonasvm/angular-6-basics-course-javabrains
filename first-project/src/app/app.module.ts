import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    HttpClientModule
  ], //os serviços do ng module são declarados dentro do providers
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
