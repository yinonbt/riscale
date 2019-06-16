import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  fetchDevices(): Observable<Device[]> {
    const url = ` http://localhost:8088/devices`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.post<Device[]>(
      url,
      {
        skip: 5,
        take: 5,
        filter: [
          {
            field: 'status',
            op: '=',
            value: '1'
          },
          {
            field: 'osName',
            op: 'like',
            value: 'Ubuntu'
          }
        ],
        sort: 'id',
        order: 'asc'
      },
      options
    );
  }
}
