import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComputerParametersComponent } from './computer-parameters/computer-parameters.component';
import { BinaryCounterComponent } from './binary-counter/binary-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputerParametersComponent,
    BinaryCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
