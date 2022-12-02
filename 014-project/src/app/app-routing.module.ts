import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ErrorComponent } from './error/error.component';
import { FormsComponent } from './forms/forms.component';
import { HelloComponent } from './hello/hello.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  { path: "", redirectTo: "/hello", pathMatch: "full" },
  { path: "hello", component: HelloComponent },
  { path: "interpolation", component: InterpolationComponent },
  { path: "interpolation", component: InterpolationComponent },
  { path: "binding", component: BindingComponent },
  { path: "buttons", component: ButtonsComponent },
  { path: "forms", component: FormsComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
