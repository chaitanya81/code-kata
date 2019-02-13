import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule, ChartsModule, HttpClientModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
