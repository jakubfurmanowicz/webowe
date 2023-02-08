import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArraysComponent } from './arrays/arrays.component';
import { BindingComponent } from './binding/binding.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ErrorComponent } from './error/error.component';
import { FormsComponent } from './forms/forms.component';
import { HelloComponent } from './hello/hello.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ObjectComponent } from './object/object.component';
import { WebstudentsComponent } from './webstudents/webstudents.component';

const routes: Routes = [
  { path: "", redirectTo: "/hello", pathMatch: "full" },
  { path: "hello", component: HelloComponent },
  { path: "interpolation", component: InterpolationComponent },
  { path: "interpolation", component: InterpolationComponent },
  { path: "binding", component: BindingComponent },
  { path: "buttons", component: ButtonsComponent },
  { path: "forms", component: FormsComponent },
  { path: "arrays", component: ArraysComponent },
  { path: "object", component: ObjectComponent },
  { path: "webstudents", component: WebstudentsComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
