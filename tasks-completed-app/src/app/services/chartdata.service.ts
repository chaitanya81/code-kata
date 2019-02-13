import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartdataService {

  constructor(private httpClient: HttpClient) { }

  public getCompletedTasks(value = 'Satish'): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/completedtasks`, {responseType: 'json'});
  }
}
