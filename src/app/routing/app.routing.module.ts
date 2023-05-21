import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {AboutComponent} from "../components/about/about.component";
import {VitalsComponent} from "../components/vitals/vitals.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vitals', component: VitalsComponent },
  // { path: 'game', component: Game1Component },
  // { path: 'game2', component: Game2Component },

  // { path: '**', component: NotFoundComponent }  // wildcard route for 404 not found
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
