import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChartDataService } from './chart-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/nvd3/build/nv.d3.css']
})
export class AppComponent implements OnInit {

  barChartOptions = {
    chart: {
      color: function () { return "blue"; },
      type: 'discreteBarChart',
      height: 300,
      width: 1000,
      margin: {
        top: 20,
        right: 20,
        bottom: 50,
        left: 55
      },
      x: function (d) { return d.label; },
      y: function (d) { return d.value; },
      showValues: true,
      valueFormat: function (d) {
        return d3.format(',.0f')(d);
      },
      duration: 500,
      xAxis: {
        axisLabel: 'Each Day'
      },
      yAxis: {
        axisLabel: 'Completed Tasks',
        axisLabelDistance: -10
      }
    }
  };


  barChartData = [];

  constructor(private chartDataService: ChartDataService) {
  }

  ngOnInit() {
    this.chartDataService.getData().subscribe(
      data => {
        this.barChartData = [{
          key: 'Cumulative Return',
          values: data as any
        }];
      }, err => {
        console.log(err);
      });
  }
}
