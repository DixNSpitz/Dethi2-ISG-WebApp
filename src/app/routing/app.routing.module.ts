import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {AboutComponent} from "../components/about/about.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // { path: '**', component: NotFoundComponent }  // wildcard route for 404 not found
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
