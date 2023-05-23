import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./routing/app.routing.module";
import { AboutComponent } from './components/about/about.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import { GamesComponent } from './components/games/games.component';
import { TipsComponent } from './components/tips/tips.component';
import { HumidityGameComponent } from './components/games/humidity-game/humidity-game.component';
import { MultipleChoiceGameComponent } from './components/games/multiple-choice-game/multiple-choice-game.component';
import { OrderGameComponent } from './components/games/order-game/order-game.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    VitalsComponent,
    GamesComponent,
    TipsComponent,
    HumidityGameComponent,
    MultipleChoiceGameComponent,
    OrderGameComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
