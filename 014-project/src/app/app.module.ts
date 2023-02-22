import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ErrorComponent } from './error/error.component';
import { BindingComponent } from './binding/binding.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArraysComponent } from './arrays/arrays.component';
import { ObjectComponent } from './object/object.component';
import { WebstudentsComponent } from './webstudents/webstudents.component';
import { GoldenQuotesComponent } from './golden-quotes/golden-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    InterpolationComponent,
    ErrorComponent,
    BindingComponent,
    ButtonsComponent,
    FormsComponent,
    ArraysComponent,
    ObjectComponent,
    WebstudentsComponent,
    GoldenQuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
