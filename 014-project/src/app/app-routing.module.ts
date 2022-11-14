import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HelloComponent } from './hello/hello.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  { path: "", redirectTo: "/hello", pathMatch: "full" },
  { path: "hello", component: HelloComponent },
  { path: "interpolation", component: InterpolationComponent },
  { path: "interpolation", component: InterpolationComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
