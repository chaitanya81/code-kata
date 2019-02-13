import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartComponent } from './barchart.component';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChartdataService } from '../services/chartdata.service';

describe('BarchartComponent', () => {
  let component: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;
  let chartDataService = {
    getChartData : () => new Observable<any>()
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartComponent, AppComponent ],
      imports: [ChartsModule, HttpClientModule],
      providers: [{provide: chartDataService, useValue: ChartdataService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Chart Data', () => {
    const expectedChartData = {chartData: ['Feb 1st', 'Feb 2nd'], taskLabels: [10, 20]};

    chartDataService.getChartData().subscribe(
      responsChartData => expect(responsChartData).toEqual(expectedChartData, 'expected Chart data'),
      fail
    );
  });
});
