import { HostPickerService } from './../../services/host-picker.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Device } from 'src/app/models/device';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-os-data',
  templateUrl: './os-data.component.html',
  styleUrls: ['./os-data.component.scss']
})
export class OsDataComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Input() osTypeValue: string;
  @Input() osTypeKey: number;
  
  devices$: Observable<Device[]>;

  constructor(private hostPickerService: HostPickerService) { }

  ngOnInit() {
    this.devices$ = this.hostPickerService.devicesByOsType[this.osTypeKey];
  }

  onOpenRequested() {
    this.hostPickerService.filterDevices(this.osTypeKey);
  }

  onCloseRequested() {
    this.trigger.closeMenu();
  }
}
