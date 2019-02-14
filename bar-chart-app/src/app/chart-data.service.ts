import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private httpService: HttpClient) { }

  getData(): Observable<any> {
    return this.httpService.get('./assets/chartData.json');
  }

}
