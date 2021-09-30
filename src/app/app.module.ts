import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ACreateComponent } from './a-create/a-create.component';
import { BHotVsColdComponent } from './b-hot-vs-cold/b-hot-vs-cold.component';

@NgModule({
  declarations: [
    AppComponent,
    ACreateComponent,
    BHotVsColdComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
