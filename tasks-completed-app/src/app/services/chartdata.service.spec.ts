import { TestBed, inject } from '@angular/core/testing';

import { ChartdataService } from './chartdata.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

const httpClientSpy: { get: jasmine.Spy } = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);

describe('ChartdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartdataService, {provide: HttpClient, useValue: httpClientSpy }],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ChartdataService], (service: ChartdataService) => {
    expect(service).toBeTruthy();
  }));
});
