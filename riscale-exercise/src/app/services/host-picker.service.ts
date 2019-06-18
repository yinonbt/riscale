import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Device } from '../models/device';
import { OsType } from '../models/os-type.enum';

@Injectable({
  providedIn: 'root'
})
export class HostPickerService {
  devicesByOsType: BehaviorSubject<Device[]>[] = [];
  tracks$ = new BehaviorSubject<Device[]>([]);

  constructor(private apiService: ApiService) {
    const osArr = Object.keys(OsType);
    for (let i = 0; i < osArr.length / 2; i++) {
      this.devicesByOsType[osArr[i]] = new BehaviorSubject<Device[]>([]);
    }
  }

  filterDevices(osType: number) {
    this.apiService.filterDevices(osType, 0, 1).subscribe(devices => {
      console.log('devices of OS: ', osType, ' are: ', devices);
      this.devicesByOsType[osType.toString()].next(devices);
    });
  }

  getDevices() {
    this.apiService.fetchDevices().subscribe(
      devices => {
        console.log('devices: ', devices);
        console.log('JSON devices: ', JSON.stringify(devices));
        this.tracks$.next(devices);
      },
      error => {
        alert('Server problems. See console');
        console.log(error);
      }
    );
  }
}
