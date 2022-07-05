import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RulesPageComponent} from "./pages/rules-page/rules-page.component";
import {UnitsPageComponent} from "./pages/units-page/units-page.component";
import {UniversePageComponent} from "./pages/universe-page/universe-page.component";

const routes: Routes = [
  { path: 'rules', component: RulesPageComponent },
  { path: 'units', component: UnitsPageComponent },
  { path: 'universe', component: UniversePageComponent },
  { path: '', redirectTo: 'rules', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
