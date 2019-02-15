import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NvD3Module } from 'ng2-nvd3';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartDataService } from './chart-data.service';
import { ErrorHandler } from '@angular/core';
import 'nvd3';
import 'd3';
import { Observable, of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockChartDataService: ChartDataService;
  beforeEach(() => {
    mockChartDataService = jasmine.createSpyObj('chartDataService', ['getData']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, NvD3Module, BrowserModule, HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: ChartDataService, useValue: mockChartDataService }]
    }).compileComponents();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should initialize', () => {
    fixture = TestBed.createComponent(AppComponent);
    expect(fixture).toBeDefined();
    expect(fixture.componentRef).toBeDefined();
  });

  it('should create the graph', () => {

    let returnData = [
      {
        "label": "day1",
        "value": 10
      },
      {
        "label": "day2",
        "value": 8
      },
      {
        "label": "day3",
        "value": 12
      },
      {
        "label": "day4",
        "value": 18
      }
    ];


    let data = Observable.create(returnData);
    mockChartDataService['getData'] = jasmine.createSpy('getData').and.returnValue(data);
    const fixture = TestBed.createComponent(AppComponent);
    let fixComp = fixture.componentInstance;
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();
    data.subscribe((response) => {
      expect(fixture.componentInstance.barChartData.values).toBe(response);
    }, err => { console.log(err) });

  });


});
