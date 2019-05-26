import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './core/material.module';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListTableComponent } from './list-table/list-table.component';
import { ListChartComponent } from './list-chart/list-chart.component';
import { LoginComponent } from './login/login.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ListTableChartComponent } from './list-table-chart/list-table-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTableComponent,
    ListChartComponent,
    LoginComponent,
    SearchFormComponent,
    ListTableChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
