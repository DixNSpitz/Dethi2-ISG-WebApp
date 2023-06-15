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
import { StatusInfoDialogComponent } from './components/vitals/status-info-dialog/status-info-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import { SharedGameComponent } from './components/games/shared-game/shared-game.component';
import { BackButtonComponent } from './components/shared/back-button/back-button.component';

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
    OrderGameComponent,
    StatusInfoDialogComponent,
    SharedGameComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
