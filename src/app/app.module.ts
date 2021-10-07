import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ACreateComponent } from './a-create/a-create.component';
import { BHotVsColdComponent } from './b-hot-vs-cold/b-hot-vs-cold.component';
import { CSubjectsComponent } from './c-subjects/c-subjects.component';
import { DOperatorsComponent } from './d-operators/d-operators.component';
import { EOperatorsComponent } from './e-operators/e-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    ACreateComponent,
    BHotVsColdComponent,
    CSubjectsComponent,
    DOperatorsComponent,
    EOperatorsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
