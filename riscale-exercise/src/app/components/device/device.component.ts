import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from 'src/app/models/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() device: Device;
  @Input() isSelected: boolean;
  @Output() deviceSelected = new EventEmitter<Device>();

  constructor() { }

  ngOnInit() {
    
  }

  onClick() {
    this.deviceSelected.emit(this.device);
  }
}
