import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartdataService } from '../services/chartdata.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit, OnDestroy {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = '';
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [];
  private subscriptions: Array<Subscription> = [];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private chartDataService: ChartdataService) { }

  ngOnInit() {
    this.getChartData();
  }

  getChartData() {
    this.subscriptions.push(this.chartDataService.getCompletedTasks().subscribe(
      response => {
        console.log(response);
        this.barChartData.push({data: response.chartData, label : 'Completed Tasks'});
        this.barChartLabels = response.taskLabels;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('chart Data has been successfully loaded');
      }
    ));
  }

  // unsubscribe from subscription on component destroy
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
