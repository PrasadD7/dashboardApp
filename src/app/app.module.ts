import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { AppComponent } from "./app.component";
import { DataService } from "./services/data.service";
import { ExcelService } from "./services/excel.service";
import { HttpClientModule } from "@angular/common/http";
import { routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule, RouterModule.forRoot([]), HttpClientModule,],
  declarations: [AppComponent,routingComponents, PageNotFoundComponent],
  bootstrap: [AppComponent],
  providers: [DataService,ExcelService,{provide: APP_BASE_HREF, useValue: ''}]
})

export class AppModule {}
