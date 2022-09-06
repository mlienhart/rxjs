import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DurumComponent } from './durum/durum.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DurumComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
