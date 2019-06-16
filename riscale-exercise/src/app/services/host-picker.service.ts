import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class HostPickerService {
  tracks$ = new BehaviorSubject<Device[]>([]);
  
  constructor(private apiService: ApiService) {}

  getDevices() {
    this.apiService.fetchDevices().subscribe(devices => {
      console.log('devices: ', devices);
      console.log('JSON devices: ', JSON.stringify(devices));
      this.tracks$.next(devices);
    });
  }
}
