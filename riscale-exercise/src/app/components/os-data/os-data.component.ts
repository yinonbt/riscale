import { HostPickerService } from './../../services/host-picker.service';
import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Device } from 'src/app/models/device';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-os-data',
  templateUrl: './os-data.component.html',
  styleUrls: ['./os-data.component.scss']
})
export class OsDataComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Input() osTypeValue: string;
  @Input() osTypeKey: number;

  selectedDevices: Device[] = [];
  fetchRequired = false;
  pageIndex = 0;
  devices$: BehaviorSubject<Device[]>;

  constructor(private hostPickerService: HostPickerService) {}

  ngOnInit() {
    this.devices$ = this.hostPickerService.devicesByOsType[this.osTypeKey];
  }

  onOpenRequested() {
    if (!this.devices$.getValue() || this.devices$.getValue().length === 0) {
      this.fetchRequired = true;
    }
    this.fetchDevices();
  }

  fetchDevices() {
    if (this.fetchRequired) {
      this.hostPickerService.filterDevices(this.osTypeKey);
      this.fetchRequired = false;
    }
  }

  onCloseRequested() {
    this.trigger.closeMenu();
  }

  onDeviceSelected(selectedDevice: Device) {
    if (!this.selectedDevices.find(device => device.id === selectedDevice.id)) {
      this.selectedDevices.push(selectedDevice);
    }
  }

  removeDevice(device: Device) {
    const index = this.selectedDevices.indexOf(device, 0);
    if (index > -1) {
      this.selectedDevices.splice(index, 1);
    }
  }
}
