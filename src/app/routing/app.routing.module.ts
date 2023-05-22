import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {AboutComponent} from "../components/about/about.component";
import {VitalsComponent} from "../components/vitals/vitals.component";
import {TipsComponent} from "../components/tips/tips.component";
import {GamesComponent} from "../components/games/games.component";
import {HumidityGameComponent} from "../components/games/humidity-game/humidity-game.component";
import {MultipleChoiceGameComponent} from "../components/games/multiple-choice-game/multiple-choice-game.component";
import {OrderGameComponent} from "../components/games/order-game/order-game.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},  // default route
  {path: 'home', component: HomeComponent},
  {path: 'vitals', component: VitalsComponent},
  {path: 'games', component: GamesComponent},
  {path: 'games/humidity', component: HumidityGameComponent},
  {path: 'games/multipleChoice', component: MultipleChoiceGameComponent},
  {path: 'games/order', component: OrderGameComponent},
  {path: 'tips', component: TipsComponent},
  {path: 'about', component: AboutComponent},
  // { path: '**', component: NotFoundComponent }  // wildcard route for 404 not found
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
