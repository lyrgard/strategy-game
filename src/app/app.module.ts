import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RulesPageComponent} from "./pages/rules-page/rules-page.component";
import {UnitsPageComponent} from "./pages/units-page/units-page.component";
import {UniversePageComponent} from "./pages/universe-page/universe-page.component";
import {UnitComponent} from "./components/unit/unit.component";
import {AttackActionComponent} from "./components/actions/attack-action/attack-action.component";
import {OtherActionComponent} from "./components/actions/other-action/other-action.component";

@NgModule({
  declarations: [
    AppComponent,
    RulesPageComponent,
    UnitsPageComponent,
    UniversePageComponent,

    UnitComponent,
    AttackActionComponent,
    OtherActionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
