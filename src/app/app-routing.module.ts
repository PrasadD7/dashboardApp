import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutchartComponent} from './doughnutchart/doughnutchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'', redirectTo:'', pathMatch:'full' },
  { path: 'barchart', component:BarchartComponent},
  { path: 'dnutchart', component:DoughnutchartComponent},
  { path: 'piechart/:Year', component:PiechartComponent },
  { path: "**", component:PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BarchartComponent,DoughnutchartComponent,PiechartComponent];