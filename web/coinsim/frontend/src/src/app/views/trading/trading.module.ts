import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';

import { TradingComponent } from './trading.component';
import { TradingRoutingModule } from './trading-routing.module';

@NgModule({
  imports: [
    TradingRoutingModule,
    CommonModule,
    ChartModule,
    IonRangeSliderModule,
    FormsModule
  ],
  declarations: [ TradingComponent ]
})
export class TradingModule { }
