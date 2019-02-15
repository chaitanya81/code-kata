import { TestBed } from '@angular/core/testing';
import { ChartDataService } from './chart-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('ChartDataService', () => {
  let mockChartDataService: ChartDataService;
  let mockHttpService: HttpClient;

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj('httpService', ['get']);
    mockChartDataService = new ChartDataService(mockHttpService)
  });

  it('ChartDataService should be created', () => {
    let returnObj = Observable.create(
      [
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
      ]
    );
    mockHttpService['get'] = jasmine.createSpy('get').and.returnValue(returnObj);
    let returnValue = mockChartDataService.getData();
    expect(returnValue).toBe(returnObj);
  });
});
