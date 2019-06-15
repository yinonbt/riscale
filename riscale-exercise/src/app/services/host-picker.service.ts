import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostPickerService {
  tracks$ = new BehaviorSubject<any>(null);
  constructor(private apiService: ApiService) { 
    
  }

  getDevices() {
    this.apiService.fetchDevices().subscribe(
      devices => {
        console.log('devices: ', devices);
        this.tracks$.next(devices);
      });
  }
}
