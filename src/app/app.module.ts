import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfComponent } from './of/of.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    MapComponent,
    FilterComponent,
    SwitchmapComponent,
    CombinelatestComponent,
    ForkjoinComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
