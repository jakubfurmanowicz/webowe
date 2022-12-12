import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WalidacjaComponent } from './walidacja/walidacja.component';
import { PakietyComponent } from './pakiety/pakiety.component';
import { WycenaComponent } from './wycena/wycena.component';

@NgModule({
  declarations: [
    AppComponent,
    WalidacjaComponent,
    PakietyComponent,
    WycenaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
