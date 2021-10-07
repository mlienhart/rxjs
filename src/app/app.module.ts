import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ACreateComponent } from './a-create/a-create.component';
import { BHotVsColdComponent } from './b-hot-vs-cold/b-hot-vs-cold.component';
import { CSubjectsComponent } from './c-subjects/c-subjects.component';
import { DOperatorsComponent } from './d-operators/d-operators.component';
import { ETapComponent } from './e-tap/e-tap.component';
import { FBackpressureComponent } from './f-backpressure/f-backpressure.component';
import { GSwitchMapComponent } from './g-switch-map/g-switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ACreateComponent,
    BHotVsColdComponent,
    CSubjectsComponent,
    DOperatorsComponent,
    ETapComponent,
    FBackpressureComponent,
    GSwitchMapComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
