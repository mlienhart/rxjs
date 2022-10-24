import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfComponent } from './of/of.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { TapComponent } from './tap/tap.component';
import { FromComponent } from './from/from.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    MapComponent,
    FilterComponent,
    SwitchmapComponent,
    CombinelatestComponent,
    ForkjoinComponent,
    TapComponent,
    FromComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
